import { Routes,Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Payment from './pages/Payment'
import Admin from './pages/Admin'
import Courses from './pages/Courses'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Login from './pages/Login'
import AcessedCourse from './pages/AcessedCourse'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Homepage />}/>
        <Route path='/' element={<Homepage />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/admin' element={<Admin/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='profile' element={<Profile />} />
          <Route path='courses' element={<Courses />} />
          <Route path='payment' element={<Payment />} />
        </Route>
        
        <Route path='/course-content/:id' element={<AcessedCourse/>}/>
      </Routes>
    </>
  )
}

export default App
