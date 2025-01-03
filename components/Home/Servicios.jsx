import React from 'react'
import TarjetaServicios from './tarjetaServicios';
import logo from "@/assets/img/logo.png";
import m from "../../assets/img/home/m.png"
import c from "../../assets/img/home/c.png"
import cc from "../../assets/img/home/cc.png"
import t from "../../assets/img/home/t.png"
import { Link } from 'lucide-react';

const servicios = [
    {
      id: 1,
      titulo: "Estrategia de marketing",
      desarrollo: "Creamos la estrategia perfecta para que tu negocio brille y resalte.",
      ico:m
    },
    {
      id: 2,
      titulo: "Desarrollo web",
      desarrollo: "Creamos sitios web adaptados a tus necesidades, desde landing pages hasta plataformas completas, con diseño responsivo y optimización SEO.",
      ico:c
    },
    {
      id: 3,
      titulo: "Consultoría tecnológica",
      desarrollo: "Ofrecemos asesoría experta para que puedas tomar decisiones informadas y mejorar la infraestructura tecnológica de tu empresa.",
      ico:cc
    },
    {
      id: 4,
      titulo: "Transformación digital",
      desarrollo: "Te ayudamos a digitalizar tus procesos de negocio, optimizando la eficiencia y mejorando la experiencia de tus clientes.",
      ico:t
    },
    
      
  ];
  


  const Servicios = () => {
    return (
   

        <div className="bg-gradient-to-b from-transparent  via-indigo-700  " >
        <h1 className='text-4xl font-extrabold -to-r text-white   text-center drop-shadow-md'>Soluciones Inteligentes para Empresas Exitosas</h1>

        <div className="flex justify-center items-center w-screen h-auto p-8 ">
            
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-8xl place-items-center">
      {servicios.map((servicio) => (
        <TarjetaServicios
          key={servicio.id} // Siempre incluye un `key` único al mapear listas
          title={servicio.titulo}
          descript={servicio.desarrollo}
          ico={servicio.ico}
        />
      ))}
    </div>
    <Link href={`services`}><button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-800 text-white font-bold text-lg rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-110">
      Ver mas
    </button></Link>
    </div>
    </div>
    )
  }
  

export default Servicios
