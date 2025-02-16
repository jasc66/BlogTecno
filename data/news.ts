import type { NewsArticle } from "@/types/news"

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Nuevo avance en computación cuántica",
    slug: "nuevo-avance-computacion-cuantica",
    author: "Dr. Quantum",
    date: "2023-06-20",
    excerpt: "Científicos logran un hito en la estabilidad de qubits, acercándonos a supremacía cuántica.",
    content: `
      <p>Un equipo de investigadores de la Universidad de Tecnología Cuántica ha logrado un avance significativo en la estabilidad de los qubits, las unidades básicas de información en la computación cuántica.</p>
      
      <p>Este descubrimiento podría acelerar el desarrollo de computadoras cuánticas prácticas, capaces de resolver problemas complejos que están fuera del alcance de las supercomputadoras clásicas más potentes.</p>
      
      <h2>¿Qué son los qubits?</h2>
      
      <p>Los qubits son la versión cuántica de los bits clásicos. Mientras que un bit clásico puede estar en uno de dos estados (0 o 1), un qubit puede existir en una superposición de ambos estados simultáneamente. Esta propiedad permite a las computadoras cuánticas realizar ciertos cálculos de manera mucho más eficiente que las computadoras clásicas.</p>
      
      <h2>El desafío de la estabilidad</h2>
      
      <p>Uno de los mayores obstáculos en el desarrollo de computadoras cuánticas ha sido mantener los qubits en un estado coherente durante el tiempo suficiente para realizar cálculos útiles. Los qubits son extremadamente sensibles a las perturbaciones del entorno, lo que puede causar errores en los cálculos.</p>
      
      <h2>El avance</h2>
      
      <p>El equipo de investigación ha desarrollado un nuevo método para proteger los qubits de las interferencias externas, aumentando su tiempo de coherencia en un factor de 10. Esto significa que los qubits pueden mantener su estado cuántico durante más tiempo, permitiendo cálculos más complejos y precisos.</p>
      
      <p>Este avance acerca a la comunidad científica a la tan esperada "supremacía cuántica", el punto en el que una computadora cuántica puede realizar cálculos que están fuera del alcance de cualquier computadora clásica.</p>
      
      <h2>Implicaciones futuras</h2>
      
      <p>Las aplicaciones potenciales de las computadoras cuánticas son vastas, desde la simulación de sistemas moleculares complejos para el descubrimiento de nuevos medicamentos, hasta la optimización de redes logísticas y la mejora de los algoritmos de aprendizaje automático.</p>
      
      <p>Aunque todavía queda mucho trabajo por hacer antes de que las computadoras cuánticas sean una realidad práctica, este avance representa un paso significativo en esa dirección.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Computación Cuántica", "Tecnología", "Investigación"],
  },
  {
    id: "2",
    title: "Lanzamiento del satélite de comunicaciones más avanzado",
    slug: "lanzamiento-satelite-comunicaciones-avanzado",
    author: "Astro News",
    date: "2023-06-18",
    excerpt: "SpaceX pone en órbita un satélite que promete revolucionar las telecomunicaciones globales.",
    content: `
      <p>SpaceX, la compañía aeroespacial fundada por Elon Musk, ha lanzado con éxito el satélite de comunicaciones más avanzado hasta la fecha. El satélite, denominado GlobalLink-1, promete revolucionar las telecomunicaciones globales con su tecnología de vanguardia.</p>
      
      <h2>Características del GlobalLink-1</h2>
      
      <p>El GlobalLink-1 incorpora varias innovaciones tecnológicas:</p>
      
      <ul>
        <li>Antenas de formación de haces que permiten una cobertura más precisa y eficiente.</li>
        <li>Propulsión eléctrica para ajustes orbitales más eficientes.</li>
        <li>Procesamiento a bordo avanzado que permite la reconfiguración en órbita.</li>
        <li>Capacidad de transmisión de datos de hasta 1 terabit por segundo.</li>
      </ul>
      
      <h2>Impacto en las comunicaciones globales</h2>
      
      <p>Se espera que el GlobalLink-1 mejore significativamente la conectividad global, especialmente en áreas remotas y subatendidas. Esto podría tener un impacto transformador en campos como la telemedicina, la educación a distancia y el comercio electrónico en regiones que actualmente carecen de acceso confiable a Internet de alta velocidad.</p>
      
      <h2>Sostenibilidad espacial</h2>
      
      <p>Además de sus capacidades avanzadas, el GlobalLink-1 también incorpora características diseñadas para abordar la creciente preocupación por los desechos espaciales. El satélite está equipado con un sistema de propulsión que le permitirá desorbitar de manera controlada al final de su vida útil, reduciendo el riesgo de colisiones en órbita.</p>
      
      <h2>Próximos pasos</h2>
      
      <p>SpaceX planea lanzar una constelación completa de satélites GlobalLink en los próximos años, con el objetivo de proporcionar cobertura global completa para 2025. Este ambicioso proyecto podría transformar el panorama de las comunicaciones globales y acercarnos un paso más a un mundo verdaderamente conectado.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1516849677043-ef67c9557e16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Espacio", "Telecomunicaciones", "SpaceX"],
  },
]

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return newsArticles.map((article) => article.slug)
}

