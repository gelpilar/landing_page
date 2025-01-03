import React from 'react'
import Persona from './Persona'
import m1 from "@/assets/img/about/m1.jpg"
import m2 from "@/assets/img/about/m2.jpg"
import h1 from "@/assets/img/about/h1.jpg"
import h2 from "@/assets/img/about/h2.jpg"
import { motion } from "framer-motion";


export default function Team() {
    const equipo = [
        {
            "id": 1,
            "name": "Pilar Scollo",
            "role": "CEO & Fundadora",
            "description": "Apasionada por la tecnología y la innovación, Pilar lidera el equipo con visión y dedicación para transformar ideas en realidades impactantes.",
            "photo": m1
        },
        {
            "id": 2,
            "name": "Juan Pérez",
            "role": "CTO",
            "description": "Con años de experiencia en desarrollo de software, Juan garantiza que nuestros proyectos sean técnicamente impecables y escalables.",
            "photo": h1
        },
        {
            "id": 3,
            "name": "Laura Gómez",
            "role": "Directora de Marketing",
            "description": "Laura lidera las estrategias de comunicación y marketing, asegurando que nuestros servicios lleguen a la audiencia correcta.",
            "photo": m2
        },
        {
            "id": 4,
            "name": "Carlos Martínez",
            "role": "Jefe de Diseño",
            "description": "Carlos aporta creatividad y precisión a cada diseño, asegurando que nuestros productos sean atractivos y funcionales.",
            "photo": h2
        }
    ]
    return (
        <div className='flex'>
            <div className=' flex flex-col w-3/5 m-10'>
                <h1

                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-400 ml-19 m-10"
                >
                    Nuestro equipo
                </h1>
                <p className='text-white'>
                Nuestro equipo no solo destaca por su pasión y disciplina, sino que también se caracteriza por su profundo profesionalismo y experiencia en sus respectivas áreas. Cada uno de nuestros miembros cuenta con un alto nivel de conocimiento y habilidades técnicas, adquiridas a través de años de formación y práctica constante. Nos comprometemos a ofrecer soluciones de calidad, abordando cada desafío con la mejor estrategia y enfoque. Además, trabajamos en un ambiente de colaboración y respeto mutuo, donde cada opinión es valorada y cada tarea se ejecuta con precisión y dedicación. La combinación de nuestra pasión por lo que hacemos y la excelencia profesional nos permite alcanzar resultados sobresalientes, siempre con el objetivo de superar las expectativas de nuestros clientes.
                </p>
            </div>

            <div className='w-screen flex flex-wrap justify-center items-center gap-1'>

                {equipo.map(perso => (
                    <div key={perso.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-5/6 max-w-sm p-2'>
                        <Persona
                            nombre={perso.name}
                            role={perso.role}
                            description={perso.description}
                            photo={perso.photo}
                        />
                    </div>
                ))}
            </div></div>


    )
}


