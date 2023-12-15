import React, { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode === 'true' || savedMode === null;
    }
    return true;
  });

  useEffect(() => {
    const className = 'dark';
    const element = document.documentElement;

    if (darkMode) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }

    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const switchClass = `relative inline-flex items-center h-6 rounded-full w-11 ${
    darkMode ? 'bg-cyan-600' : 'bg-gray-500'
  }`;
  const spanClass = `inline-block w-4 h-4 transform bg-white rounded-full ${
    darkMode ? 'translate-x-6' : 'translate-x-1'
  }`;

  return (
    <Switch checked={darkMode} onChange={setDarkMode} className={switchClass}>
      <span className={spanClass} />
    </Switch>
  );
};

export default DarkModeToggle;
