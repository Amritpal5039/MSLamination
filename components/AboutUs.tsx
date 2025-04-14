export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">About Us</h2>
          <div className="w-24 h-1 bg-[#4c0519] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Established in 1996, M/S. Delhi Lamination has been preserving memories for over 25 years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif font-bold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              For over two decades, we've been helping customers transform their precious moments into beautifully
              framed memories. What started as a small family business has grown into a trusted name in photo framing
              across Amritsar.
            </p>
            <p className="text-gray-600">
              Our commitment to quality craftsmanship and customer satisfaction has remained unchanged since our
              founding. We take pride in every frame we create, ensuring each one meets our high standards of
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#4c0519] text-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">25+</h4>
              <p>Years of Experience</p>
            </div>
            <div className="bg-[#4c0519] text-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">1,000+</h4>
              <p>Happy Customers</p>
            </div>
            <div className="bg-[#4c0519] text-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">50+</h4>
              <p>Frame Styles</p>
            </div>
            <div className="bg-[#4c0519] text-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">100%</h4>
              <p>Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
