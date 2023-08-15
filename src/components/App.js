import React from 'react';
import Tabs from './Tabs'; // Assuming the Tabs component is in a file named Tabs.js

const tabSet1 = [
  { title: 'Tab 1', content: 'Content for Tab 1' },
  { title: 'Tab 2', content: 'Content for Tab 2' },
  { title: 'Tab 3', content: 'Content for Tab 3' },
];

const tabSet2 = [
  { title: 'Tab A', content: 'Content for Tab A' },
  { title: 'Tab B', content: 'Content for Tab B' },
  { title: 'Tab C', content: 'Content for Tab C' },
];

const App = () => {
  return (
    <div>
      <Tabs tabs={tabSet1} />
      <Tabs tabs={tabSet2} />
    </div>
  );
};

export default App;


