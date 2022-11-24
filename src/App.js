import { createContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Button from './Components/Button/Button';
import router from './Routes/Routes/Routes';

export const AppContext = createContext();

const appInfo = {
  Button
}

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>

      <AppContext.Provider value={appInfo}>
        <RouterProvider router={router}></RouterProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
