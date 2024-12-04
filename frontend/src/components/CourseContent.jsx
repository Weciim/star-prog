import React from "react";
import { Document, Page } from "react-pdf";
import samplePdf from "../assets/pdf/sample.pdf"; // Replace with your PDF file
import media1 from "../assets/images/teacher1.png"; // Replace with your image paths
import media2 from "../assets/images/teacher2.png";

const CourseContent = () => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <section className="bg-[#f5effb] py-12 px-6 lg:px-32">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* PDF Viewer */}
        <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-lg">
          <Document
            file={samplePdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="w-full h-full"
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
              disabled={pageNumber <= 1}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <button
              onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
              disabled={pageNumber >= numPages}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Media Section */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-purple-900 mb-4">Médias</h3>
          <div className="space-y-4">
            <img
              src={media1}
              alt="Media 1"
              className="w-full h-40 object-cover rounded-lg"
            />
            <img
              src={media2}
              alt="Media 2"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
