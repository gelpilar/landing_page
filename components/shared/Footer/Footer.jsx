import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul>
              <li><a href="/" className="hover:text-yellow-500">Inicio</a></li>
              <li><a href="/about" className="hover:text-yellow-500">Sobre nosotros</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Contacto</a></li>
              <li><a href="/blog" className="hover:text-yellow-500">Blog</a></li>
            </ul>
          </div>
          
          {/* Información legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Información legal</h3>
            <ul>
              <li><a href="/terms" className="hover:text-yellow-500">Términos y condiciones</a></li>
              <li><a href="/privacy" className="hover:text-yellow-500">Política de privacidad</a></li>
              <li><a href="/cookies" className="hover:text-yellow-500">Política de cookies</a></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <ul className="flex space-x-4">
              <li><a href="https://www.facebook.com" target="_blank" className="hover:text-yellow-500">Facebook</a></li>
              <li><a href="https://www.twitter.com" target="_blank" className="hover:text-yellow-500">Twitter</a></li>
              <li><a href="https://www.instagram.com" target="_blank" className="hover:text-yellow-500">Instagram</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" className="hover:text-yellow-500">LinkedIn</a></li>
            </ul>
          </div>

          {/* Información de copyright */}
          <div>
            <p className="text-center text-sm mt-8 sm:mt-0">
              &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
