import React from 'react'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../widgets/Navbar'
import Home from '../components/Home'
import PostAJob from '../components/PostAJob'
import Profile from '../components/Profile'
import UploadResume from '../components/UploadResume'


const DashboardMain = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route key={"/"} path={"/"} element={<Home/>} />
                <Route path={"/postnewjob"} element = {<PostAJob/>} />
                <Route path={"/profile"} element = {<Profile/>} />
                <Route path={"/uploadresume"} element = {<UploadResume/>} />
            </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default DashboardMain
