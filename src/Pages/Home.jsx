import React, { useState } from 'react';

const mockItems = [
  {
    id: 'itm001',
    name: 'Cordless Drill',
    image: 'https://example.com/images/drill.jpg',
    category: 'Tools',
    available: true,
    owner: 'Alice Johnson',
    sold: false,
  },
  {
    id: 'itm002',
    name: 'Camping Tent',
    image: 'https://example.com/images/tent.jpg',
    category: 'Outdoors',
    available: true,
    owner: 'Brian Lee',
    sold: false,
  },
  {
    id: 'itm003',
    name: 'Crock Pot',
    image: 'https://example.com/images/crockpot.jpg',
    category: 'Kitchen',
    available: false,
    owner: 'Samantha Green',
    sold: false,
  }
];

function Home() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredItems = mockItems
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Neighborhood Items Catalog</h1>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
        />
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="name">Sort by Name</option>
          <option value="category">Sort by Category</option>
          <option value="owner">Sort by Owner</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-4">{item.name}</h2>
            <p className="text-gray-600">Category: {item.category}</p>
            <p className="text-gray-600">Owner: {item.owner}</p>
            <p className={`mt-1 font-semibold ${item.available ? 'text-green-600' : 'text-red-500'}`}>
              {item.available ? 'Available' : 'Not Available'}
            </p>
            <button className="mt-3 text-sm text-blue-600 hover:underline">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;