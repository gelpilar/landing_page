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
    <>
      <div className="flex items-center justify-center min-h-screen bg-transparent m-10">
        
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
          <FormularioContacto />
        </div>
  
        
        <div className="w-1/4 h-4/5 bg-transparent rounded-lg p-6 flex flex-col items-center space-y-6 shadow-lg">
          <h2 className="text-2xl text-white font-semibold mb-4">Síguenos</h2>
  
          
          <div className="flex flex-col items-center space-y-6">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={f.src}
                alt="Facebook"
                className="w-12 h-12 hover:opacity-75 transition-all duration-300"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={t.src}
                alt="Twitter"
                className="w-12 h-12 hover:opacity-75 transition-all duration-300"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={i.src}
                alt="Instagram"
                className="w-12 h-12 hover:opacity-75 transition-all duration-300"
              />
            </a>
          </div>
  
          <div className="text-white text-sm text-center">
            <p>Conéctate con nosotros en nuestras redes sociales y mantente al día con nuestras novedades.</p>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default page
