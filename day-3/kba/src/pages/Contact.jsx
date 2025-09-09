import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className=" mt-4  text-center">
          
          <p className="text-purple-800 font-sans text-sm font-bold">Contact Us</p>
          
          <p className="font-bold text-2xl">Get in touch</p>

          <p className="font-mono font-bold text-xs ">Our friendly team is always here to chat </p>
      
      </div>
      
      <div className="flex flex-row 
                      grid grid-cols-3 gap-4
                      m-3 ">

        <div className="m-3 p-2
                          basis-sm 
                          text-center 
                          shadow-xl/20">

          <div className="flex justify-center mt-4">

            <img src={""} alt="email_logo"
                      className="w-[50px] h-[50px]"/>   
              
          </div>    
              
          <p className="font-sans font-bold text-2xl ">Email</p>

          <p className="font-sans font-bold text-l" >
            Our friendly team is here to help
          </p>

          <p className="text-purple-800">
            @merakuii.com
          </p>
          
        </div>
      
        <div class="m-3 p-2  basis-sm text-center shadow-xl/20">
          
          <div className="flex justify-center mt-4">

            <img src={""} alt=""
                      className="w-[50px] h-[50px]"/>
          </div>

          <p className="font-sans font-bold text-2xl ">
            Office
          </p>

          <p className="font-sans font-bold text-l">
            Come say hello at our office HQ
          </p>
          
          <p className="text-purple-800">
            100 smith Street Collingwood VIC3066AU 
          </p>

        </div>

        <div className="m-3 p-2  basis-sm text-center shadow-xl/20">

          <div className="flex justify-center mt-4">

            <img src={""} alt=""
                      className="w-[50px] h-[50px] "/>
          </div>

          <p className="font-sans font-bold text-2xl ">
            Phone
          </p>
          
          <p className="font-sans font-bold text-l">
            Mon-Fri from 8am to 5pm
          </p>

          <p className="text-purple-800">
            +1(555)000-0000 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact