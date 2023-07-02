import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import MyImage from '../assets/MyImage.jpg'
import { Link } from "react-scroll";


function Home() {
    return (
        <div
        name="home"
        className="h-screen w-full bg-[#0a192f]"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a MERN Stack Web Developer
            </h2>
            <p className="text-gray-500 py-4 ml-3 max-w-md">
            I have 4 years of experience in graphics design and web development.
              Currently, I love to work on web application using technologies like
              React, and Mongodb.
            </p>
            <div>
              <Link
                to="about"
                smooth
                duration={500}
                className="group text-white w-fit mx-3 px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                About Me
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={25} className="ml-3" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={MyImage}  
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
      )
    }

export default Home