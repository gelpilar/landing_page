"use client"
import Cta from '@/components/shared/Cta'
import React from 'react'
import call from "../../assets/img/servicios/call.jpg" 
import ServiciosAnimados from '@/components/Services/ani'
import  "@/components/shared/navbar.css"


/**
 * navbar x
 * Titulo 
 * introduccion
 * Listado de servicios
 * CTA contacto x
 * footer x
 */

const page = () => {
  return (
    <div >
<ServiciosAnimados />
      
      <Cta img={call} men={"Descubre Nuestros Servicios a Tu Alcance"} tit={"Soluciones diseñadas para impulsar tus proyectos y transformar tus ideas en realidad. Conoce más y encuentra el servicio que mejor se adapta a tus necesidades."} url={`contact`} o={0.2}></Cta>

    </div>
  )
}

export default page
