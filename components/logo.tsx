import Image from "next/image"

export function Logo() {
  return (
    <div className="relative w-16 h-16">
      <Image
        src="/logo.webp"
        alt="SDFM 2520"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}

