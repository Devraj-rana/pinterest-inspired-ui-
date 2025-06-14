// // // 'use client';
// // // import React, { useState} from 'react'

// // // const Header = () => {
// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

// // //   React.useEffect(() => {
// // //     const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
// // //     if (savedTheme) {
// // //       setTheme(savedTheme);
// // //       if (savedTheme === 'dark') {
// // //         document.documentElement.classList.add('dark');
// // //       }
// // //     } else {
// // //       if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
// // //         setTheme('dark');
// // //         document.documentElement.classList.add('dark');
// // //       }
// // //     }
// // //   }, []);

// // //   const toggleTheme = () => {
// // //     if (theme === 'light') {
// // //       setTheme('dark');
// // //       document.documentElement.classList.add('dark');
// // //       localStorage.setItem('theme', 'dark');
// // //     } else {
// // //       setTheme('light');
// // //       document.documentElement.classList.remove('dark');
// // //       localStorage.setItem('theme', 'light');
// // //     }
// // //   };

// // //   return (
// // //     <div className="px-4 md:px-12">
// // //         <header className="rounded-4xl flex justify-between items-center px-4 md:px-20 py-5 bg-green-900 relative">
// // //           <div className="text-2xl font-bold text-yellow-500 px-4 md:px-20">Olivia</div>

// // //           {/* Desktop Nav */}
// // //           <nav className="space-x-6 text-white font-medium hidden md:flex px-4 md:px-20">
// // //             <a href="#" className="text-white">
// // //               Home
// // //             </a>
// // //             <a href="#">Services</a>
// // //             <a href="#">About</a>
// // //             <a href="#">Projects</a>
// // //             <a href="#">Blogs</a>
// // //             <a href="#">Testimonials</a>
// // //           </nav>

// // //           {/* Mobile Menu Button */}
// // //           <button
// // //             className="md:hidden text-white focus:outline-none"
// // //             onClick={() => setMenuOpen(!menuOpen)}
// // //             aria-label="Toggle menu"
// // //           >
// // //             <svg
// // //               className="w-6 h-6"
// // //               fill="none"
// // //               stroke="currentColor"
// // //               viewBox="0 0 24 24"
// // //               xmlns="http://www.w3.org/2000/svg"
// // //             >
// // //               {menuOpen ? (
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   strokeWidth={2}
// // //                   d="M6 18L18 6M6 6l12 12"
// // //                 />
// // //               ) : (
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   strokeWidth={2}
// // //                   d="M4 6h16M4 12h16M4 18h16"
// // //                 />
// // //               )}
// // //             </svg>
// // //           </button>

// // //           {/* Mobile Nav */}
// // //           {menuOpen && (
// // //             <nav className="absolute top-full left-0 w-full bg-green-900 flex flex-col items-center space-y-4 py-4 md:hidden z-50">
// // //               <a href="#" className="text-white text-lg" onClick={() => setMenuOpen(false)}>Home</a>
// // //               <a href="#" className="text-white text-lg" onClick={() => setMenuOpen(false)}>Services</a>
// // //               <a href="#" className="text-white text-lg" onClick={() => setMenuOpen(false)}>About</a>
// // //               <a href="#" className="text-white text-lg" onClick={() => setMenuOpen(false)}>Projects</a>
// // //               <a href="#" className="text-white text-lg" onClick={() => setMenuOpen(false)}>Blogs</a>
// // //               <a href="#" className="text-white text-lg" onClick={() => setMenuOpen(false)}>Testimonials</a>
// // //             </nav>
// // //           )}

// // //           <button className="bg-white text-green-900 px-4 py-2 rounded-full hover:bg-green-950 hover:text-white cursor-pointer">
// // //             Contact Me
// // //           </button>

// // //           {/* Theme Toggle Button */}
// // //           <button
// // //             onClick={toggleTheme}
// // //             aria-label="Toggle theme"
// // //             className="ml-4 bg-white text-green-900 px-4 py-2 rounded-full hover:bg-green-950 hover:text-white cursor-pointer"
// // //           >
// // //             {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
// // //           </button>
// // //         </header>
// // //       </div>
// // //   )
// // // }

// // // export default Header

"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = [
    "Home",
    "Services",
    "About",
    "Projects",
    "Blogs",
    "Testimonials",
  ];

  return (
    <div className="w-full px-2 sm:px-4 md:px-6 lg:px-12">
      <header className="flex justify-between items-center py-3 sm:py-4 px-3 sm:px-6 md:px-8 lg:px-20 bg-green-900  rounded-2xl sm:rounded-3xl shadow-lg">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-yellow-500 flex-shrink-0">
          Olivia
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-4 xl:space-x-6 text-white dark:text-gray-100 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-yellow-300 px-2 py-1 rounded text-sm xl:text-base"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
          <button className="bg-white dark:bg-green-700 text-green-900 dark:text-white px-3 lg:px-4 py-2 rounded-full hover:bg-green-950 hover:text-white text-sm lg:text-base">
            Contact Me
          </button>
          <button
            onClick={toggleTheme}
            className="bg-white dark:bg-green-700 text-green-900 dark:text-white p-2 rounded-full hover:bg-green-950 hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white dark:text-gray-100 p-2 rounded-full hover:bg-green-800 dark:hover:bg-gray-800"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-64 sm:w-80 bg-green-900 dark:bg-gray-900 text-white dark:text-gray-100 z-50 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-green-800 dark:border-gray-700">
            <div className="text-xl font-bold text-yellow-500">Olivia</div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white dark:text-gray-100 p-2 rounded-full hover:bg-green-800 dark:hover:bg-gray-800"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-lg hover:text-yellow-300 py-2 px-3 rounded hover:bg-green-800 dark:hover:bg-gray-800"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-green-800 dark:border-gray-700 space-y-3">
            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="w-full bg-white dark:bg-green-700 text-green-900 dark:text-white px-4 py-3 rounded-full hover:bg-green-950 hover:text-white flex items-center justify-center space-x-2"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full bg-white dark:bg-green-700 text-green-900 dark:text-white px-4 py-3 rounded-full hover:bg-green-950 hover:text-white"
            >
              Contact Me
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
