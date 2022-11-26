import { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Button from './Components/Button/Button';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

export const AppContext = createContext();



function App() {
  const [categories, setCategories] = useState([])

  const appInfo = {
    Button,
    categories,
    setCategories
  }

  return (
    <div className='max-w-[1440px] mx-auto'>

      <AppContext.Provider value={appInfo}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </AppContext.Provider>
    </div>
  );
}

export default App;
