// import React, { useState } from 'react';
// import { IoAddSharp } from "react-icons/io5";

// // Modal Component
// const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-8 rounded-lg max-w-lg w-full text-center relative">
//         <h2 className="text-xl font-semibold mb-4">Add Your Creativity!</h2>
//         <p className="mb-6">Share your creative idea here...</p>
//         <button
//           onClick={onClose}
//           className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-600 transition-all"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// const Page = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to open the modal
//   const openModal = () => setIsModalOpen(true);

//   // Function to close the modal
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="bg-gradient-to-r from-blue-800 to-red-900 w-full min-h-screen flex flex-col justify-center items-center">
//       {/* Subtitle */}
//       <p className="text-[20px] text-white mb-8">
//         Creativity comes from a conflict of ideas.
//       </p>

//       {/* Main Title */}
//       <h1 className="text-[45px] text-white mb-8">
//         Indicate us Your Creativity!
//       </h1>

//       {/* Button with Plus Icon */}
//       <button
//         onClick={openModal}
//         className="flex items-center justify-center bg-white text-blue-800 hover:bg-blue-800 hover:text-white rounded-full w-[90px] h-[90px] shadow-lg transition-all duration-300 ease-in-out"
//       >
//         <IoAddSharp className="h-[50px] w-[50px]" />
//       </button>

//       {/* Modal */}
//       {isModalOpen && <Modal onClose={closeModal} />}
//     </div>
//   );
// };

// export default Page;
