import React, { useEffect }  from 'react'

import Home from './Components/Screens/Home';
import Details from './Components/Screens/Details';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import axios from 'axios';



const routes = createBrowserRouter([{
  path: "/",
  Component: Home
}, 
{
  path: "/details",
  Component: Details
}])
function App(){

  useEffect(() => {
    
  }, []);

  return <RouterProvider router={routes} />

}


export default App;