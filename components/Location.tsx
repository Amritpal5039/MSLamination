"use client";
import React, { useState } from "react";
import { Mail, Phone, Clock } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby1r_0Ic5e951tvq_0pk5G0UoCcLNrRrBIwW8MJpPengoZQ317aksyIYjY2b8vxr2tSMw/exec";

export default function Location() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-[#4c0519] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out to us with any questions or to
            place an order.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif font-bold mb-6">Get In Touch</h3>

            {/* Contact Info Section */}
            <div className="space-y-4 mb-8">
              <ContactItem
                icon={<MapPin className="h-5 w-5" />}
                title="Our Location"
              >
                841, Kot Khalsa, OPP. RS Building Material, Nivi Patti Road,
                Amritsar-I(143002), Punjab, India
              </ContactItem>
              <ContactItem icon={<Mail className="h-5 w-5" />} title="Email Us">
                <a
                  href="mailto:hs406256@gmail.com"
                  className=" hover:underline"
                >
                  hs406256@gmail.com
                </a>
              </ContactItem>

              <ContactItem icon={<Phone className="h-5 w-5" />} title="Call Us">
                <a
                  href="tel:+919478336731"
                  className=" hover:underline"
                >
                  +91 94783 36731
                </a>
              </ContactItem>

              <ContactItem
                icon={<Clock className="h-5 w-5" />}
                title="Business Hours"
              >
                <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                <p>Sunday: Closed</p>
              </ContactItem>
            </div>

            {/* Form Submission */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
                <InputField
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  type="tel"
                />
              </div>
              <InputField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                type="email"
              />
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c0519]"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#4c0519] text-white hover:bg-[#3a0413] font-medium px-6 py-3 rounded-md transition-colors shadow-lg"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-green-600 font-medium pt-2">
                  Your message has been sent!
                </p>
              )}
            </form>
          </div>

          {/* Google Map Embed */}
          <div className="h-[500px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.348025081503!2d74.82514857587329!3d31.62432017416654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919654235866623%3A0x475cd9c0f944f82b!2sM%2FS.%20Delhi%20Lamination!5e0!3m2!1sen!2sin!4v1748529137737!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper Components
function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c0519]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

function ContactItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start">
      <div className="bg-[#4c0519] p-2 rounded-md text-white mr-4">{icon}</div>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-gray-600">{children}</p>
      </div>
    </div>
  );
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
  );
}
