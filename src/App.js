import { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Button from './Components/Button/Button';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
// import { AuthContext } from './Context/AuthProvider/AuthProvider';
// import { useQuery } from '@tanstack/react-query';
// import Loading from './Components/Loading/Loading';


export const AppContext = createContext();



function App() {
  const api = process.env.REACT_APP_db_url;
  // const { user, loading } = useContext(AuthContext);
  const [dbUser, setDbUser] = useState();
  const [categories, setCategories] = useState([])
  // const [api, setApi] = useState();
  // const email = user?.email;

  // console.log(dbUser);

  // const { data: userData = {}, isLoading } = useQuery({
  //   queryKey: [email, api],
  //   queryFn: async () => {
  //     try {
  //       const res = await fetch(`${api}/user?email=${email}`);
  //       const data = res.json();
  //       return data
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // })

  // if (isLoading || loading) {
  //   return <Loading></Loading>
  // }

  // setDbUser(userData?.data)





  const appInfo = {
    Button,
    categories,
    setCategories,
    api,
    dbUser,
    setDbUser,

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
