
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CustomFooter from './assets/components/molecules/CustomFooter'
import CustomNavbar from './assets/components/molecules/CustomNavbar'
import Homepage from './assets/components/pages/Homepage'
import SignIn from './assets/components/pages/SignIn'
import Membership from './assets/components/pages/Membership'
import Faq from './assets/components/pages/Faq'
import SignUp from './assets/components/pages/SignUp'





function App() {


  return (
    <>
      <CustomNavbar/>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/FAQ" element={<Faq />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <CustomFooter/>
    </>
  )
}

export default App
