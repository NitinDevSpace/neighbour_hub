import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          NeighbourHub
        </Link>
        <div className="flex gap-4 text-sm font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/add-item" className="hover:underline">Add Item</Link>
          <Link to="/my-requests" className="hover:underline">My Requests</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
