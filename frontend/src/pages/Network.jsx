import React from 'react'
import Navbar from '../components/Navbar';
export const Network = () => { 
    const profiles = [
        {
          name: 'Chouaieb NEMRI',
          description: 'Generative AI @ Google | Ex-AWS | Georgia Tech Alumni',
        },
        {
          name: 'Kalthoum Bouazza',
          description: 'Consultante junior E-Business | Chargé de veille stratégique et de l’intelligence économique',
        },
        {
          name: 'Louis Smith',
          description: '10X your traffic & profits with SEO | Helped drive $80million+ DTC MRR',
        },
      ]; 
      const contacts = [
        {
          name: 'Haroun Mabrouk',
          message: 'Hey, did you check the files?',
          time: '2:30 PM',
          avatar: 'https://via.placeholder.com/64', // Replace with actual image
        },
        {
          name: 'John Doe',
          message: 'Let’s catch up tomorrow.',
          time: '11:15 AM',
          avatar: 'https://via.placeholder.com/64', // Replace with actual image
        },
        {
          name: 'Jane Smith',
          message: 'Sure, I’ll send it over.',
          time: 'Yesterday',
          avatar: 'https://via.placeholder.com/64', // Replace with actual image
        },
      ];
  return (   
    <> 
    <Navbar/>
    <main className='w-full px-2 py-6 flex bg-[#C8B1E4] justify-between items-start min-h-full'>   
    <div className='flex flex-col gap-4 justify-start items-center'>

        <div className="w-64 border border-gray-300 rounded-lg shadow-sm bg-white">
 {/* Header Section with Background */}
 <div className="bg-gradient-to-r from-purple-800 to-purple-900 h-16 rounded-t-lg relative">
   {/* Circular Profile Picture */}
   <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
     <img
       src="https://via.placeholder.com/64" // Replace with the actual image URL
       alt="Profile"
       className="w-16 h-16 rounded-full border-4 border-white"
     />
   </div>
 </div>
 {/* Content Section */}
 <div className="pt-10 pb-4 px-4 text-center">
   <h3 className="text-lg font-bold text-gray-800">Haroun Mabrouk</h3>
   <p className="text-sm text-gray-600">ICT engineering student at SUP'COM</p>
   <p className="text-sm text-gray-500 mt-1">Gouvernorat Monastir</p>
 </div>
 {/* Footer Section */}
 
</div> 
<div className="w-full max-w-md mx-auto bg-white border border-gray-300 rounded-lg shadow-sm">
      <h2 className="text-lg font-bold rounded-t-lg bg-gradient-to-r from-purple-800 to-purple-900 text-white  border-b border-gray-200 p-4">
        Contacts
      </h2>
      <ul>
        {contacts.map((contact, index) => (
          <li
            key={index}
            className="flex items-center p-4 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
          >
            {/* Avatar */}
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-12 h-12 rounded-full"
            />
            {/* Contact Details */}
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-gray-800">{contact.name}</h3>
                <span className="text-xs text-gray-500">{contact.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{contact.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
</div>



















   <div className='w-[55%] rounded-lg bg-white min-h-screen'></div> 



















   <div className="w-80 border border-gray-300 rounded-xl bg-white">
 <h3 className="text-lg font-semibold p-3 rounded-t-lg    bg-gradient-to-r from-purple-800 to-purple-900 text-white  mb-4">Ajoutez à votre fil d’actualité</h3>
 <ul className='ml-2 mr-2'>
   {profiles.map((profile, index) => (
     <li key={index} className="flex items-center mb-4">
       <div className="mr-4">
         {/* Placeholder for profile image */}
         <div className="w-10 h-10 rounded-full bg-gray-300"></div>
       </div>
       <div className="flex-1">
         <h4 className="text-sm font-bold">{profile.name}</h4>
         <p className="text-xs text-gray-500">{profile.description}</p>
       </div>
       <button className="ml-4 px-3 py-1 text-sm text-white bg-purple-600 rounded hover:bg-blue-700">
         + Suivre
       </button>
     </li>
   ))}
 </ul>
 <a
   href="#"
   className="block mb-2 ml-2 mt-4 text-sm text-blue-600 hover:underline"
 >
   Voir toutes les suggestions →
 </a>
</div>


</main></>
    
  )
}
