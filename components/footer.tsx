import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-light-200 dark:bg-dark-800 text-dark-900 dark:text-light-100 border-t border-light-300 dark:border-dark-700">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechInsight</h3>
            <p className="mb-4 text-dark-700 dark:text-light-300">Tu fuente de información tecnológica</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-dark-700 dark:text-light-300 hover:text-gray-900 dark:hover:text-primary-light transition-colors dark:hover:text-gray-50"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="#"
                className="text-dark-700 dark:text-light-300 hover:text-gray-900 dark:hover:text-primary-light transition-colors dark:hover:text-gray-50"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="#"
                className="text-dark-700 dark:text-light-300 hover:text-gray-900 dark:hover:text-primary-light transition-colors dark:hover:text-gray-50"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#"
                className="text-dark-700 dark:text-light-300 hover:text-gray-900 dark:hover:text-primary-light transition-colors dark:hover:text-gray-50"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-dark-700 dark:text-light-300 hover:text-gray-900 dark:hover:text-primary-light transition-colors dark:hover:text-gray-50"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="text-dark-700 dark:text-light-300 hover:text-gray-900 dark:hover:text-primary-light transition-colors dark:hover:text-gray-50"
                >
                  Noticias
                </Link>
              </li>
              <li>
                <Link
                  href="/boletines"
                  className="text-dark-700 dark:text-light-300 hover:text-gray-900 dark:hover:text-primary-light transition-colors dark:hover:text-gray-50"
                >
                  Boletines
                </Link>
              </li>
              <li>
                <Link
                  href="/foro"
                  className="text-dark-700 dark:text-light-300 hover:text-gray-900 dark:hover:text-primary-light transition-colors dark:hover:text-gray-50"
                >
                  Foro
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-dark-700 dark:text-light-300" />
                <a
                  href="mailto:info@techinsight.com"
                  className="text-dark-700 dark:text-light-300 hover:text-gray-900 dark:hover:text-primary-light transition-colors dark:hover:text-gray-50"
                >
                  info@techinsight.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-dark-700 dark:text-light-300" />
                <a
                  href="tel:+1234567890"
                  className="text-dark-700 dark:text-light-300 hover:text-gray-900 dark:hover:text-primary-light transition-colors dark:hover:text-gray-50"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-dark-700 dark:text-light-300" />
                <span className="text-dark-700 dark:text-light-300">123 Tech Street, Digital City, 12345</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-light-300 dark:border-dark-700 text-center">
          <p className="text-dark-700 dark:text-light-300">&copy; 2023 TechInsight. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

