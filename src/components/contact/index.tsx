import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    // Send the form data using EmailJS
    emailjs
      .send(
        "service_8mqz1ts",
        "template_svdgbid",
        formData,
        "jRkvKgTMtmTkRrk8e"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24" id="contact">
      <div className="container max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-6 mr-6">
            Have a question or want to collaborate? Drop us a message and we'll get back to you as soon as possible.
          </p>
          {status && <p className="text-sm text-red-600">{status}</p>}
        </div>

        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
