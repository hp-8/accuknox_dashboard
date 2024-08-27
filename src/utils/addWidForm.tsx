import React, { useState } from 'react';

interface AddWidgetFormProps {
  category: string;
  onAddWidget: (name: string, text: string) => void;
}

const AddWidgetForm: React.FC<AddWidgetFormProps> = ({ category, onAddWidget }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddWidget(widgetName, widgetText);
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-lg font-bold mb-4">Add New Widget to {category}</h2>
      <div className="mb-4">
        <label htmlFor="widgetName" className="block mb-2">Widget Name</label>
        <input
          id="widgetName"
          type="text"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="widgetText" className="block mb-2">Widget Text</label>
        <textarea
          id="widgetText"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Add Widget
      </button>
    </form>
  );
};

export default AddWidgetForm;
