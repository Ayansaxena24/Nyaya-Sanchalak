import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Auth/Login";
import CaseRegistration from "./pages/CaseRegistration";
// import Test from './Test'
<<<<<<< HEAD
import CaseFiling from "./pages/CaseFiling";
import "./App.css";
import Calendar from "./pages/Calendar";
import DailyCalendar from "./pages/DailyCalendar";
import Users from "./pages/components/Users";
=======
import CaseFiling from './pages/CaseFiling'
import './App.css';
import Calendar from './pages/Calendar'
import DailyCalendar from './pages/DailyCalendar'
import Users from './pages/components/Users'
import Register from './pages/Auth/Register'
>>>>>>> 8ba4bfc45dae137214b938d4c256637d5b1521b2

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
<<<<<<< HEAD
      <div className="flex text-black">
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
=======
      <div className='flex text-black'>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/casefiling" element={<CaseFiling />} />
          <Route path="/caseregistration" element={<CaseRegistration />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/dailycalendar" element={<DailyCalendar />} />
          <Route path="/admin" element={<Users />} />
        </Routes>
      </BrowserRouter>
>>>>>>> 8ba4bfc45dae137214b938d4c256637d5b1521b2
      </div>
    </>
  );
}

export default App;
