import Image from 'next/image'
import Link from "next/link";
import React from 'react'
import logo from "@/assets/img/logo.png"
const Cta = ({men,tit,img,url,o}) => {
  return (
    <>
   <div
  className="h-screen flex items-center justify-center relative"
  style={{
    width: "100vw",
    height: "100vh",
    backgroundImage: `url("${img.src}")`,
    backgroundSize: "cover", 
    backgroundRepeat: "no-repeat", 
   
  }}
>

  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgb(0, 0, 0)", // Cambia el color y la opacidad según prefieras
      opacity:o,
      zIndex: 0,
    }}
  ></div>
{/*<div
    
    style={{
     

      width:"100vw",
      height:"100vh",
      backgroundImage: `url("${img.src}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.1,   
      pointerEvents: "none", 
    }}
  ></div>*/
  }


  <div className="relative text-center text-white">
    
    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
      {men}
    </h1>


    <p className="text-lg md:text-2xl mb-10 text-gray-100 drop-shadow-lg">
      {tit}
    </p>

    
    <Link href={`${url}`}><button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-800 text-white font-bold text-lg rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-110">
      Únete Ahora
    </button></Link>
  </div>
</div>
    </>
  )
}

export default Cta
