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
import CreatePost from './components/CreatePost';
import SearchSidebar from './components/SearchSidebar';
import { useSelector } from 'react-redux';

const App = () => {
  const {toggle} = useSelector((state) => state.site);
  return (
    <>
      <SearchSidebar/>
        {
          (toggle ? <CreatePost/> : "")
        }
      <div className='flex'>
        <Sidebar/>
        <div className="wrapper pt-[30px] flex-auto overflow-auto">
          <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home/>}/>
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