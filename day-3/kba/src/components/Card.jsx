import React from 'react'

const Card = ({CourseName,image,description}) => {
  return (     
    <div className="w-[410px]
                    bg-gray-400
                    p-2">
          
        <h1 className='text-center'>
          {CourseName}
        </h1>

        <div className="flex justify-center mt-4">
            <img src={image} alt={'course image'}
              className='size-60'
            />
        </div>

        <p className='text-center'>{description}</p>

        <a href="./learnmorepage.html" 
            className="bg-purple-600 
                      m-4 p-1 rounded-lg">
            Learn more
        </a>

    </div>  
  )
}
export default Card