import React, { useEffect, useState } from 'react';
import { useWidget, Category } from '../context/widget.context';


const WidCard: React.FC = () => {
  const { categories, selectedCategory, selectedWidgets } = useWidget();
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

  useEffect(() => {
    // When categories or selectedWidgets change, update the filteredCategories
    const updatedCategories = categories.map((cat) => ({
      ...cat,
      widgets: cat.widgets.filter((widget) => selectedWidgets.has(widget.id)),
    }));
    
    setFilteredCategories(updatedCategories);

    // Set the default category if none is selected
    if (!selectedCategory && categories.length > 0) {
      setFilteredCategories(
        updatedCategories.map((cat) => ({
          ...cat,
          widgets: cat.widgets, // Show all widgets if no category is selected
        }))
      );
    }
  }, [categories, selectedCategory, selectedWidgets]);

  if (categories.length === 0) {
    return <p className="text-center text-gray-500">Loading categories...</p>;
  }

  return (
    <div className="p-4 w-full">
      {filteredCategories.length > 0 ? (
        <div className="space-y-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.name}
              className="bg-gray-300 rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-600 border-b border-gray-200 pb-2">
                {cat.name}
              </h2>
              <div className="flex space-x-4 overflow-x-auto w-full">
                {cat.widgets.length > 0 ? (
                  cat.widgets.map((widget: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                    <div
                      key={widget.id}
                      className="bg-blue-200 border border-blue-500 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"
                      style={{ width: "250px", height: "150px" }}
                    >
                      <h3 className="text-lg font-bold text-blue-700 mb-2">{widget.name}</h3>
                      <p className="text-gray-700">{widget.text}</p>
                      {/* Add any specific widget functionality here */}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">No selected widgets in this category.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No widgets available.</p>
      )}
    </div>
  );
};

export default WidCard;