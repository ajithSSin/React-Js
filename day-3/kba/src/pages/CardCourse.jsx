import React from 'react'

import Card from '../components/Card'
import courseImage from "../assets/course.png"

const CardCourse = () => {
// /**array of objects */
const cardsData=[
  {
    id:1, 
      courseName:"Certified Blockchain Architect",
      image:courseImage,
      desc:"11Q"
  },
  {
    id:2,
      courseName:"Certified Ethereum Developer",
      image:courseImage,
      desc:"asd"
  },
  {
    id:3,
      courseName:"Developer Essentials for Blockchain",
      image:courseImage,
    // customClasses:"bg-yellow-200",
      desc:"asd"
  }
]

return( 
  <>
    <h1>Courses</h1>    
    <div className='grid grid-cols-3 gap-4'>   
      {
        cardsData.map((card)=>(
          <Card 
            key={card.id}
            CourseName={card.courseName}
            image={card.image}
            customClasses={card.customClasses}
            description={card.desc}
          />
        ))
      }
    </div>   
  </>  
)
}

export default CardCourse