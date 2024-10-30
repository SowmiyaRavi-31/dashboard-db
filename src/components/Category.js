import React, { useState } from 'react';
import useDashboardStore from '../store/useDashboardStore';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';

const Category = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} categoryId={category.id} widget={widget} />
        ))}
        <button className="add-widget-btn" onClick={() => setIsModalOpen(true)}>+ Add Widget</button>
      </div>
      {isModalOpen && (
        <AddWidgetModal
          categoryId={category.id}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Category;
