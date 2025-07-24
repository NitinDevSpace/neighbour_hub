import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const mockItems = [
  {
    id: 'itm001',
    name: 'Cordless Drill',
    description: '18V cordless drill, lightly used.',
    category: 'Tools',
    owner: 'Alice Johnson',
    condition: 'Good',
    available: true,
    image: 'https://example.com/images/drill.jpg',
    borrowedBy: null,
    sold: false,
  },
  {
    id: 'itm003',
    name: 'Crock Pot',
    description: 'Large 6-quart slow cooker, works great.',
    category: 'Kitchen',
    owner: 'Samantha Green',
    condition: 'Very Good',
    available: false,
    image: 'https://example.com/images/crockpot.jpg',
    borrowedBy: 'Prachi Patel',
    sold: false,
  }
];

function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = mockItems.find(i => i.id === id);

  if (!item) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl text-red-600 font-semibold">Item not found.</h2>
        <button onClick={() => navigate('/')} className="mt-4 text-blue-600 underline">Go back</button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={item.image} alt={item.name} className="w-full h-60 object-cover rounded mb-6" />
      <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
      <p className="text-gray-700 mb-2"><span className="font-semibold">Description:</span> {item.description}</p>
      <p className="text-gray-700 mb-1"><span className="font-semibold">Category:</span> {item.category}</p>
      <p className="text-gray-700 mb-1"><span className="font-semibold">Owner:</span> {item.owner}</p>
      <p className="text-gray-700 mb-4"><span className="font-semibold">Condition:</span> {item.condition}</p>

      {item.available && !item.sold ? (
        <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
          Request to Borrow
        </button>
      ) : (
        <p className="text-red-500 font-semibold">
          {item.sold ? 'This item is marked as Sold.' : `Currently borrowed by ${item.borrowedBy || 'someone'}.`}
        </p>
      )}

      <div className="mt-6">
        <button onClick={() => navigate('/')} className="text-blue-600 underline">
          &larr; Back to Catalog
        </button>
      </div>
    </div>
  );
}

export default ItemDetails;