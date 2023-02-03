import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Nav from './folders/component/nav/Nav';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './folders/component/home/Home';
import Profile from './folders/component/profile/Profile';
import Wish from './folders/component/wish/Wish';
import Kurti from './folders/component/kurti/Kurti';
function App() {
const dispatch = useDispatch()
useEffect(()=>{
dispatch( dispatch({type:"USER_FETCH_REQUESTED"}))

},[])


  return (
   <>
      <Router>


      
         
    
          <Routes>
          <Route  path='/' element ={ <Nav/>}  />
        </Routes>


        <Routes>
          <Route  path='/' element ={<Home/>}  />
        </Routes>

        <Routes>
          <Route  path='/profile' element ={<Profile/>}  />
        </Routes>

        <Routes>
          <Route  path='/wishlist' element ={<Wish/>}  />
        </Routes>


        <Routes>
          <Route  path='/kurti' element ={<Kurti />}  />
        </Routes>
      </Router>
   </>
    
  );
}

export default App;
