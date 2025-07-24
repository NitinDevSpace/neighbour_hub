import React, { useState } from 'react';

const mockUser = {
  name: 'Alice Johnson',
  email: 'alice@example.com',
  trustScore: 9.5,
  lendingCount: 7,
  borrowingCount: 2,
};

function UserProfile() {
  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>

      <div className="bg-white border p-4 rounded shadow space-y-4">
        <div>
          <label className="block font-medium">Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          ) : (
            <p className="text-gray-700">{user.name}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          ) : (
            <p className="text-gray-700">{user.email}</p>
          )}
        </div>

        <div className="text-gray-700">
          <p><span className="font-medium">Trust Score:</span> {user.trustScore}/10</p>
          <p><span className="font-medium">Items Lent:</span> {user.lendingCount}</p>
          <p><span className="font-medium">Items Borrowed:</span> {user.borrowingCount}</p>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
}

export default UserProfile;