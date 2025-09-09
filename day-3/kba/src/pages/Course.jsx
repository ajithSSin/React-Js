import React from 'react'

import courseImage from "../assets/course.png"

const Course = () => {
  return (
    <div className="grid grid-cols-3 gap-4">

      <div className="text-center
                    bg-gray-200 
                    mt-4 p-5 
                    shadow-xl/20" >

        <p >Certified Blockchain Architect</p>

        <div className="flex justify-center mt-4">        
          <img src={courseImage} alt="image" className="size-60" />        
        </div>

        <p class="mt-4 mb-4">11Q</p>

        <a href="./learnmorepage.html" 
            className="bg-purple-600 p-2 mt-4">
            Learn more
        </a>

      </div>

      <div className="text-center 
                    bg-gray-200
                    mt-4 p-5
                    shadow-xl/20" >

        <p >Certified Blockchain Architect</p>
            
        <div className="flex justify-center mt-4">

          <img src={courseImage} alt="image"className="size-60" />
        
        </div>
        <p className="m-4">
          11Q
        </p>{/** mt-4 mb-4"*/}

        <a href="./learnmorepage.html" 
            className="bg-purple-600 p-2 mt-4">
          Learn more
        </a>

      </div>

      <div className="text-center 
                    bg-gray-200
                    mt-4 p-5
                    shadow-xl/20">

        <p >Certified Blockchain Architect</p>

        <div className="flex justify-center mt-4">
          <img src={courseImage} 
                alt="image"
                className="size-60" />
        </div>
            
        <p className="mt-4 mb-4">11Q</p>
        <a href="./learnmorepage.html" 
            className="bg-purple-600 p-2 mt-4">
          Learn more
        </a>
      </div> 

    </div>
  )
}

export default Course