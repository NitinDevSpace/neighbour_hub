import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;