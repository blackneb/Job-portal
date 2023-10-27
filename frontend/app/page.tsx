import Image from 'next/image'
import Navbar from './widgets/Navbar'
import LoginPage from './components/LoginPage'
import CreateAccount from './components/CreateAccount'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <CreateAccount/>
    </div>
  )
}
