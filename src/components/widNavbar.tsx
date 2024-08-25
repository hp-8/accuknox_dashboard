import React, { useState } from 'react';
import data from '../data/data.json';

const WidNavbar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(data.categories[0].name);

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  const getActiveCategoryData = () => {
    return data.categories.find(cat => cat.name === activeCategory);
  };

  const activeCategoryData = getActiveCategoryData();

  return (
    <div className="flex flex-col h-full">
      {/* Navbar */}
      <div className="flex border-b-2 ">
        {data.categories.map(category => (
          <button
            key={category.name}
            className={`p-2 mr-4 text-lg font-semibold ${
              activeCategory === category.name ? 'border-b-2 border-blue-900' : 'border-b-2 border-transparent'
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Widgets List */}
      <div className="p-4 flex-1 overflow-y-auto">
        {activeCategoryData && Object.values(activeCategoryData.widgets).map((widget, index) => (
          <div key={index} className="p-2 border-b border-gray-300">
            {widget}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WidNavbar;
