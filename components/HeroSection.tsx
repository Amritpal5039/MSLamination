import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[90vh] md:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Image11.jpeg"
          alt="Framed memories"
          fill
          className="object-cover filter blur-sm brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
            We Frame Memories Delivered to You
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto [text-shadow:1px_1px_2px_rgba(0,0,0,0.5)]">
            At M/S Delhi Lamination, we specialize in transforming your cherished photos into beautifully framed
            memories. Choose from a variety of frame styles to perfectly complement your images.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-[#4c0519] hover:bg-[#3a0413] text-white font-medium px-6 py-3 rounded-md transition-colors shadow-lg"
            >
              Explore Frames
            </Link>
            <Link
              href="#contact"
              className="bg-white hover:bg-gray-100 text-[#4c0519] font-medium px-6 py-3 rounded-md transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
