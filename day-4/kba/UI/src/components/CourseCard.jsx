import React,{useState} from 'react'
import rpImage from "../assets/images/rp.png"


const CourseCard = ({course}) => {
  const [showFullDescription, setshowFullDescription]= useState(false)

  const description=showFullDescription? course.description : course.description.substring(0,70)

  return (
    <div class=' bg-purple-100  rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
            <h2 class=' font-bold text-lg text-purple-900 '>
               {course.title}
            </h2>
            <img src={rpImage} alt="course thumbnail" class='w-80 h-40 ' />

            <p class='text-black group-hover:text-white my-2 mx-5'>
                {description} </p> {/** course.description*/}

                {/**burtton creation for show more or show less */}
            <button className="flex flex-col
                                w-full px-5 text-purple-400 
                                hover:text-puple-600 py-2" 
                                onClick={()=>setshowFullDescription(!showFullDescription)}>
                                            {showFullDescription?'Less': 'More'}
            </button>
            
            <a href="#" class="bg-purple-500 
            text-white px-4 py-2 rounded hover:bg-purple-600 self-start mx-5">Learn More</a>
        </div>
  )
}

export default CourseCard