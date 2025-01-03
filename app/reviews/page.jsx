import Opiniones from '@/components/Home/Opiniones'
import Cta from '@/components/shared/Cta'
import React from 'react'

/**
 * navbar
 * 
 * footer
 */
const page = () => {
  return (
    <>
    
      <Opiniones></Opiniones>
    
      <div className="flex flex-col lg:flex-row items-center justify-center w-screen mt-10 lg:mt-20 h-auto text-center">

    <div className="bg-indigo-100 p-8 h-auto lg:h-80 lg:w-2/4 w-full lg:rounded-l-lg">
      <h1 className="text-indigo-950 text-2xl lg:text-3xl font-bold mb-6">Testimonios</h1>
      <p className="text-indigo-950 text-lg lg:text-xl">
        Las opiniones de nuestros clientes siempre nos sorprenden y nos motivan a seguir creciendo. Cada comentario refleja el impacto positivo que nuestras soluciones tienen en sus negocios, y nos impulsa a seguir innovando para brindarles el mejor servicio. ¡Estamos orgullosos de ser parte del éxito de nuestros clientes!
      </p>
    </div>

 
    <div className="bg-transparent h-auto lg:h-80 lg:w-2/4 w-full border-8 border-white">
      <iframe
        src="https://www.youtube.com/embed/19g66ezsKAg"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  </div>
      <Cta img={""} men={"Contactanos"} tit={"¿Tenes un problema? Le encontramos solucion"} url={`contact`} o={0.5}></Cta>


    </>
  )
}

export default page
