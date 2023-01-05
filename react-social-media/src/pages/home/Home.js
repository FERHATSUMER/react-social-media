import React from 'react';
import Topbar from '../../components/tobar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './home.css';

function Home() {
  return (
    <>
   <Topbar/>
   <div className="homeContainer">
   <Sidebar/>
   <Feed/>
   <Rightbar/>
   </div>
    </>
  )
}

export default Home
