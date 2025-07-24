import React, { useState } from 'react';
import { useItemContext } from '../context/mockItems';

function AddItem() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    condition: '',
    image: '',
  });

  const [message, setMessage] = useState(null);
  const { addItem } = useItemContext();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(val => val.trim() === '')) {
      setMessage({ type: 'error', text: 'Please fill all fields' });
      return;
    }

    const isSuccess = Math.random() > 0.3;
    setMessage({
      type: isSuccess ? 'success' : 'error',
      text: isSuccess ? 'Item added successfully!' : 'Failed to add item. Try again.',
    });

    if (isSuccess) {
      const newItem = {
        ...formData,
        id: Date.now().toString(),
        owner: "You", // or replace with user context if available
        available: true,
        borrowedBy: null,
        sold: false,
      };
      addItem(newItem);
      setFormData({
        name: '',
        description: '',
        category: '',
        condition: '',
        image: '',
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="Tools">Tools</option>
          <option value="Outdoors">Outdoors</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Fitness">Fitness</option>
          <option value="Games">Games</option>
        </select>
        <select
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Condition</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Excellent">Excellent</option>
        </select>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
        {message && (
          <p className={`mt-2 ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message.text}
          </p>
        )}
      </form>
    </div>
  );
}

export default AddItem;