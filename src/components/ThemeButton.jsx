import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

// Controls the dark and light mode
const SwitchButton = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;
  const onClick = () => {
    theme.setDarkMode(!darkMode);
  }

  return (
    <button className={`button-btn ${darkMode ? "button-dark" : "button-light"}`}
    onClick={onClick}
    
    >
    {darkMode ? " Light Mode" : "Dark Mode"}
    </button>
  )
}

export default SwitchButton;