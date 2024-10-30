const initialData = [
    {
      id: 'cspm',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 'widget-1', title: 'Cloud Accounts', description: 'Connected: 2, Not Connected: 2' },
        { id: 'widget-2', title: 'Cloud Account Risk Assessment', description: 'Failed: 1689, Passed: 7253' },
      ],
    },
    {
      id: 'cwpp',
      name: 'CWPP Dashboard',
      widgets: [
        { id: 'widget-3', title: 'Top 5 Namespace Specific Alerts', description: 'No Graph data available!' },
        { id: 'widget-4', title: 'Workload Alerts', description: 'No Graph data available!' },
      ],
    },
    {
      id: 'registry-scan',
      name: 'Registry Scan',
      widgets: [
        { id: 'widget-5', title: 'Image Risk Assessment', description: 'Total Vulnerabilities: 1470' },
        { id: 'widget-6', title: 'Image Security Issues', description: 'Critical: 2, High: 2' },
      ],
    },
  ];
  
  export default initialData;
  