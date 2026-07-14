import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-8 px-4 bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechInsight</h3>
            <p className="mb-4 text-muted-foreground">
              Tu fuente de información tecnológica
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {['/', '/noticias', '/boletines', '/foro', '/investigaciones'].map(href => (
                <li key={href}>
                  <Link href={href} className="text-muted-foreground hover:text-primary transition-colors">
                    {href === '/' ? 'Inicio' : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-muted-foreground" />
                <a href="mailto:info@techinsight.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@techinsight.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-muted-foreground" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">
                  123 Tech Street, Digital City, 12345
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            &copy; {currentYear} TechInsight. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
