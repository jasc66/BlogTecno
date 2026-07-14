import type { NewsArticle } from '@/types/news'

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Nuevo avance en computación cuántica',
    slug: 'nuevo-avance-computacion-cuantica',
    author: 'Dra. María Quantum',
    date: '2026-05-08',
    excerpt:
      'Científicos logran un hito en la estabilidad de qubits, acercándonos a supremacía cuántica.',
    content: `
      <p>Un equipo de investigadores del MIT ha logrado un avance significativo en la estabilidad de los qubits, las unidades básicas de información en la computación cuántica.</p>
      
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
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
    tags: ['Computación Cuántica', 'Tecnología', 'Investigación'],
  },
  {
    id: '2',
    title: 'Lanzamiento del satélite de comunicaciones más avanzado',
    slug: 'lanzamiento-satelite-comunicaciones-avanzado',
    author: 'Carlos Astro',
    date: '2026-05-06',
    excerpt:
      'SpaceX pone en órbita un satélite que promete revolucionar las telecomunicaciones globales.',
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
      
      <p>SpaceX planea lanzar una constelación completa de satélites GlobalLink en los próximos años, con el objetivo de proporcionar cobertura global completa para 2027. Este ambicioso proyecto podría transformar el panorama de las comunicaciones globales y acercarnos un paso más a un mundo verdaderamente conectado.</p>
    `,
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=600&fit=crop',
    tags: ['Espacio', 'Telecomunicaciones', 'SpaceX'],
  },
  {
    id: '3',
    title: 'IA multimodal: el siguiente paso en inteligencia artificial',
    slug: 'ia-multimodal-siguiente-paso',
    author: 'Dr. Alejandro Tech',
    date: '2026-05-04',
    excerpt:
      'Los nuevos modelos de IA pueden procesar texto, imágenes y audio simultáneamente.',
    content: `
      <p>Las principales empresas de tecnología han presentado sus nuevos modelos de inteligencia artificial multimodal, capaces de comprender y generar contenido en múltiples formatos simultáneamente.</p>
      
      <h2>¿Qué es la IA multimodal?</h2>
      
      <p>La IA multimodal representa un salto cualitativo en el campo de la inteligencia artificial. A diferencia de los modelos tradicionales que se especializan en un solo tipo de datos (texto o imágenes), los modelos multimodales pueden procesar y generar contenido en múltiples formatos al mismo tiempo.</p>
      
      <h2>Aplicaciones revolucionarias</h2>
      
      <p>Esta tecnología abre la puerta a aplicaciones que antes parecían ciencia ficción:</p>
      
      <ul>
        <li>Asistentes virtuales que pueden ver, oír y conversar naturalmente.</li>
        <li>Sistemas médicos que pueden analizar imágenes, historiales clínicos y voz del paciente.</li>
        <li>Herramientas de educación que se adaptan al estilo de aprendizaje de cada estudiante.</li>
        <li>Traducción en tiempo real que preserva el tono y las emociones del hablante.</li>
      </ul>
      
      <h2>Desafíos éticos</h2>
      
      <p>Sin embargo, esta tecnología también plantea importantes cuestiones éticas. Los expertos advierten sobre la necesidad de establecer marcos regulatorios adecuados para prevenir el uso indebido de estos sistemas, especialmente en lo referente a la generación de contenido sintético y la privacidad de los usuarios.</p>
    `,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['Inteligencia Artificial', 'Tecnología', 'Innovación'],
  },
  {
    id: '4',
    title: 'Ciberseguridad en la era de la computación cuántica',
    slug: 'ciberseguridad-era-computacion-cuantica',
    author: 'Ana Security',
    date: '2026-05-02',
    excerpt:
      'Los expertos advierten sobre la necesidad de preparar nuestra infraestructura para la era post-cuántica.',
    content: `
      <p>Con el avance de la computación cuántica, los métodos tradicionales de cifrado se enfrentan a un desafío sin precedentes. Los expertos en ciberseguridad trabajan activamente en el desarrollo de algoritmos resistentes a ataques cuánticos.</p>
      
      <h2>La amenaza cuántica</h2>
      
      <p>Las computadoras cuánticas tienen el potencial de romper los sistemas de cifrado que protegen actualmente la mayoría de las comunicaciones digitales. Algoritmos como RSA y AES, que son prácticamente inviolables con la tecnología actual, podrían ser comprometidos en cuestión de horas con una computadora cuántica suficientemente potente.</p>
      
      <h2>Soluciones post-cuánticas</h2>
      
      <p>Para abordar esta amenaza, investigadores de todo el mundo están desarrollando nuevos algoritmos criptográficos resistentes a ataques cuánticos:</p>
      
      <ul>
        <li>Criptografía basada en retículos.</li>
        <li>Códigos correctores de errores.</li>
        <li>Funciones hash resistentes a colisiones.</li>
      </ul>
      
      <h2>Preparación de infraestructura</h2>
      
      <p>Las organizaciones deben comenzar a preparar su infraestructura para la transición hacia sistemas post-cuánticos. Esto incluye la actualización de sistemas heredados, la capacitación del personal y la implementación de estrategias de seguridad por capas.</p>
    `,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop',
    tags: ['Ciberseguridad', 'Computación Cuántica', 'Seguridad'],
  },
  {
    id: '5',
    title: 'Internet de las Cosas: el futuro conectado',
    slug: 'internet-cosas-futuro-conectado',
    author: 'Roberto IoT',
    date: '2026-04-28',
    excerpt:
      'La expansión del IoT promete transformar ciudades enteras en ecosistemas inteligentes.',
    content: `
      <p>El Internet de las Cosas (IoT) continúa expandiéndose a un ritmo acelerado, con miles de millones de dispositivos conectados transformando la forma en que vivimos y trabajamos.</p>
      
      <h2>Ciudades inteligentes</h2>
      
      <p>Las ciudades de todo el mundo están implementando soluciones IoT para optimizar el tráfico, reducir el consumo energético y mejorar la calidad de vida de sus habitantes. Sensores distribuidos monitorean desde la calidad del aire hasta el nivel de llenado de los contenedores de basura.</p>
      
      <h2>Industria 4.0</h2>
      
      <p>En el sector industrial, el IoT permite la implementación de fábricas inteligentes donde las máquinas se comunican entre sí para optimizar la producción y predecir fallos antes de que ocurran.</p>
      
      <h2>Desafíos de privacidad</h2>
      
      <p>Sin embargo, esta conectividad generalizada también plantea preocupaciones sobre la privacidad y la seguridad de los datos. Las organizaciones deben implementar medidas robustas para proteger la información personal de los usuarios.</p>
    `,
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop',
    tags: ['IoT', 'Smart Cities', 'Innovación'],
  },
  {
    id: '6',
    title: 'La evolución de la computación en la nube',
    slug: 'evolucion-computacion-nube',
    author: 'Sofia Cloud',
    date: '2026-04-25',
    excerpt:
      'Los servicios en la nube continúan evolucionando con arquitecturas serverless y edge computing.',
    content: `
      <p>La computación en la nube ha evolucionado significativamente en los últimos años, con nuevas arquitecturas que prometen mayor eficiencia y menor latencia.</p>
      
      <h2>Computación sin servidor</h2>
      
      <p>Las arquitecturas serverless permiten a los desarrolladores centrarse en el código sin preocuparse por la infraestructura subyacente. Esto reduce costos y acelera el tiempo de implementación de nuevas aplicaciones.</p>
      
      <h2>Edge computing</h2>
      
      <p>El edge computing lleva el procesamiento más cerca del usuario final, reduciendo la latencia y mejorando la experiencia en aplicaciones que requieren respuesta en tiempo real.</p>
      
      <h2>Sostenibilidad</h2>
      
      <p>Los principales proveedores de nube están trabajando para hacer sus centros de datos más sostenibles, utilizando energías renovables y optimizando el consumo energético de sus servidores.</p>
    `,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    tags: ['Cloud Computing', 'Serverless', 'Tecnología'],
  },
]

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return newsArticles.map(article => article.slug)
}