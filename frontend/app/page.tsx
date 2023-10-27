import Image from 'next/image'
import Navbar from './widgets/Navbar'
import LoginPage from './components/LoginPage'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <LoginPage/>
    </div>
  )
}
