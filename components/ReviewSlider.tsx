"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function ReviewSlider() {
  const reviews = [
    {
      id: 1,
      review:
        '"I was very impressed with the prompt service and the beautiful framing options available. My photos look stunning in their new frames. Thank you, MD Lamination!"',
      name: "Radhika, Amritsar",
      rating: 5,
    },
    {
      id: 2,
      review:
        '"I was very impressed with the prompt service and the beautiful framing options available. My photos look stunning in their new frames. Thank you, MD Lamination!"',
      name: "Riya, Amritsar",
      rating: 5,
    },
    {
      id: 3,
      review:
        '"MD Lamination did an amazing job with my photos! The frame selection was excellent, and the quality of the finished product exceeded my expectations. I highly recommend their services!"',
      name: "Suraj, Jalandhar",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Customer Reviews</h2>
          <div className="w-24 h-1 bg-[#4c0519] mx-auto mb-6"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">{review.review}</p>
                    <p className="font-medium text-[#4c0519]">{review.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-6 w-6 text-[#4c0519]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="h-6 w-6 text-[#4c0519]" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#4c0519]" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
