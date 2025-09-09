import React , {useState} from 'react'

const Card = ({title,text,customClasses}) => {
    
    const [likes,setLikes]=useState(0);

    const[titlecolor,setTitlecolor]=useState('text-black')

    /** card background */
    const[darkMode, setDarkMode]=useState(false);

    /**  toggle the bg color*/
    const toggleTitlecolor=()=>{
        setTitlecolor((prevColor)=>
            prevColor==="text-black"?'text-blue':"text-black"
        );
    }
    /** assgning style to dark mode */
    /**ternary operation */

    const darkModeStyle=darkMode?{background:'#222',
                                color:"#fff",
                                transition:"background 0.3s,color0.3s"
                                }:{}
  return (

    /** custom classes */
    /** button */
    /** button dark mode toggle to light mnode */
    <div className={`max-w-sm 
                    rounded 
                    overflow-hidden 
                    shadow-lg 
                    p-6 ${customClasses}`}
        style={darkModeStyle} >
       
        <button onClick={()=>setDarkMode((prev)=>!prev)}
                style={{
                    marginBottom:'0.5rem',
                    padding:"0.3rem 0.8rem",
                    borderRadius:"4px",
                    border:"none",
                    background:darkMode ?"#444":"#eee",
                    color:darkMode?"#fff":"#222",
                    cursor:"pointer",
                    float:"right"
                }}
                aria-label='Toggle Dark Mode'>
        </button>
        <h2 className={`font-bold text-xl mb-2 ${titlecolor}`}>
            {title}
        </h2>

        <p className='text-gray-700 text-base'>
            {text}
        </p>
        
         {/** */}

        <button className="mt-4 
                            px-4 py-2 
                            bg-purple-600 
                            text-white 
                            rounded 
                            hover:bg-purple-700" 
                onClick={()=>setLikes(likes+1)}
            >Likes:{likes}
        </button>       

        <button className="mt-2 
                            px-4 py-2 
                            bg-green-600
                            text-white 
                            rounded 
                            hover:bg-green-700" 
                onClick={toggleTitlecolor}
            >Toggle title color
        </button>        
    </div>
  )
}

export default Card