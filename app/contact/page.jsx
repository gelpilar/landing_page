import FormularioContacto from '@/components/Contact/FormularioContacto'
import React from 'react'
import f from "@/assets/img/contact/f.png"
import i from "@/assets/img/contact/i.png"
import t from "@/assets/img/contact/t.png"
/**
 * navbar
 * footer
 */
const page = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-transparent m-4 md:m-10">

  <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6">
    <FormularioContacto />
  </div>

  
  <div className="w-full max-w-sm md:w-1/4 p-4 bg-transparent rounded-lg flex flex-col items-center space-y-4 shadow-lg">
    <h2 className="text-xl md:text-2xl text-white font-semibold mb-4">Síguenos</h2>

    <div className="flex flex-row md:flex-col items-center justify-center space-x-4 md:space-x-0 md:space-y-4">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img
          src={f.src}
          alt="Facebook"
          className="w-10 h-10 md:w-12 md:h-12 hover:opacity-75 transition-all duration-300"
        />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img
          src={t.src}
          alt="Twitter"
          className="w-10 h-10 md:w-12 md:h-12 hover:opacity-75 transition-all duration-300"
        />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img
          src={i.src}
          alt="Instagram"
          className="w-10 h-10 md:w-12 md:h-12 hover:opacity-75 transition-all duration-300"
        />
      </a>
    </div>

    <div className="text-white text-center text-sm">
      <p>
        Conéctate con nosotros en nuestras redes sociales y mantente al día con nuestras novedades.
      </p>
    </div>
  </div>
</div>

  )
  
}

export default page
