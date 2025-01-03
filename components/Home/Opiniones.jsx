import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '../ui/card';

const Opiniones = () => {
  const opiniones = [
    {
      id: 1,
      nombre: "Maria Luisa",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbH2zOvazbncDU0mun3eJA9MaVIFuHCnK-Q&s",
      comentario: "¡Excelente servicio! Mi negocio ha crecido mucho gracias a la estrategia de marketing que implementaron.",
      calificacion: 5,
    },
    {
      id: 2,
      nombre: "María García",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLlJNr-wuPcB61hOK6G_2IXOZkyBVIr0JjHg&s",
      comentario: "El desarrollo de la web fue espectacular. Me encanta cómo se ve y la optimización SEO hizo que aumentara el tráfico.",
      calificacion: 4,
    },
    {
      id: 3,
      nombre: "Carlos López",
      foto: "https://www.hofmann.es/content/blog/uploads/2015/07/7.jpg?w=900",
      comentario: "La consultoría tecnológica fue muy útil. Pudimos hacer ajustes clave en nuestra infraestructura.",
      calificacion: 5,
    },
    {
      id: 4,
      nombre: "Ana Ruiz",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDT0-s4JJ40pC0xsp5M17f-46NrQv_9roaY16AipOKNhcT_BF-dBIJTwvzePBFfjASKuU&usqp=CAU",
      comentario: "Gracias a la transformación digital, nuestra empresa ahora tiene un proceso mucho más ágil y eficiente.",
      calificacion: 4,
    },
    {
      id: 5,
      nombre: "Pedro Sánchez",
      foto: "https://www.dzoom.org.es/wp-content/uploads/2016/12/tipos-de-plano-cabecera-ok.jpg",
      comentario: "Muy satisfecho con la automatización de procesos. Ahorro de tiempo y recursos, ¡una gran inversión!",
      calificacion: 5,
    },
  ];

  return (
    <div>
        <h1 className='text-4xl font-extrabold -to-r text-white  m-4 p-4 text-center drop-shadow-md'>Opiniones de nuestros usuarios</h1>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-screen max-w-6xl mx-auto"
    >
      <CarouselContent className="m-10">
        {opiniones.map((opinion) => (
          <CarouselItem key={opinion.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="w-72">
                <CardContent className="flex flex-col items-center justify-center p-6">
          
                  <img  src={opinion.foto} 
  alt={opinion.nombre} 
  className="w-16 h-16 rounded-full object-cover mb-4" />
                 
                  <h3 className="text-xl font-semibold mb-2">{opinion.nombre}</h3>
             
                  <p className="text-center mb-2">{opinion.comentario}</p>
              
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className={`text-xl ${index < opinion.calificacion ? 'text-yellow-500' : 'text-gray-400'}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel></div>
  );
};

export default Opiniones;
