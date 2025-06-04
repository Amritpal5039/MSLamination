"use client"

import Image from "next/image"
import { useState } from "react"

export default function Catalogue() {
  const [showForm, setShowForm] = useState(false)
  const [selectedFrame, setSelectedFrame] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    photoSize: "",
    message: "",
  })

  const googleSheetURL =
    "https://script.google.com/macros/s/AKfycbwEzW_9iYpZtKDAnfMUwa5VwQkD7Bc7kHFuplTtr6YjrFuB0I-p6G7i0VXlsmlrmzanNw/exec" // replace with your latest deployed URL


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch(googleSheetURL, {
        method: "POST",
        mode: "no-cors", // required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          frameStyle: selectedFrame,
        }),
      })

      alert("Order submitted successfully!")
      setShowForm(false)
      setFormData({
        name: "",
        phone: "",
        location: "",
        photoSize: "",
        message: "",
      })
    } catch (error) {
      console.error("Submission failed:", error)
      alert("Submission failed. Please try again.")
    }
  }

  const frameStyles = [
    { id: 1, name: "Classic", image: "/Untitled-2.gif" },
    { id: 2, name: "Ornate Gold", image: "/Untitled-1.gif" },
    { id: 3, name: "Modern Minimalist", image: "/Untitled-3.gif" },
    { id: 4, name: "Royal Heritage", image: "/Untitled-4.gif" },
    { id: 5, name: "Celestial Gold", image: "/Untitled-5.gif" },
    { id: 6, name: "Classic Goldleaf", image: "/Untitled-6.gif" },
    { id: 7, name: "Wood", image: "/Untitled-7.gif" },
    { id: 8, name: "Black & Gold", image: "/Untitled-8.gif" },
  ]

  return (
    <section id="catalogue" className="py-16 bg-gray-50 relative">
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
            <div key={frame.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src={frame.image} alt={frame.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{frame.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <button
                    onClick={() => {
                      setSelectedFrame(frame.name)
                      setShowForm(true)
                    }}
                    className="bg-[#4c0519] text-white px-4 py-2 rounded hover:bg-[#3a0413] transition-colors"
                  >
                    Let’s Talk Price!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4 relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              type="button"
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
              aria-label="Close"
            >
              ✖
            </button>

            <h2 className="text-xl font-bold text-[#4c0519] pr-6">Tell Us About Your Needs</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />

            <input
              type="text"
              name="photoSize"
              placeholder="Photo Size (e.g., 12x18 inches)"
              value={formData.photoSize}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message / Requirements"
              value={formData.message}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />

            <button
              type="submit"
              className="w-full py-2 bg-[#4c0519] text-white rounded hover:bg-[#3a0413]"
            >
              Place Order
            </button>
          </form>
        </div>
      )}
    </section>
  )
}
