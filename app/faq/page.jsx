import React from 'react'
/**
 * navbar
 * 
 * footer
 */
const page = () => {
  return (
    <>
    <div className="bg-indigo-100 py-16 h-full">
  <div className="max-w-7xl mx-auto text-center px-6">
    <h2 className="text-3xl font-bold text-indigo-950 mb-8">Preguntas Frecuentes</h2>
    <p className="text-xl text-indigo-700 mb-12">Aquí encontrarás respuestas a las preguntas más comunes.</p>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-semibold text-indigo-950 mb-4">¿Cómo puedo contactarlos?</h3>
        <p className="text-indigo-700">
          Puedes contactarnos a través de nuestro formulario de contacto en la página o enviándonos un correo electrónico a <strong>contacto@ejemplo.com</strong>.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-semibold text-indigo-950 mb-4">¿Cuáles son los tiempos de entrega?</h3>
        <p className="text-indigo-700">
          Los tiempos de entrega varían según el tipo de servicio solicitado. Por lo general, el tiempo de entrega es de 5 a 7 días hábiles.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-semibold text-indigo-950 mb-4">¿Ofrecen soporte post-venta?</h3>
        <p className="text-indigo-700">
          Sí, ofrecemos soporte post-venta durante 30 días después de la compra. Si tienes alguna pregunta o inconveniente, no dudes en contactarnos.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-semibold text-indigo-950 mb-4">¿Puedo cambiar mi pedido?</h3>
        <p className="text-indigo-700">
          Si deseas realizar cambios en tu pedido, por favor contáctanos dentro de las primeras 24 horas después de realizarlo para gestionar el cambio.
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default page
