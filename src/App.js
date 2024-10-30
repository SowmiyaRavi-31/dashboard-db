import React, { useState } from 'react';
import useDashboardStore from './store/useDashboardStore';
import Category from './components/Category';
import AddWidgetModal from './components/AddWidgetModal';
import './index.css';

const App = () => {
  const { categories } = useDashboardStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [isGlobalModalOpen, setIsGlobalModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // Filter widgets based on the search query
  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));

  // Handle opening global add widget modal
  const openGlobalAddWidgetModal = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setIsGlobalModalOpen(true);
  };

  // Close the global modal
  const closeGlobalAddWidgetModal = () => {
    setIsGlobalModalOpen(false);
    setSelectedCategoryId(null);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <input
          type="text"
          placeholder="Search widgets by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={() => setIsGlobalModalOpen(true)} className="add-widget-button">+ Add Widget</button>
      </div>

      {filteredCategories.map(category => (
        <Category key={category.id} category={category} />
      ))}

      {isGlobalModalOpen && (
        <AddWidgetModal
          categoryId={selectedCategoryId}
          closeModal={closeGlobalAddWidgetModal}
          categories={categories} // Pass categories for dropdown
          globalAdd
        />
      )}
    </div>
  );
};

export default App;
