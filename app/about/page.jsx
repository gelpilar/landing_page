import Cta from '@/components/shared/Cta'
import React from 'react'
import call from "@/assets/img/about/call.jpg"
import Team from '@/components/About/Team'
/**
 * navbar
 * titulo con imagen y descripcion x 
 * foto de cada uno del equipo  x
 * Valores
 * mision y vision
 * footer
 */
const page = () => {
  return (
    <div className='w-full h-auto'>
      <Cta img={call} men={"Conoce Nuestra Historia y Valores"}
        tit={
          "Somos más que una empresa, somos un equipo apasionado por crear soluciones innovadoras. Desde nuestros inicios, hemos trabajado para ayudar a personas y negocios a alcanzar su máximo potencial a través de la tecnología. Nuestra misión es transformar desafíos en oportunidades y construir un futuro mejor juntos."
        } url={`contact`} o={0.5}></Cta>

      <Team>
      </Team>
      <div className='flex flex-column items-center w-screen mt-20 h-screen text-center 	'>
         <div className='bg-transparent h-3/4 border-4'>
          <h1 className='text-white pl-20 pr-20 pt-20 text-3xl '>Valor</h1>
          <p className='text-white pl-20 pr-20 text-2xl'>Creemos en la integración de la creatividad, la pasión y la dedicación en cada proyecto que emprendemos. Nuestro valor radica en la capacidad de transformar las ideas en soluciones reales y efectivas, siempre enfocándonos en la calidad, la transparencia y el compromiso con nuestros clientes. Trabajamos con integridad, buscando relaciones duraderas y basadas en la confianza, y nos adaptamos continuamente a las necesidades de cada cliente para asegurarnos de que logren sus objetivos de negocio.</p>
         </div>
         <div className='bg-indigo-100 h-3/4'>
         <h1 className='text-indigo-950 pl-20 pt-20 text-3xl'>Mision</h1>
         <p className='text-indigo-950 pl-20 pr-20 text-2xl'>Nuestra misión es proporcionar soluciones tecnológicas innovadoras y eficientes para pequeñas y medianas empresas, ayudándolas a optimizar sus procesos y a crecer en un mundo digital en constante evolución. A través de nuestro conocimiento en desarrollo de software y diseño, nos comprometemos a ofrecer productos y servicios que simplifiquen la gestión empresarial, mejoren la experiencia del usuario y brinden una ventaja competitiva sostenible.</p>
         </div>
      </div>

    </div>
  )
}

export default page
