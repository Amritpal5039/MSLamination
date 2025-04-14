import type React from "react"
import { Mail, Phone, Clock } from "lucide-react"

export default function Location() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-[#4c0519] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out to us with any questions or to place an order.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif font-bold mb-6">Get In Touch</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-[#4c0519] p-2 rounded-md text-white mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Our Location</h4>
                  <p className="text-gray-600">
                    841, Kot Khalsa, OPP. RS Building Material, Nivi Patti Road, Amritsar-I(143002), Punjab, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#4c0519] p-2 rounded-md text-white mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  <p className="text-gray-600">hs406256@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#4c0519] p-2 rounded-md text-white mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 94783 36731</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#4c0519] p-2 rounded-md text-white mr-4">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c0519]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c0519]"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c0519]"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c0519]"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4c0519] text-white hover:bg-[#3a0413] font-medium px-6 py-3 rounded-md transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="h-[500px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.3480241382417!2d74.82772349999999!3d31.624320200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919654235866623%3A0x475cd9c0f944f82b!2sM%2FS.%20Delhi%20Lamination!5e0!3m2!1sen!2sin!4v1744544026677!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
