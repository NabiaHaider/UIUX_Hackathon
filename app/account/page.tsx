import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AccountPage = () => {
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
          <h1 className="text-7xl mb-7 font-medium">My Account</h1>
          <p className="text-2xl mt-1 font-medium">
            <Link href="/">Home</Link> &gt; <span className="text-gray-600">My account</span>
          </p>
        </div>
      </section>

      {/* Login and Register Section */}
      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Login Section */}
<div>
  <h2 className="text-4xl font-bold mb-6">Log In</h2>
  <form>
    <label htmlFor="username" className="block mb-2 font-medium py-9">
      Username or email address
    </label>
    <input
      type="text"
      id="username"
      className="w-full p-5 border border-gray-400 rounded mb-1"
    />
    <label htmlFor="password" className="block mb-2 font-medium py-10">
      Password
    </label>
    <input
      type="password"
      id="password"
      className="w-full p-5 border border-gray-400 rounded mb-4"
    />
    <div className="flex items-center mb-4 my-11">
      <input type="checkbox" id="remember" className="mr-2 " />
      <label htmlFor="remember">Remember me</label>
    </div>
    <div className="flex items-center justify-between mt-4">
      <button className="w-52 border hover:bg-slate-500 border-black text-black py-4 rounded">
        Log In
      </button>
      <a href="/forgot-password" className="text-black text-sm mr-56">
        Lost Your Password?
      </a>
    </div>
  </form>
</div>

          {/* Register Section */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Register</h2>
            <form>
              <label htmlFor="email" className="block mb-2 font-medium py-9">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-5 border border-gray-400 rounded mb-4"
              />
              <p className="text-sm text-gray-600 mb-4 my-10">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="mt-10 text-sm text-gray-600  my-32">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our
                <a href="/privacy-policy" className="text-blue-500"> privacy policy</a>.
              </p>
              <button className="w-52  border hover:bg-slate-500 border-black text-black py-4 rounded ">
                Register
              </button>
            </form>
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
                        <ul className="space-y-2">
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
       
  );
};

export default AccountPage;
