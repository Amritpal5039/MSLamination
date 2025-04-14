import type React from "react"
import { Gift, Frame, ImageIcon } from "lucide-react"

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-[#4c0519] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a range of professional framing services to preserve your precious memories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Gift className="h-10 w-10 text-[#4c0519]" />}
            title="Gift Framing Services"
            description="Surprise your loved ones with a beautifully framed photo gift. Our gift framing service adds a personal touch to any special occasion."
          />

          <ServiceCard
            icon={<Frame className="h-10 w-10 text-[#4c0519]" />}
            title="Frame Variety"
            description="Explore our extensive range of frame styles and materials to find the perfect match for your decor. Personalize your experience with options that suit your taste."
          />

          <ServiceCard
            icon={<ImageIcon className="h-10 w-10 text-[#4c0519]" />}
            title="High-Quality Prints"
            description="We provide high-quality prints that bring your photos to life, ensuring vibrant colors and sharp details. Preserve your memories in stunning detail."
          />
        </div>

        <div className="mt-16 bg-[#4c0519] text-white rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Capture moments, frame memories in style.</h3>
          <p className="text-xl mb-6">Order your custom frame today!</p>
          <button className="bg-white text-[#4c0519] hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition-colors shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
