import React from 'react';
import data from '../data/data.json';

interface Widget {
  [key: string]: string;
}

interface Category {
  name: string;
  widgets: Widget;
}

interface CategoriesData {
  categories: Category[];
}

const Category  = () => {
  const parsedData: CategoriesData = data;

  return (
    <div>
      {parsedData.categories && parsedData.categories.map((category, index) => (
        <div key={index}>
          <h2>{category.name}</h2>
          <ul>
            {Object.entries(category.widgets) && Object.entries(category.widgets).map(([key, widget]) => (
              <li key={key}>{key}: {widget}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Category;
