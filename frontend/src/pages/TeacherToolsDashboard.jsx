import React, { useState } from 'react';
import { BookOpen, FileText, ClipboardList, GraduationCap, Languages, BarChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import SubscribeNow from '../components/SubscribeNow';
import Footer from '../components/Footer';
import { motion } from "framer-motion";

// Main Dashboard Component
const TeacherToolsDashboard = () => {
  const [activeSection, setActiveSection] = useState('quizzes');

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'quizzes':
        return <QuizManagement />;
      case 'resumees':
        return <ResumeUploader />;
      case 'grading':
        return <GradingDashboard />;
      case 'translation':
        return <TranslationTool />;
      case 'analytics':
        return <LearningAnalytics />;
      default:
        return <QuizManagement />;
    }
  };

  return (
    <>
      <Navbar />
      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="w-64 bg-purple-100 shadow-md p-4">
          <h1 className="text-2xl font-bold mb-6 text-center text-purple-800">Teacher Tools</h1>
          <nav>
            {[ 
              { name: 'Quizzes', icon: ClipboardList, key: 'quizzes' },
              { name: 'Resumés', icon: FileText, key: 'resumees' },
              { name: 'Grading', icon: BarChart, key: 'grading' },
              { name: 'Translation', icon: Languages, key: 'translation' },
              { name: 'Learning Analytics', icon: GraduationCap, key: 'analytics' }
            ].map(({ name, icon: Icon, key }) => (
              <button 
                key={key}
                onClick={() => setActiveSection(key)}
                className={`w-full flex items-center p-3 mb-2 rounded-lg transition-colors ${
                  activeSection === key 
                    ? 'bg-purple-600 text-white' 
                    : 'hover:bg-purple-200 text-purple-700'
                }`}
              >
                <Icon className="mr-3" />
                {name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          {renderActiveSection()}
        </div>
      </div>

      <SubscribeNow />
      <Footer />
    </>
  );
};

// Quiz Management Component
const QuizManagement = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [newQuiz, setNewQuiz] = useState({ title: '', subject: '' });

  const createQuiz = () => {
    if (newQuiz.title && newQuiz.subject) {
      setQuizzes([...quizzes, { 
        ...newQuiz, 
        id: Date.now(), 
        questions: [] 
      }]);
      setNewQuiz({ title: '', subject: '' });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-purple-800">Quiz Management</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input 
            placeholder="Quiz Title"
            value={newQuiz.title}
            onChange={(e) => setNewQuiz({...newQuiz, title: e.target.value})}
            className="border border-purple-300 p-2 rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <input 
            placeholder="Subject"
            value={newQuiz.subject}
            onChange={(e) => setNewQuiz({...newQuiz, subject: e.target.value})}
            className="border border-purple-300 p-2 rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>
        <button 
          onClick={createQuiz}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          Create New Quiz
        </button>

        {quizzes.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Existing Quizzes</h3>
            <ul>
              {quizzes.map(quiz => (
                <li 
                  key={quiz.id} 
                  className="flex justify-between items-center bg-purple-100 p-3 rounded mb-2"
                >
                  <span className="text-purple-800">{quiz.title} - {quiz.subject}</span>
                  <div>
                    <button className="text-purple-600 mr-2 hover:text-purple-800">Edit</button>
                    <button className="text-purple-600 hover:text-purple-800">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
const ResumeUploader = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-purple-800">Lesson Resumés</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <input 
          type="file" 
          multiple 
          onChange={handleFileUpload}
          className="mb-4 text-purple-600 
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-purple-50 file:text-purple-700
            hover:file:bg-purple-100"
        />

        {uploadedFiles.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Uploaded Files</h3>
            <ul>
              {uploadedFiles.map((file, index) => (
                <li 
                  key={index} 
                  className="flex justify-between items-center bg-purple-100 p-3 rounded mb-2"
                >
                  <span className="text-purple-800">{file.name}</span>
                  <button className="text-purple-600 hover:text-purple-800">Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Other placeholder components (simplified for brevity)
const GradingDashboard = () => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-6 text-purple-800">Grading Dashboard</h2>
    <p className="text-purple-700">Grading and student performance tracking features coming soon.</p>
  </div>
);

const TranslationTool = () => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-6 text-purple-800">Translation Tool</h2>
    <p className="text-purple-700">Google Translate-like translation features coming soon.</p>
  </div>
);

const LearningAnalytics = () => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-6 text-purple-800">Learning Analytics</h2>
    <p className="text-purple-700">Student performance and learning trend analytics coming soon.</p>
  </div>
);

export default TeacherToolsDashboard;
