import React from 'react'

const HomePage = () => {
  return (
    <>
    <div className="bg-gray-400 rounded ">

        <h2 className="font-sans font-bold text-xl 
                        text-purple-800 text-center 
                        m-3">
            BROWSE OUR TOP COURSES
        </h2>
        <p className="font-mono
                    text-purple-800
                    text-xs
                    text-center">
            Choose the course that's right for your career goals
        </p>
    </div>
    <div className="font-serif font-bold 
                text-3xl text-purple-600">
        <p>Top Courses</p>
    </div>
    <div className="justify-center
                grid grid-cols-3 gap-4 
                text-black">
        <div className="w-[330px] 
                    bg-gray-200
                    p-4 dark:bg-black">
            <p className="text-center">Certified Blockchain Architect</p>

            <img src={""} alt="course image"
                className="size-60 " />
            <p>
                Program offers the blockchain developers an exciting opportunity to 
                work with the Research & Development Engineers and Scientists of Kerala Blockchain Academy 
                on its live Blockchain projects.The program will help the Certified Ethereum Developers and 
                Certified Hyperledger Developers to apply their theoretical and practical knowledge and gain 
                real project exposure to all facets of Blockchain development activities.
            </p>
            
            <a href="./learnmorepage.html"
               className="bg-purple-400 hover:bg-purple-950">
                Learn more
            </a>
        </div>
        <div className="w-[330px] 
                    bg-gray-200
                    p-4 dark:bg-black">
            <p>Certified Ethereum Developer Program</p>
            <img src={""} alt="course image"
                class="size-60" />
            <p >
                The Ethereum Developer Program is a comprehensive, self-paced free course designed to
                educate individuals about the Ethereum Blockchain. Targeted at individuals interested in
                Ethereum, this open-access course delves deeply into the Ethereum ecosystem,smart contracts 
                and decentralised applications(DApps), equipping learners with essential knowledge of its 
                tools and frameworks. Through this program, learners will gain the skills to identify 
                real-world problems and develop effective Ethereum DApps, thereby enhancing their ability to 
                innovate within the rapidly evolving field of blockchain technology.                
            </p>
            
            <a href="./learnmorepage.html"
               className="bg-purple-400 hover:bg-purple-950">
                Learn more
            </a>
        </div>
        <div className="w-[330px]
                    bg-gray-200
                    p-4 dark:bg-black">
            <p>Developer Essentials for Blockchain</p>
            <img src={""} alt="course image"
                className="size-60" />
            <p>
                The “Developer Essentials for Blockchain” course is designed as a bridge for 
                individuals with fundamental programming knowledge who plan to develop applications in the 
                blockchain space. The course aims to help learners understand the integrated working of 
                various technologies commonly used in blockchain development, including front-end 
                development,back-end development, databases, containers, and Git. By building a 
                simple Hello World application using React, Express, MongoDB, Docker, and Git, participants will 
                gain practical experience and a solid foundation to explore DApp (Decentralized Application) 
                development further.
            </p>            
            
            <a href="./learnmorepage.html"
               className="bg-purple-400 hover:bg-purple-950" >
                Learn more
            </a>
        </div>
        <div className="w-[330px]
                    bg-gray-200
                    p-4 dark:bg-black">
            <p>Certified Ethereum Network Administrator</p>
            <img src={""} alt="course name"
                className="size-60" />
            <p className="text-wrap">
                Dive deep into the world of Ethereum-based blockchain networks with our comprehensive course.
                Designed for those passionate about blockchain exploration and experimentation, this course 
                offers theoretical knowledge and practical application.Whether you're a blockchain enthusiast 
                or a professional aiming to leverage Ethereum for enterprise solutions, this course is your 
                gateway to mastering the Ethereum platform.
            </p>
            
            <a href="./learnmorepage.html"
               className="bg-purple-400 hover:bg-purple-950">
                Learn more
            </a>
        </div>
    </div>
    </>
  )
}

export default HomePage