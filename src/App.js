import React  from 'react'
import env from 'react-dotenv';

import Home from './Components/Screens/Home';
import Details from './Components/Screens/Details';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



const routes = createBrowserRouter([{
  path: "/",
  Component: Home
}, 
{
  path: "/details",
  Component: Details
}])
function App(){

  return <RouterProvider router={routes} />

}


export default App;