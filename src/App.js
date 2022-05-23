import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Appointment from './Components/Pages/Appointment/Appointment';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import RequireAuth from './Components/Pages/Login/RequreAuth';
import SignUp from './Components/Pages/Login/Signup';
import Navbar from './Components/Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MyAppointment from './Components/Pages/Dashboard/MyAppointment';
import MyReview from './Components/Pages/Dashboard/MyReview';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } > <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
