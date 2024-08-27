import React, { useState } from 'react';
import { useWidget } from '../context/widget.context';

const SearchBar: React.FC = () => {
  const { categories, setFilteredWidgets, setFilteredCategories } = useWidget();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter widgets based on the search term
    const filteredWidgets = categories.flatMap(category => 
      category.widgets.filter(widget => widget.name.toLowerCase().includes(term))
    );

    // Filter categories based on the search term
    const filteredCategories = categories.filter(category =>
      category.widgets.some(widget => widget.name.toLowerCase().includes(term))
    );

    setFilteredWidgets(filteredWidgets);
    setFilteredCategories(filteredCategories); // Update filtered categories
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default SearchBar;