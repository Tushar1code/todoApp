import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-between items-center">
      <div className="text-2xl font-bold">TodoApp</div>
      <div className="space-x-4">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
      <div>
        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded">Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
