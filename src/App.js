import React, { useEffect }  from 'react'

import Home from './Components/Screens/Home';
import Details from './Components/Screens/Details';
import { RouterProvider, createBrowserRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store/store';



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

  return  <>
  <Provider store={store}>
    <BrowserRouter  basename='/' >
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/details' Component={Details}/>
      </Routes>
    </BrowserRouter>

    </Provider>
  </>

}


export default App;