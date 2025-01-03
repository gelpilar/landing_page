import Cta from '@/components/shared/Cta'
import React from 'react'
import logo from "@/assets/img/logo.png"
import { Lumiflex } from "uvcanvas"
import Servicios from '@/components/Home/Servicios'
import Opiniones from '@/components/Home/Opiniones'

/**
 * navbar x
 * cta principal con eslogan x
 * servicios destacados x 
 * breves testimonios x 
 * footer
 */
const page = () => {
  return (
<>
      <div className="flex flex-col w-full items-center ">
        <Cta  men={"Innovación que transforma tu futuro"} img={""} url={`contact`} tit={"Impulsa tu negocio con soluciones tecnológicas avanzadas. ¡Transforma tu futuro hoy!"} o={0.1} />
        <Servicios></Servicios>
        <Opiniones></Opiniones>

      </div>
    </>
  )
}

export default page
