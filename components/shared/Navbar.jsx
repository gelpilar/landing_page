"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import "./navbar.css"
import Image from 'next/image';
import logo from '../../assets/img/logo.png';
/**
 * navbar
 *  - logo 
 *  - secciones
 *      - about us
 *      - services
 *      - contact
 *      - reviews
 *      -blog?
 *      -FAQ
 * 
 */
const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false); 
  return (
    <nav className="bg-indigo-950 text-white p-0    top-0 left-0 w-full  ">
    <div className=" max-w-7xl mx-auto flex justify-between items-center z-50 " >
    <Link href={"/"} className=" font-medium hover:text-with-800 hover:font-bold glowing-text" ><Image  src={logo} 
      alt="Prueba" 
      width={100} 
      height={100}
       />
        </Link>
        <button
          className="text-white md:hidden mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon when open
                  : "M4 6h16M4 12h16m-7 6h7" // Hamburger icon when closed
              }
            />
          </svg>
        </button>

       
        <ul className={`flex flex-col md:flex-row md:space-x-6 list-none items-center md:static absolute left-0 right-0 mt-5 bg-indigo-950 transition-all duration-300  ${
  isOpen ? "top-20 " : "top-[-500px]"} z-50`}>
      <li><Link href={"/services"} className="font-medium hover:text-with-800 hover:font-bold glowing-text">Servicios</Link></li>
      <li className='z-10 '><Link href={"/about"} className=" bg-transparent font-medium  hover:text-with-800 hover:font-bold glowing-text " >Sobre nosotros</Link></li>
      <li><Link href={"/reviews"} className="font-medium hover:text-with-800 hover:font-bold glowing-text">Opiniones</Link></li>
      
      
      
      <li><Link href={"/contact"} className=" font-medium  hover:text-with-800 hover:font-bold glowing-text">Contacto</Link></li>
      <li><Link href={"/faq"} className=" font-medium  hover:text-with-800 hover:font-bold glowing-text">FAQ</Link></li>
    </ul>
  </div>
  </nav>
  )
}

export default Navbar
