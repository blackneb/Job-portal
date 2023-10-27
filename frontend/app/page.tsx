import Image from 'next/image'
import Navbar from './widgets/Navbar'
import LoginPage from './components/LoginPage'
import CreateAccount from './components/CreateAccount'
import Profile from './components/Profile'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Profile/>
    </div>
  )
}
