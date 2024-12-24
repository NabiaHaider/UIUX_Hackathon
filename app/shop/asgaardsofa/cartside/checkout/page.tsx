import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CheckOut = () => {
  return (
    <div>
      {/* First Section with Tailwind Background */}
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
          <h1 className="text-7xl mb-7 font-medium"> Checkout</h1>
          <p className="text-2xl mt-1 font-medium">
            <Link href="/">Home</Link> &gt; <span className="text-gray-400">Checkout</span>
          </p>
        </div>
      </section>

      {/* Billing details and product Section */}
      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Billing Details Section */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Billing details</h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstname" className="block mb-2 font-medium py-3">First Name</label>
                  <input
                    type="text"
                    id="firstname"
                    className="w-full p-5 border border-gray-400 rounded mb-4"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="block mb-2 font-medium py-3">Last Name</label>
                  <input
                    type="text"
                    id="lastname"
                    className="w-full p-5 border border-gray-400 rounded mb-4"
                  />
                </div>
              </div>

              <label htmlFor="companyname" className="block mb-2 font-medium py-3">Company Name (Optional)</label>
              <input
                type="text"
                id="companyname"
                className="w-full p-5 border border-gray-400 rounded mb-4"
              />
              
              <label htmlFor="country" className="block mb-2 font-medium py-3">Country / Region</label>
              <input
                type="text"
                id="country"
                className="w-full p-5 border border-gray-400 rounded mb-4"
              />

              <label htmlFor="streetaddress" className="block mb-2 font-medium py-3">Street address</label>
              <input
                type="text"
                id="streetaddress"
                className="w-full p-5 border border-gray-400 rounded mb-4"
              />

              <label htmlFor="city" className="block mb-2 font-medium py-3">Town / City</label>
              <input
                type="text"
                id="city"
                className="w-full p-5 border border-gray-400 rounded mb-4"
              />

              <label htmlFor="province" className="block mb-2 font-medium py-3">Province</label>
              <input
                type="text"
                id="province"
                className="w-full p-5 border border-gray-400 rounded mb-4"
              />

              <label htmlFor="zipcode" className="block mb-2 font-medium py-3">ZIP code</label>
              <input
                type="text"
                id="zipcode"
                className="w-full p-5 border border-gray-400 rounded mb-4"
              />

              <label htmlFor="phone" className="block mb-2 font-medium py-3">Phone</label>
              <input
                type="text"
                id="phone"
                className="w-full p-5 border border-gray-400 rounded mb-4"
              />

              <label htmlFor="email" className="block mb-2 font-medium py-3">Email address</label>
              <input
                type="text"
                id="email"
                className="w-full p-5 border border-gray-400 rounded mb-4"
              />

              <textarea
                id="additionalinfo"
                placeholder="Additional information"
                className="w-full p-5 border border-gray-400 rounded mb-4 mt-16"
              ></textarea>
            </form>
          </div>

          {/* Product and Subtotal Section */}
          <div>
            
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-4xl font-medium">Product</span>
                <span className="text-4xl font-medium">Subtotal</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className='text-gray-400 text-2xl'>Asgaard Sofa <span className='text-black'> x 1</span></span>
                <span className='text-2xl'>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className='text-black text-2xl'>Subtotal</span>
                <span className='text-2xl'>Rs. 250,000.00</span>
              </div>
             
              <div className="flex justify-between items-center text-2xl">
                <span>Total</span>
                <span className='text-yellow-600 text-3xl font-bold'>Rs. 250,000.00</span>
              </div>
            </div>
             
            <hr className="my-4" />
            <div className="mb-6">
            
              <div>
                <label className="flex items-center mb-3 text-2xl">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    className="mr-2"
                  />
                  Direct Bank Transfer
                </label>
                <p className="text-xl text-gray-400 mb-3">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
               
                <label className="flex items-center mb-3 mt-8 text-gray-400">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    className="mr-2"
                  />
                 Direct Bank Transfer
                </label>
                <label className="flex items-center mb-3 mt-8 text-gray-400">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    className="mr-2"
                  />
                  Cash On Delivery
                </label>

                <p className="text-xl text-gray-400 mb-3">
                Your personal data will be used to support your experience throughout this website,
                 to manage access to your account, and for other purposes described in our 
                 <span className='text-black font-semibold'> privacy policy.</span>
                </p>
              </div>
            </div>

            <button className="w-72 ml-36 border border-black text-black py-5 rounded-lg font-medium text-xl mt-10">
              Place order
            </button>
          </div>
        </div>
      </section>

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
          If the product has an issue, consectetur <span className='pr-48'>adipim scing elit.</span>
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
                        <p className='my-4'>pakistan</p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-gray-400 text-sm font-medium mb-3">Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-black hover:text-gray-700 transition">Home</a>
                            </li>
                            <li>
                                <a href="/shop" className="text-black hover:text-gray-700 transition">Shop</a>
                            </li>
                            <li>
                                <a href="#" className="text-black hover:text-gray-700 transition">About</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-black hover:text-gray-700 transition">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h3 className="text-gray-400 text-sm font-medium mb-3">Help</h3>
                        <ul className='space-y-2'>
                            <li>
                                <a href="#" className="text-black hover:text-gray-700 transition">Payment Options</a>
                            </li>
                            <li>
                                <a href="#" className="text-black hover:text-gray-700 transition">Return</a>
                            </li>
                            <li>
                                <a href="#" className="text-black hover:text-gray-700 transition">Privacy Policies</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-3">Newsletter</h3>
                        <div className="flex items-center">
                            <input type="email" placeholder="Enter Your Email Address" className="flex-1 px-4 py-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
                            <button className=" text-black underline  px-4 py-2 font-bold hover:bg-gray-300 transition">Subscribe</button>
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

    </div>
  )
}

export default CheckOut;
