import { useState } from "react";
import { Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT; // Environment variable

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Error! Please try again.");
    }
  };

  return (
    <div className="h-[80%]">

     <section id="installationguide" className="pt-16 pb-6 px-10 w-3/5">
          <h2 className="text-4xl  font-semibold">  📬 Contact Us</h2>
          
        </section>

    <div className="max-w-5xl mx-auto bg-white shadow-sm  rounded-2xl overflow-hidden md:flex ">
      {/* Left Side - Contact Info */}
      
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          We’d love to hear from you! Fill out the form or contact us using the details below.
        </p>

        <div className="space-y-4 text-gray-700">
          <p className="flex items-center">
          	📱  +123 456 7890
          </p>
          <p className="flex items-center">
          ✉️  contact@example.com
          </p>
          <p className="flex items-center">
          📍 123 Street, City, Country
          </p>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full md:w-1/2 p-8 bg-gray-50/5">
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300"
          >
            Send Message <Send className="ml-2 w-5 h-5" />
          </button>
        </form>
        {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
