import Image from "next/image"

export interface HeroProps {
  title: string
  description: string
  backgroundImage: {
    light: string
    dark: string
  }
}

export function Hero({ title, description, backgroundImage }: HeroProps) {
  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      <Image
        src={backgroundImage.light || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover dark:hidden"
        priority
      />
      <Image
        src={backgroundImage.dark || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover hidden dark:block"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-light-200/80 to-light-100/90 dark:from-dark-800/80 dark:to-dark-900/90 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-light-100 mb-4">{title}</h1>
        <p className="text-xl text-dark-700 dark:text-light-300 max-w-2xl px-4">{description}</p>
      </div>
    </div>
  )
}

