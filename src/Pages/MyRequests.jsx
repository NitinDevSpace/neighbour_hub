import React, { useState } from 'react';

const mockRequests = [
  {
    id: 'req001',
    itemName: 'Cordless Drill',
    status: 'Pending',
  },
  {
    id: 'req002',
    itemName: 'Camping Tent',
    status: 'Approved',
  },
  {
    id: 'req003',
    itemName: 'Board Game: Settlers of Catan',
    status: 'Returned',
  }
];

function MyRequests() {
  const [requests, setRequests] = useState(mockRequests);
  const [message, setMessage] = useState(null);

  const handleCancel = (id) => {
    setRequests(prev => prev.map(req => req.id === id ? { ...req, status: 'Cancelled' } : req));
    setMessage("Request has been cancelled.");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Borrow Requests</h1>
      {message && <div className="mb-4 text-green-600 font-medium">{message}</div>}
      {requests.length === 0 ? (
        <p className="text-gray-600">You have not requested any items yet.</p>
      ) : (
        <ul className="space-y-4">
          {requests.map(req => (
            <li key={req.id} className="border p-4 rounded bg-white shadow">
              <h2 className="text-lg font-semibold">{req.itemName}</h2>
              <p className={`mt-1 font-medium ${
                req.status === 'Approved' ? 'text-green-600' :
                req.status === 'Pending' ? 'text-yellow-600' :
                req.status === 'Cancelled' ? 'text-red-500' :
                req.status === 'Returned' ? 'text-gray-500' : 'text-black'
              }`}>
                Status: {req.status}
              </p>
              {req.status === 'Pending' && (
                <button
                  onClick={() => handleCancel(req.id)}
                  className="mt-2 text-sm text-red-600 hover:underline"
                >
                  Cancel Request
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyRequests;