"use client"

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Message sent!');
    // Handle form submission logic here (e.g., send data to a server)
    setFormData({ name: '', email: '', message: '' }); // Clear the form after submission
  };

  return (
    <div className="container mx-auto px-4 py-8 relative bg-gradient-to-r from-[#a59d84] to-[#ecebde] py-20 ">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4  bg-gray-400">
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-400 rounded-md"
            />
          </div>

          <div className="mb-4 bg-gray-400">
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-400 rounded-md"
            />
          </div>

          <div className="mb-4 bg-gray-400">
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-400 rounded-md"
            ></textarea>
          </div>

          <div className="flex justify-center bg-gray-300">
            <button
              type="submit"
              className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
