import Image from 'next/image'
import Navbar from './widgets/Navbar'
import LoginPage from './components/LoginPage'
import CreateAccount from './components/CreateAccount'
import Profile from './components/Profile'
import PostAJob from './components/PostAJob'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <PostAJob/>
    </div>
  )
}
