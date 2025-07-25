import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useItemContext } from '../context/mockItems';

function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items } = useItemContext();

  const item = items.find(i => i.id === id);
  const [requested, setRequested] = useState(false);

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
        <button
          className={`px-5 py-2 rounded text-white ${requested ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'}`}
          onClick={() => setRequested(true)}
          disabled={requested}
        >
          {requested ? 'Request Sent' : 'Request to Borrow'}
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