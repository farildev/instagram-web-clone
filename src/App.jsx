import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './views/Home';
import Directs from './views/Directs';
import Reels from './views/Reels';
import Profile from './views/Profile';
import Explore from './views/Explore';
import Settings from './views/Settings';
import Login from './views/Login';
import Register from './views/Register';
import Sidebar from './layouts/Sidebar';

const App = () => {
  return (
    <>
      <div className='flex'>
        <Sidebar/>
        <div className="wrapper pt-[50px] px-10">
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/reels' element={<Reels/>}/>
          <Route path='/directs' element={<Directs/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        </div>
      </div>
    </>
  )
}

export default App