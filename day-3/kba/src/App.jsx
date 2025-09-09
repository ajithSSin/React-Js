import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/Home'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TopCourses from './components/TopCourses'
import CourseGrid from './components/CourseGrid'
import coursesData from "./assets/data/courses.json"
import AllCourseButton from './components/AllCourseButton'
import ContactNew from './pages/ContactNew'
import CourseNew from './pages/CourseNew'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home />       */}

      <Navbar/>
      <Hero/>
      <TopCourses/>
      <CourseGrid courses={coursesData}/>
      <AllCourseButton/>
      <ContactNew/>
      <CourseNew/>
      <Edit/>
      <NotFound/>

    </>
  )
}

export default App
