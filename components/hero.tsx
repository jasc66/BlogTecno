interface HeroProps {
  title: string
  description: string
  badge?: string
}

export function Hero({ title, description, badge }: HeroProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-white/80">{badge}</span>
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  )
}
