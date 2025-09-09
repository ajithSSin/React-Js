import React from 'react'

import kbaLogo from "../assets/logo.png"


const Nav = () => {
  return (
    <>
        <nav className="bg-purple-400                
                    flex justify-between                
                    dark:bg-stone-900 rounded-lg"> 

            {/* <img className="size-12 mt-4 mb-4 mx-2"            
                src="images/logo.jpeg" alt="logo"/> */}

            <img src={kbaLogo} alt="Logo"
                    className="size-12 m-4 rounded"/> {/**mt-4 mb-4 mx-2 */}
                
            <div className="mt-4 p-4 text-purple-800 ">
                <a href="./homepage.html"
                    className="hover:bg-blue-400 p-1 rounded">Home |</a>
                <a href="./courses.html"
                    className="hover:bg-blue-400 p-1 rounded">Course |</a>        
                <a href="./addCourse.html"
                    className="hover:bg-blue-400 p-1 rounded">AddCourse |</a>
                <a href="./contact.html"
                    className="hover:bg-blue-400 p-1 rounded">Contact |</a>
                <a href="./loginPage.html"
                    className="hover:bg-blue-400 p-1 rounded">Logout</a>
            </div>
        </nav>        
    </>
  )
}

export default Nav