"use client";
import {useState} from 'react'
import Image from 'next/image'
import Navbar from './widgets/Navbar'
import LoginPage from './components/LoginPage'
import CreateAccount from './components/CreateAccount'
import Profile from './components/Profile'
import PostAJob from './components/PostAJob'
import UploadResume from './components/UploadResume'
import DashboardMain from './layouts/DashboardMain'

export default function Home() {
  const [login, setlogin] = useState(true);
  const [createAccount, setCreateAccount] = useState(false);
  return (
    <div>

        {(() => {
          if(login === false){
            return(
              <div>
                {createAccount? <CreateAccount/> : <LoginPage/> }
              </div>
            )
          }
          else if(login === true){
            return(
              <div>
                <DashboardMain/>
              </div>
            )
          }
        })()}

    </div>
  )
}
