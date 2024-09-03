import React from 'react'

function ContactUs() {
    
  return (
    <div className='container  '>
        <div className="container mx-auto p-6 max-w-lg">
      <h2 className="text-2xl font-bold text-primary mb-4 text-center">Contact Us</h2>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-500 focus:outline-none focus:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
    </div>
  )
}
export default ContactUs
