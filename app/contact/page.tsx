import React from 'react';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const ContactSection = () => {
  // Form Submission Handler


  return (
    <>
      {/* Header Section */}
      <section
        className="relative h-[60vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/bgpic.jpg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
           <Image
                    src="/bg.png"
                    alt="Product 4"
                    width={100}
                    height={100}
                    className="object-contain mx-auto"
                  />
          
          <h1 className="text-7xl mb-7 font-medium">Contact</h1>
          <p className="text-2xl mt-1 font-medium">
            <Link href="/">Home</Link> &gt; <span className="text-gray-600">Contact</span>
          </p>
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Heading and Paragraph */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-black">Get In Touch With Us</h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              For More Information About Our Product & Services, Please Feel Free To Drop Us An Email.
              Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column (Transparent with Dark Navy Blue Border) */}

            {/* First Column (Transparent with Dark Navy Blue Border) */}
            <div className="p-8 rounded-lg space-y-6">
              {/* Address Section */}
              <div className="flex items-start space-x-4">
                <FaLocationDot size={24} color="black" />
                <div>
                  <h2 className="text-xl font-semibold text-black">Address</h2>
                  <p className="text-gray-600">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>

              {/* Phone Section */}
              <div className="flex items-start space-x-4">
                <FaPhone size={24} color="black" />
                <div>
                  <h2 className="text-xl font-semibold text-black">Phone</h2>
                  <p className="text-gray-600">
                    Mobile: +(84) 546-6789<br />
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>

              {/* Working Time Section */}
              <div className="flex items-start space-x-4">
                <FaClock size={24} color="black" />
                <div>
                  <h2 className="text-xl font-semibold text-black">Working Time</h2>
                  <p className="text-gray-600">
                    Monday-Friday: 9:00 - 22:00<br />
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>


            {/* Second Column (Contact Form) */}
            <div className=" p-8">
              <form className="space-y-6" >
                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Abc"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Abc@def.com"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="This is an optional"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="I'd like to ask about"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-48 py-3 border border-black rounded-xl text-black text-lg hover:bg-black hover:text-white transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Posts Section */}
      <section className="bg-pink-50 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Column */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-black font-bold text-3xl">Free Delivery</h2>
              <p className="text-xl text-gray-500 flex-grow mt-2">
                For all orders over $50, consectetur <span className='pr-72'>adipim scing elit.</span>
              </p>
            </div>

            {/* Second Column */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-black font-bold text-3xl">90 Days Return</h2>
              <p className="text-xl text-gray-500 flex-grow mt-2">
                If the product has an issue, consectetur  <span className='pr-48'>adipim scing elit.</span>
              </p>
            </div>

            {/* Third Column */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-black font-bold text-3xl">Secure Payments</h2>
              <p className="text-xl text-gray-500 flex-grow mt-2">
                100% secure payments, consectetur <span className='pr-72'>adipim scing elit.</span>
              </p>
            </div>
          </div>
        </div>
        </section>

        <footer className="bg-white py-8 border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Address */}
              <div className="text-gray-600 text-sm">
                <p>Jouhar</p>
                <p>pakistan</p>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-gray-400 text-sm font-medium mb-3">Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-800 hover:text-gray-900 transition">Home</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-800 hover:text-gray-900 transition">Shop</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-800 hover:text-gray-900 transition">About</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-800 hover:text-gray-900 transition">Contact</a>
                  </li>
                </ul>
              </div>

              {/* Help */}
              <div>
                <h3 className="text-gray-400 text-sm font-medium mb-3">Help</h3>
                <ul className='space-y-2'>
                  <li>
                    <a href="#" className="text-gray-800 hover:text-gray-900 transition">Payment Options</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-800 hover:text-gray-900 transition">Return</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-800 hover:text-gray-900 transition">Privacy Policies</a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-gray-400 text-sm font-medium mb-3">Newsletter</h3>
                <div className="flex items-center">
                  <input type="email" placeholder="Enter Your Email Address" className="flex-1 px-4 py-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
                  <button className=" text-black underline  px-4 py-2 font-bold hover:bg-gray-800 transition">Subscribe</button>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 text-center text-gray-600 text-sm">
              <hr />
            </div>
            <p className="pt-4">2022 Meubel House. All rights reserved.</p>
          </div>
        </footer>
     
    </>
  );
};

export default ContactSection;