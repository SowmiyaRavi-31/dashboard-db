import { create } from 'zustand';

const useDashboardStore = create((set) => ({
  categories: [
    {
      id: '1',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: '101', title: 'Cloud Accounts', name: 'Connected Accounts', description: 'Connected: 2, Not Connected: 2' },
        { id: '102', title: 'Cloud Account Risk Assessment', name: 'Risk Assessment', description: 'Failed: 1689, Warning: 681, Passed: 7253' },
      ],
    },
    {
      id: '2',
      name: 'CWPP Dashboard',
      widgets: [
        { id: '201', title: 'Top 5 Namespace Specific Alerts', name: 'Namespace Alerts', description: 'No Graph data available!' },
        { id: '202', title: 'Workload Alerts', name: 'Alerts', description: 'No Graph data available!' },
      ],
    },
    {
      id: '3',
      name: 'Registry Scan',
      widgets: [
        { id: '301', title: 'Image Risk Assessment', name: 'Risk Assessment', description: 'Critical: 9, High: 150' },
        { id: '302', title: 'Image Security Issues', name: 'Security Issues', description: 'Critical: 2, High: 2' },
      ],
    },
  ],

  addWidget: (categoryId, widget) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === categoryId
          ? { ...category, widgets: [...category.widgets, widget] }
          : category
      ),
    })),

  removeWidget: (categoryId, widgetId) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === categoryId
          ? { ...category, widgets: category.widgets.filter((widget) => widget.id !== widgetId) }
          : category
      ),
    })),
}));

export default useDashboardStore;
