import React, { useState } from 'react';
import useDashboardStore from '../store/useDashboardStore';

const AddWidgetModal = ({ categoryId, closeModal, categories = [], globalAdd = false }) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(categoryId || '');
  const { addWidget } = useDashboardStore();

  const handleAddWidget = () => {
    if (title && name && description && selectedCategoryId) {
      const newWidget = {
        id: Date.now().toString(),
        title,
        name,
        description,
      };
      addWidget(selectedCategoryId, newWidget);
      closeModal();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3 className="modal-title">Add a New Widget</h3>
        
        {/* Only show category selection if opened from the global button */}
        {globalAdd && (
          <select
            className="modal-select"
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
          >
            <option value="">Select Dashboard</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        )}

        <input
          type="text"
          placeholder="Widget Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="modal-input"
        />
        <input
          type="text"
          placeholder="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="modal-input"
        />
        <textarea
          placeholder="Widget Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="modal-textarea"
        />
        <div className="modal-buttons">
          <button onClick={handleAddWidget} className="modal-btn add-btn">Add</button>
          <button onClick={closeModal} className="modal-btn cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
