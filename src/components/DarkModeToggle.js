import React, { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? savedMode === 'true' : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <Switch
      checked={darkMode}
      onChange={setDarkMode}
      className={`${darkMode ? 'bg-cyan-600' : 'bg-gray-500'}
        text-base font-medium text-gray-500 dark:text-gray-50 hover:text-gray-900 dark:hover:text-cyan-500
        relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span
        className={`${darkMode ? 'translate-x-6' : 'translate-x-1'}
          inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  );
};

export default DarkModeToggle;
