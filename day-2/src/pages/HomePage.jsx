import React from 'react'
import Demo from '../components/Demo'
import Card from '../components/Card'

const HomePage = () => {
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
    <div>
    <h1>Welcome to home page</h1>

    <Demo/>

    {
       /** using map fn iterates 3 times */
       /**key for unique identity */
       /** */
        cardsData.map((card)=>(
            <Card
                key={card.id}
                title={card.title}
                text={card.text}
                customClasses={card.customClasses}
            />
        ))
    }
    </div>
  )
}

export default HomePage