"use client";
import m from "../../assets/img/home/m.png";
import c from "../../assets/img/home/c.png";
import cc from "../../assets/img/home/cc.png";
import t from "../../assets/img/home/t.png";
import d from "../../assets/img/home/d.png";
import s from "../../assets/img/home/s.png";
import g from "../../assets/img/home/g.png";
import e from "../../assets/img/home/e.png";
import { motion } from "framer-motion";
import TarjetaServicios from "../Home/tarjetaServicios";

const services = [
  {
    id: 1,
    titulo: "Estrategia de marketing",
    desarrollo: "Creamos la estrategia perfecta para que tu negocio brille y resalte.",
    ico: m,
  },
  {
    id: 2,
    titulo: "Desarrollo web",
    desarrollo: "Creamos sitios web adaptados a tus necesidades, desde landing pages hasta plataformas completas, con diseño responsivo y optimización SEO.",
    ico: c,
  },
  {
    id: 3,
    titulo: "Consultoría tecnológica",
    desarrollo: "Ofrecemos asesoría experta para que puedas tomar decisiones informadas y mejorar la infraestructura tecnológica de tu empresa.",
    ico: cc,
  },
  {
    id: 4,
    titulo: "Transformación digital",
    desarrollo: "Te ayudamos a digitalizar tus procesos de negocio, optimizando la eficiencia y mejorando la experiencia de tus clientes.",
    ico: t,
  },
  {
    id: 5,
    titulo: "Diseño UX/UI",
    desarrollo: "Diseñamos experiencias de usuario intuitivas y visualmente atractivas para tus aplicaciones web y móviles.",
    ico: d,
  },
  {
    id: 6,
    titulo: "Soporte técnico",
    desarrollo: "Brindamos soporte técnico integral para garantizar el correcto funcionamiento de tus sistemas y plataformas.",
    ico: s,
  },
  {
    id: 7,
    titulo: "Gestión de redes sociales",
    desarrollo: "Gestionamos tus redes sociales con contenido de calidad para aumentar tu alcance y fidelizar a tus clientes.",
    ico: g,
  },
  {
    id: 8,
    titulo: "E-commerce",
    desarrollo: "Creamos y optimizamos tiendas online para maximizar tus ventas y mejorar la experiencia de compra de tus clientes.",
    ico: e,
  },
];

export default function ServiciosAnimados() {
  // Agrupar los servicios en bloques de tres
  const groupedServices = [];
  for (let i = 0; i < services.length; i += 3) {
    groupedServices.push(services.slice(i, i + 3));
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center ">
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-400 mb-12"
      >
        Nuestros Servicios
      </motion.h1>
      <p className="w-3/4 text-gray-300  text-3xl mb-10">Ofrecemos soluciones tecnológicas personalizadas diseñadas para impulsar tu negocio al siguiente nivel. Nos especializamos en una amplia gama de servicios que se adaptan a las necesidades de cada cliente:</p>
      <div className="w-full max-w-6xl space-y-16 p-8">
        {groupedServices.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {group.map((service) => (
              <TarjetaServicios
                key={service.id}
                ico={service.ico}
                title={service.titulo}
                descript={service.desarrollo}
              ></TarjetaServicios>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
