import React, { useState, useEffect } from "react";
import { useSidebar } from "../utils/useSidebar";
import { RxCross2 } from "react-icons/rx";
import WidNavbar from "./widNavbar";
import AddWidgetForm from "../utils/addWidForm";
import AddCategoryForm from "../utils/addCategoryForm";
import Modal from "../utils/modal";
import { useWidget } from "../context/widget.context";

const AddWid: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    addWidget,
    removeWidget,
    addCategory,
    removeCategory
  } = useWidget();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCategoryMode, setIsCategoryMode] = useState<boolean>(false);

  const handleAddWidget = (name: string, text: string) => {
    addWidget(name, text);
    setIsModalOpen(false);
  };

  const handleRemoveWidget = (categoryName: string, widgetId: string) => {
    if (removeWidget) {
      removeWidget(categoryName, widgetId);
    }
  };

  const handleSelectCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const handleRemoveCategory = (categoryName: string) => {
    if (removeCategory) {
      removeCategory(categoryName);
    }
  };

  const handleAddCategory = (categoryName: string) => {
    if (addCategory) {
      addCategory(categoryName);
    }
  };

  const handleOpenModal = (mode: 'widget' | 'category') => {
    if (mode === 'widget' && selectedCategory) {
      setIsModalOpen(true);
      setIsCategoryMode(false);
    } else if (mode === 'category') {
      setIsModalOpen(true);
      setIsCategoryMode(true);
    } else {
      alert("Please select a category before adding a widget.");
    }
  };

  useEffect(() => {
    if (isSidebarOpen && categories.length > 0) {
      setSelectedCategory(categories[0].name);
    }
  }, [isSidebarOpen, categories, setSelectedCategory]);

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full bg-white text-black transition-transform duration-300 ease-in-out z-30 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "45%" }}
      >
        <button
          className="absolute top-4 right-4 text-black"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          <RxCross2 color="white" size={28} />
        </button>

        <h2 className="p-4 text-lg font-bold bg-blue-900 text-white">
          Add Widget
        </h2>

        <WidNavbar
          onRemoveWidget={handleRemoveWidget}
          onSelectCategory={handleSelectCategory}
          onRemoveCategory={handleRemoveCategory}
        />

        <button
          className="m-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => handleOpenModal('widget')}
        >
          + Add Widget
        </button>

        <button
          className="m-4 px-4 py-2 bg-green-600 text-white rounded"
          onClick={() => handleOpenModal('category')}
        >
          + Add Category
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          {isCategoryMode ? (
            <AddCategoryForm onAddCategory={handleAddCategory} />
          ) : (
            selectedCategory && (
              <AddWidgetForm
                category={selectedCategory}
                onAddWidget={handleAddWidget}
              />
            )
          )}
        </Modal>
      </div>

      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />
    </>
  );
};

export default AddWid;