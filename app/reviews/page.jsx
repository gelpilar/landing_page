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
    
    <div className='flex flex-column items-center w-screen mt-20 h-screen text-center 	'>
    <div className='bg-indigo-100 h-3/4 w-2/4'>
         <h1 className='text-indigo-950 pl-20 pt-20 text-3xl'>Testimonios</h1>
         <p className='text-indigo-950 pl-20 pr-20 text-2xl'>Las opiniones de nuestros clientes siempre nos sorprenden y nos motivan a seguir creciendo. Cada comentario refleja el impacto positivo que nuestras soluciones tienen en sus negocios, y nos impulsa a seguir innovando para brindarles el mejor servicio. ¡Estamos orgullosos de ser parte del éxito de nuestros clientes!</p>
         </div>
         <div className='bg-transparent h-3/4 w-2/4 border-4'>
         <iframe src="https://www.youtube.com/embed/19g66ezsKAg" allowFullScreen className='w-full h-full' />
         </div>
         
      </div>
      <Cta img={""} men={"Contactanos"} tit={"¿Tenes un problema? Le encontramos solucion"} url={`contact`} o={0.5}></Cta>


    </>
  )
}

export default page
