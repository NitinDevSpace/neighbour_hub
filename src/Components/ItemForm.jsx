

import React from 'react';

const ItemForm = ({ formData, handleChange, handleSubmit, message, buttonLabel }) => {
  return (
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
      <input
        type="text"
        name="condition"
        placeholder="Condition (e.g., Good, Excellent)"
        value={formData.condition}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
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
        {buttonLabel || 'Submit'}
      </button>
      {message && (
        <p className={`mt-2 ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message.text}
        </p>
      )}
    </form>
  );
};

export default ItemForm;