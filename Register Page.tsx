import React from 'react';

// Main App component
export default function App() {
  return (
    // Outer container for the entire page
    <div className="min-h-screen flex flex-col font-inter bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800">

      {/* Modern Navbar */}
      <nav className="fixed w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-xl z-20 py-4 px-6 flex justify-between items-center border-b border-gray-100 transform transition-all duration-300 ease-in-out hover:shadow-2xl">
        <div className="flex items-center space-x-2">
          {/* Simple SVG Logo for FresherBot */}
          <svg className="h-8 w-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <div className="text-3xl font-extrabold text-gray-800 tracking-tight">FresherBot</div>
        </div>
        <div className="space-x-8">
          <a href="#" className="text-gray-700 hover:text-indigo-700 transition duration-300 ease-in-out font-medium text-lg">Home</a>
          <a href="#" className="text-gray-700 hover:text-indigo-700 transition duration-300 ease-in-out font-medium text-lg">About</a>
          <a href="#" className="text-indigo-700 hover:text-indigo-800 font-bold transition duration-300 ease-in-out text-lg">Register</a>
          <button className="px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full py-24 sm:py-32 lg:py-40 flex flex-col items-center justify-center text-center text-white overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 shadow-inner z-10">
        {/* Background blobs for visual interest */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 px-4 max-w-4xl">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter drop-shadow-lg">
            Unlock Your Career Potential
          </h2>
          <p className="mt-6 text-xl sm:text-2xl font-light opacity-90 leading-relaxed">
            Connect with top companies and exciting opportunities. Your journey to a brighter future starts here.
          </p>
        </div>
      </section>

      {/* Main content area containing the form, adjusted padding for hero section */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-16">
        {/* Card container for the registration form */}
        <div className="w-full max-w-md p-10 space-y-8 bg-white rounded-3xl shadow-2xl border border-gray-100 transition-all duration-500 ease-in-out transform hover:scale-[1.005] animate-fade-in relative z-10">
          {/* Header section */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight leading-tight">Create Your Account</h1>
            <p className="text-base text-gray-500 mt-2">
              Join <span className="font-semibold text-indigo-600">FresherBot</span> to build your career
            </p>
          </div>

          {/* Registration Form */}
          <form className="space-y-7">
            <div className="space-y-6">
              {/* First Name and Last Name fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    placeholder="John"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 transition duration-300 ease-in-out text-gray-800 placeholder-gray-400 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    placeholder="Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 transition duration-300 ease-in-out text-gray-800 placeholder-gray-400 text-base"
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  placeholder="you@example.com"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 transition duration-300 ease-in-out text-gray-800 placeholder-gray-400 text-base"
                />
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 transition duration-300 ease-in-out text-gray-800 placeholder-gray-400 text-base"
                />
              </div>

              {/* Role selection (Radio Group) */}
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">I am a:</span>
                <div className="flex flex-wrap gap-4">
                  {["candidate", "employer", "college"].map((role) => (
                    <div key={role} className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-full cursor-pointer
                      hover:bg-purple-50 hover:border-purple-300 transition duration-200 ease-in-out
                      has-[:checked]:bg-purple-100 has-[:checked]:border-purple-500 has-[:checked]:shadow-md">
                      <input type="radio" id={role} name="role" value={role} className="form-radio h-4 w-4 text-purple-600 focus:ring-purple-500" defaultChecked={role === "candidate"} />
                      <label htmlFor={role} className="capitalize text-base text-gray-700 cursor-pointer">{role}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms and Privacy Checkbox */}
              <div className="flex items-start gap-3">
                <input type="checkbox" id="terms" className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500 transition duration-200 mt-1 cursor-pointer" />
                <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  I agree to the{" "}
                  <a href="#" className="text-indigo-600 hover:underline hover:text-indigo-700 font-medium transition duration-200 ease-in-out">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-indigo-600 hover:underline hover:text-indigo-700 font-medium transition duration-200 ease-in-out">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-bold py-3.5 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75 shadow-lg"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center text-sm text-gray-600 mt-8">
            Already have an account?{" "}
            <a href="#" className="text-indigo-600 hover:underline font-semibold hover:text-indigo-700 transition duration-200 ease-in-out">
              Log in
            </a>
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="w-full bg-gray-900 text-gray-300 py-10 px-6 mt-auto shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-white tracking-tight">FresherBot</h3>
            <p className="text-sm leading-relaxed">Your trusted partner in career building and talent acquisition.</p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons (placeholders) */}
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.048 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996 4.102 4.102 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.102 4.102 0 001.27 5.477A4.073 4.073 0 01.8 10.70c-.095.002-.19.002-.285.004a4.102 4.102 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.188a8.333 8.333 0 01-1.284-.073 11.68 11.68 0 006.566 1.954z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.494 22H7.506a5.506 5.506 0 01-5.506-5.506V7.506A5.506 5.506 0 017.506 2h4.988a5.506 5.506 0 015.506 5.506v4.988a5.506 5.506 0 01-5.506 5.506zM12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM18.5 7A1.5 1.5 0 1117 8.5 1.5 1.5 0 0118.5 7z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition duration-200">Job Listings</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Company Profiles</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition duration-200">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-r-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-sm mt-8 pt-6 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} FresherBot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Ensure Tailwind CSS is loaded
const tailwindScript = document.createElement('script');
tailwindScript.src = 'https://cdn.tailwindcss.com';
document.head.appendChild(tailwindScript);

// Optional: Add Inter font for better typography
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// Apply custom Tailwind config and extend theme for custom animations
tailwindScript.onload = () => {
  if (window.tailwind) {
    window.tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            inter: ['Inter', 'sans-serif'],
          },
          animation: {
            'fade-in': 'fadeIn 1s ease-out forwards',
            'blob': 'blob 7s infinite', // Animation for hero section blobs
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: 0, transform: 'translateY(10px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
            blob: {
              '0%, 100%': {
                transform: 'translate(0px, 0px) scale(1)',
              },
              '33%': {
                transform: 'translate(30px, -50px) scale(1.1)',
              },
              '66%': {
                transform: 'translate(-20px, 20px) scale(0.9)',
              },
            },
          },
        },
      },
    };
  }
};
