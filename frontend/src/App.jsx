import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Login from './pages/Auth/Login'
import CaseRegistration from './pages/CaseRegistration'
// import Test from './Test'
import CaseFiling from './pages/CaseFiling'
import './App.css';
import Calendar from './pages/Calendar'
import DailyCalendar from './pages/DailyCalendar'
import Users from './pages/components/Users'
import Register from './pages/Auth/Register'
import JudgeEdit from './pages/JudgeEdit'

const CaseRegistrationHOC = CaseRegistration; 
const CaseFilingHOC = CaseFiling; 

function App() {

  return (
    <>
      <div className='flex text-black'>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/admin/casefiling" element={<CaseFiling />} />
          <Route path="/admin/caseregistration" element={<CaseRegistration />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/dailycalendar" element={<DailyCalendar />} />
          <Route path="/admin" element={<Users />} />
          <Route path="/editCases" element={<JudgeEdit />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
