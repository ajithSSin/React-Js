import React from 'react'
import kbalogo from "../assets/images/kbalogo.png"

const Navbar = () => {
  return (
    // <!-- navbar  -->
       <div class='bg-purple-100 text-purple-950 grid grid-cols-1 md:grid-cols-2 p-3 shadow-md'>
        <div class='flex items-center'>

            <a href="#" >
                <img class='m-1p-2 size-12' src={kbalogo} alt="logo" />
            </a>
            
        </div>
        <div class='flex justify-center md:justify-end items-center mt-2 md:mt-0 space-x-5 md:space-x-10'>
            <a href="#" class='ml-20'>Home</a>
            <a href="#" class='ml-20'>Courses</a>
            <a href="#" class='ml-20'>Contact Us</a>
            <a href="#" class='ml-20'>Add Course</a>
        </div>
    </div>
  )
}

export default Navbar