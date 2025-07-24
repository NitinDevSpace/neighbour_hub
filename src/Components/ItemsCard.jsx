

import React from 'react';

const ItemsCard = ({ item, onViewDetails, onMarkSold }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-4">{item.name}</h2>
      <p className="text-gray-600">Category: {item.category}</p>
      <p className="text-gray-600">Owner: {item.owner}</p>
      <p className={`mt-1 font-semibold ${item.available ? 'text-green-600' : 'text-red-500'}`}>
        {item.available ? 'Available' : 'Not Available'}
      </p>
      <div className="mt-3 flex flex-col gap-2">
        <button
          onClick={() => onViewDetails(item.id)}
          className="text-sm text-blue-600 hover:underline"
        >
          View Details
        </button>
        {item.available && !item.sold && onMarkSold && (
          <button
            onClick={() => onMarkSold(item.id)}
            className="text-sm text-red-600 hover:underline"
          >
            Mark as Sold
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemsCard;