import Image from "next/image"

export default function Catalogue() {
  const frameStyles = [
    { id: 1, name: "Classic Wood", image: "/placeholder.svg?height=300&width=300", price: "₹1,200" },
    { id: 2, name: "Modern Minimalist", image: "/placeholder.svg?height=300&width=300", price: "₹1,500" },
    { id: 3, name: "Ornate Gold", image: "/placeholder.svg?height=300&width=300", price: "₹1,800" },
    { id: 4, name: "Rustic Farmhouse", image: "/placeholder.svg?height=300&width=300", price: "₹1,350" },
    { id: 5, name: "Sleek Metal", image: "/placeholder.svg?height=300&width=300", price: "₹1,650" },
    { id: 6, name: "Vintage Distressed", image: "/placeholder.svg?height=300&width=300", price: "₹1,450" },
  ]

  return (
    <section id="catalogue" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Frame Collection</h2>
          <div className="w-24 h-1 bg-[#4c0519] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our selection of premium frame styles to find the perfect match for your photos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameStyles.map((frame) => (
            <div
              key={frame.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image src={frame.image || "/placeholder.svg"} alt={frame.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{frame.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#4c0519] font-medium">{frame.price}</span>
                  <button className="bg-[#4c0519] text-white px-4 py-2 rounded hover:bg-[#3a0413] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#4c0519] text-white hover:bg-[#3a0413] font-medium px-6 py-3 rounded-md transition-colors shadow-lg">
            Upload Your Photo
          </button>
          <p className="mt-4 text-gray-600">
            Want a custom frame for your own photo? Upload it now and we'll help you choose the perfect frame!
          </p>
        </div>
      </div>
    </section>
  )
}
