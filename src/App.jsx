import { useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { StudentPage } from './pages/StudentPage'
import { CoursePage } from './pages/CoursePage'
import { EnrollmentPage } from './pages/EnrollmentPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-sky-100 min-h-screen'>
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/students' element={<StudentPage/>}/>
          <Route path='/courses' element={<CoursePage/>}/>
          <Route path='/enroll' element={<EnrollmentPage/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
