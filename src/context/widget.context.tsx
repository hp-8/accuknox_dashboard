import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import widgetData from '../data/data.json';

export interface Widget {
  id: string;
  name: string;
  text: string;
}

export interface Category {
  name: string;
  widgets: Widget[];
}

interface WidgetContextType {
  categories: Category[];
  selectedCategory: string;
  selectedWidgets: Set<string>;
  filteredWidgets: Widget[];
  filteredCategories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setSelectedWidgets: React.Dispatch<React.SetStateAction<Set<string>>>;
  setFilteredWidgets: React.Dispatch<React.SetStateAction<Widget[]>>;
  setFilteredCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  addWidget: (name: string, text: string) => void;
  removeWidget: (categoryName: string, widgetId: string) => void;
  addCategory?: (categoryName: string, widgets?: Widget[]) => void;
  removeCategory?: (categoryName: string) => void;
}

const WidgetContext = createContext<WidgetContextType>({} as WidgetContextType);

export const WidgetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedWidgets, setSelectedWidgets] = useState<Set<string>>(new Set());
  const [filteredWidgets, setFilteredWidgets] = useState<Widget[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Simulate fetching widget data
    setCategories(widgetData.categories);
  }, []);

  const addWidget = (name: string, text: string) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === selectedCategory
          ? {
              ...category,
              widgets: [
                ...category.widgets,
                { id: `w${category.widgets.length + 1}`, name, text }
              ],
            }
          : category
      )
    );
  };

  const removeWidget = (categoryName: string, widgetId: string) => {
    setCategories((prevCategories) => {
      const updatedCategories = prevCategories.map((category) => {
        if (category.name === categoryName) {
          return {
            ...category,
            widgets: category.widgets.filter(widget => widget.id !== widgetId),
          };
        }
        return category;
      });

      return updatedCategories;
    });
  };

  const addCategory = (name: string, widgets: Widget[] = []) => {
    setCategories((prevCategories) => [
      ...prevCategories,
      { name, widgets },
    ]);
  };

  const removeCategory = (name: string) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.name !== name)
    );
  };

  return (
    <WidgetContext.Provider
      value={{
        categories,
        selectedCategory,
        selectedWidgets,
        filteredWidgets,
        filteredCategories,
        setCategories,
        setSelectedCategory,
        setSelectedWidgets,
        setFilteredWidgets,
        setFilteredCategories,
        addWidget,
        removeWidget,
        addCategory,
        removeCategory,
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidget = () => {
  const context = useContext(WidgetContext);
  if (!context) {
    throw new Error('useWidget must be used within a WidgetProvider');
  }
  return context;
};