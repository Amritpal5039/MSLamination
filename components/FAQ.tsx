"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const faqs = [
    {
      question: "What frame sizes do you offer?",
      answer:
        "We offer a wide range of frame sizes to accommodate various photo dimensions. Our standard sizes include 4x6, 5x7, 8x10, 11x14, and 16x20 inches. We also provide custom sizing options for special requirements.",
    },
    {
      question: "How long does it take to complete an order?",
      answer:
        "Most standard framing orders are completed within 3-5 business days. Custom or complex orders may take 7-10 business days. Rush services are available for an additional fee.",
    },
    {
      question: "Do you offer delivery services?",
      answer:
        "Yes, we offer delivery services throughout Amritsar and surrounding areas. Delivery charges may apply based on your location. We ensure safe packaging to protect your framed photos during transit.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, all major credit/debit cards, UPI payments, and bank transfers. A 50% advance payment is required for custom orders.",
    },
    {
      question: "Can I see samples of your work before ordering?",
      answer:
        "You can visit our shop in Amritsar to view our sample frames and previous work. We also have a gallery section on our website showcasing our various framing styles and finished projects.",
    },
  ]

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-[#4c0519] mx-auto mb-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Don't see your question here? Feel free to contact us!</p>
          <a href="#contact">
          <button className="bg-[#4c0519] text-white hover:bg-[#3a0413] font-medium px-6 py-3 rounded-md transition-colors shadow-lg" >
            Contact Us
          </button>
          </a>
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-[#4c0519]" /> : <ChevronDown className="h-5 w-5 text-[#4c0519]" />}
      </button>

      {isOpen && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}
