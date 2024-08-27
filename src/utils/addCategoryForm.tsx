// src/utils/addCategoryForm.tsx

import React, { useState } from 'react';

interface AddCategoryFormProps {
  onAddCategory: (categoryName: string) => void;
}

const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ onAddCategory }) => {
  const [categoryName, setCategoryName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (categoryName.trim()) {
      onAddCategory(categoryName.trim());
      setCategoryName(''); // Clear input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">Category Name</label>
        <input
          id="categoryName"
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Add Category
      </button>
    </form>
  );
};

export default AddCategoryForm;