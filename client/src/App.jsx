import { useState } from 'react'
import SendMail from './sendMail'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import OtpMail from './otpMail'
import VerifyOtp from './verifyotp'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SendMail/>}></Route>
        <Route path='/sendotp' element={<OtpMail/>}></Route>
        <Route path='/verifyotp' element={<VerifyOtp/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
