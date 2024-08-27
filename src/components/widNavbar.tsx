import React from 'react';
import { useWidget } from '../context/widget.context';
import { RiCloseLine } from 'react-icons/ri';

interface WidNavbarProps {
  onRemoveWidget: (categoryName: string, widgetId: string) => void;
  onSelectCategory: (categoryName: string) => void;
  onRemoveCategory: (categoryName: string) => void;
}

const WidNavbar: React.FC<WidNavbarProps> = ({ onRemoveWidget, onSelectCategory, onRemoveCategory }) => {
  const { categories, selectedCategory, selectedWidgets, setSelectedWidgets } = useWidget();

  const handleCheckboxChange = (widgetId: string) => {
    setSelectedWidgets(prevSelected => {
      const updatedSelected = new Set(prevSelected);
      if (updatedSelected.has(widgetId)) {
        updatedSelected.delete(widgetId);
      } else {
        updatedSelected.add(widgetId);
      }
      return updatedSelected;
    });
  };

  return (
    <nav className="p-4">
      {/* Categories Navbar */}
      <div className="flex mb-4 overflow-x-auto">
        {categories.map(category => (
          <div key={category.name} className="relative flex-shrink-0">
            <button
              onClick={() => onSelectCategory(category.name)}
              className={`block px-4 py-2 mx-2 ${
                selectedCategory === category.name ? 'border-b-2 border-blue-600' : ''
              } hover:bg-gray-200`}
            >
              {category.name}
            </button>
            <RiCloseLine
              onClick={() => onRemoveCategory(category.name)}
              className="absolute top-1 right-1 cursor-pointer text-red-600"
              title="Remove Category"
            />
          </div>
        ))}
      </div>

      {/* Widgets List */}
      {selectedCategory && (
        <ul>
          {categories.find(cat => cat.name === selectedCategory)?.widgets.map(widget => (
            <li key={widget.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={selectedWidgets.has(widget.id)}
                onChange={() => handleCheckboxChange(widget.id)}
                className="mr-2"
              />
              <span className="flex-1">{widget.name}</span>
              <RiCloseLine
                onClick={() => onRemoveWidget(selectedCategory, widget.id)}
                className="text-red-600 cursor-pointer"
                title="Remove Widget"
              />
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default WidNavbar;