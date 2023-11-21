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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex text-black'>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/casefiling" element={<CaseFiling />} />
          <Route path="/caseregistration" element={<CaseRegistration />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/dailycalendar" element={<DailyCalendar />} />
          <Route path="/admin" element={<Users />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
