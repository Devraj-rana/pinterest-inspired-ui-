import React from 'react'

const Header = () => {
  return (
     <div className="px-12">
        <header className=" rounded-4xl flex justify-between items-center px-20 py-5 bg-green-900 ">
          <div className="text-2xl font-bold text-yellow-500 px-20">Olivia</div>
          <nav className="space-x-6 text-white font-medium hidden md:flex px-20">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Blogs</a>
            <a href="#">Testimonials</a>
          </nav>
          <button className="bg-white text-green-900 px-4 py-2 rounded-full hover:bg-green-950 hover:text-white cursor-pointer">
            Contact Me
          </button>
        </header>
      </div>
  )
}

export default Header