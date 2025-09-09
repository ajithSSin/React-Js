import React from 'react'

import CardDemo from '../components/CardDemo'

const DemoCard = () => {
/**array of objects */
    const cardsData=[
    {id:1,
        title:"Card1",
        text:"This is First Card",
        customClasses:"bg-yellow-200"
    },
    {id:2,
        title:"Card2",
        text:"This is Second Card",
        customClasses:"bg-blue-200"
    },
    {id:3,
        title:"Card3",
        text:"This is Third Card",
        customClasses:"bg-red-200"
    }
]
  return (
    <>    
    <h1>Welcome</h1>   
    {
       /** using map fn iterates 3 times */
       /**key for unique identity */
       /** */
        cardsData.map((card)=>(
            <CardDemo
                key={card.id}
                title={card.title}
                text={card.text}
                customClasses={card.customClasses}
            />
        ))
    }    
    </>
  )
}

export default DemoCard