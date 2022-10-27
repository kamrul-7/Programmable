
import { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './components/Routes/Routes/Routes';

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <div >
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <RouterProvider router={routes}></RouterProvider>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
