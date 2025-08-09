import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Handshake, Lightbulb, MessageSquare, Menu, X } from 'lucide-react'; // Import Lucide icons

// Placeholder components for demonstration.
// In a real project, these would be in their respective files (e.g., components/Navbar.jsx)

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="p-4 bg-gray-950 text-white shadow-xl rounded-b-xl mb-8 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-teal-400 animate-pulse">FresherBot</h1>
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#hero" className="hover:text-teal-300 transition duration-300 transform hover:scale-105">Home</a>
          <a href="#trusted-by" className="hover:text-teal-300 transition duration-300 transform hover:scale-105">Partners</a>
          <a href="#how-to" className="hover:text-teal-300 transition duration-300 transform hover:scale-105">How It Works</a>
          <a href="#testimonials" className="hover:text-teal-300 transition duration-300 transform hover:scale-105">Testimonials</a>
          <a href="#contact" className="hover:text-teal-300 transition duration-300 transform hover:scale-105">Contact</a>
        </div>
        <button
          className="md:hidden text-teal-400 focus:outline-none p-2 rounded-md hover:bg-gray-700 transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden mt-4 bg-gray-800 rounded-lg overflow-hidden"
      >
        <div className="flex flex-col items-center py-4 space-y-4 text-lg">
          <a href="#hero" className="block py-2 hover:text-teal-300 transition duration-300 w-full text-center" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#trusted-by" className="block py-2 hover:text-teal-300 transition duration-300 w-full text-center" onClick={() => setIsOpen(false)}>Partners</a>
          <a href="#how-to" className="block py-2 hover:text-teal-300 transition duration-300 w-full text-center" onClick={() => setIsOpen(false)}>How It Works</a>
          <a href="#testimonials" className="block py-2 hover:text-teal-300 transition duration-300 w-full text-center" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#contact" className="block py-2 hover:text-teal-300 transition duration-300 w-full text-center" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </motion.div>
    </nav>
  );
};

const Hero = () => (
  <section id="hero" className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-white text-center px-4 py-16 bg-gradient-to-br from-indigo-950 via-purple-950 to-gray-950 rounded-b-3xl shadow-2xl mx-4 my-8 overflow-hidden">
    {/* Background gradient overlay for depth */}
    <div className="absolute inset-0 bg-gradient-to-tl from-teal-500/10 to-transparent z-0"></div>

    <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight relative z-10 text-shadow-lg">
      Launch Your <span className="text-teal-400 animate-pulse">Career Journey</span>
    </h2>
    <p className="text-xl md:text-2xl max-w-3xl mb-10 opacity-90 relative z-10">
      FresherBot empowers you to navigate the job market with confidence, from resume building to interview mastery, and beyond.
    </p>
    <button className="px-10 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg rounded-full shadow-xl transform transition duration-500 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50 relative z-10">
      Get Started Today
    </button>
    {/* Dynamic background shapes for visual flair */}
    <div className="absolute top-20 left-10 w-24 h-24 bg-teal-400 rounded-full opacity-5 animate-spin-slow"></div>
    <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full opacity-5 animate-pulse-slow delay-300"></div>
    <div className="absolute bottom-5 left-1/4 w-16 h-16 bg-indigo-400 rounded-full opacity-5 animate-bounce-slow delay-600"></div>
  </section>
);

const TrustedBy = () => (
  <section id="trusted-by" className="py-20 text-center text-white bg-gray-900 rounded-xl shadow-2xl m-4">
    <h3 className="text-4xl font-bold mb-12 text-teal-300">Trusted By Leading Companies & Institutions</h3>
    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 px-4">
      {/* Enhanced visual representation for "logos" */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center justify-center h-20 w-36 md:w-48 text-lg font-semibold text-gray-200">
        Global Corp
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center justify-center h-20 w-36 md:w-48 text-lg font-semibold text-gray-200">
        Innovate Solutions
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center justify-center h-20 w-36 md:w-48 text-lg font-semibold text-gray-200">
        Tech University
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center justify-center h-20 w-36 md:w-48 text-lg font-semibold text-gray-200">
        Creative Agency
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center justify-center h-20 w-36 md:w-48 text-lg font-semibold text-gray-200">
        Future Systems
      </div>
    </div>
  </section>
);

const ScrollSlider = () => (
  <section className="py-20 text-center text-white bg-gray-950 rounded-xl shadow-2xl m-4">
    <h3 className="text-4xl font-bold mb-12 text-teal-300">Explore Our Powerful Features</h3>
    <div className="overflow-x-auto p-6 flex space-x-8 scrollbar-hide-custom">
      {[
        { title: "AI Resume Builder", desc: "Craft winning resumes tailored to specific jobs with intelligent suggestions." },
        { title: "Interview Simulation", desc: "Practice with AI mock interviews and get instant feedback on your performance." },
        { title: "Personalized Job Matches", desc: "Receive curated job listings that perfectly align with your skills and aspirations." },
        { title: "Skill Gap Analysis", desc: "Identify areas for improvement and get resources to boost your employability." },
        { title: "Career Path Planning", desc: "Visualize your career journey with guided roadmaps and industry insights." },
      ].map((feature, i) => (
        <div key={i} className="flex-none w-80 min-w-[20rem] bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 border border-gray-700 hover:border-teal-500">
          <h4 className="text-2xl font-semibold mb-3 text-teal-400">{feature.title}</h4>
          <p className="text-gray-300 text-base">{feature.desc}</p>
        </div>
      ))}
    </div>
    {/* Custom scrollbar hide for Tailwind */}
    <style dangerouslySetInnerHTML={{__html: `
      .scrollbar-hide-custom::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide-custom {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.05; }
        50% { opacity: 0.15; }
      }
      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      .animate-spin-slow {
        animation: spin-slow 20s linear infinite;
      }
      .animate-pulse-slow {
        animation: pulse-slow 4s ease-in-out infinite;
      }
      .animate-bounce-slow {
        animation: bounce-slow 3s ease-in-out infinite;
      }
    `}} />
  </section>
);

const HrccScreen = () => (
  <section className="py-20 text-center text-white bg-gray-900 rounded-xl shadow-2xl m-4">
    <h3 className="text-4xl font-bold mb-12 text-teal-300">Seamless HRCC Integration</h3>
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center p-8 bg-gray-800 rounded-2xl shadow-xl border border-gray-700">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 text-left">
        <p className="text-xl text-gray-200 leading-relaxed mb-6">
          Connect effortlessly with Human Resources and university Career Centers. Our platform is designed to streamline your application process and ensure your profile stands out to recruiters.
        </p>
        <ul className="list-none space-y-3 text-lg text-gray-300">
          <li className="flex items-center"><Check className="text-teal-400 mr-3" size={20} /> Automated Application Tracking</li>
          <li className="flex items-center"><Check className="text-teal-400 mr-3" size={20} /> Personalized Feedback & Coaching</li>
          <li className="flex items-center"><Check className="text-teal-400 mr-3" size={20} /> Direct Communication Channels</li>
          <li className="flex items-center"><Check className="text-teal-400 mr-3" size={20} /> Access to Exclusive Job Fairs & Events</li>
        </ul>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img src="https://placehold.co/550x350/1F2937/F3F4F6?text=HRCC+Dashboard+Mockup" alt="HRCC Dashboard Mockup" className="w-full h-auto rounded-xl shadow-2xl border border-gray-600" />
      </div>
    </div>
  </section>
);

const Howtodo = () => (
  <section id="how-to" className="py-20 text-center text-white bg-gray-950 rounded-xl shadow-2xl m-4">
    <h3 className="text-4xl font-bold mb-12 text-teal-300">Your Path to Success with FresherBot</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
        <div className="text-6xl mb-6 text-teal-400 font-extrabold flex items-center justify-center w-20 h-20 bg-gray-700 rounded-full mx-auto border-2 border-teal-400">1</div>
        <h4 className="text-2xl font-semibold mb-3">Create Your Profile</h4>
        <p className="text-gray-300 text-base leading-relaxed">
          Begin by building a comprehensive and attractive profile. Highlight your academic achievements, skills, projects, and career aspirations. Our intuitive interface makes it easy.
        </p>
      </div>
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
        <div className="text-6xl mb-6 text-teal-400 font-extrabold flex items-center justify-center w-20 h-20 bg-gray-700 rounded-full mx-auto border-2 border-teal-400">2</div>
        <h4 className="text-2xl font-semibold mb-3">Get Personalized Guidance</h4>
        <p className="text-gray-300 text-base leading-relaxed">
          Leverage our AI-powered insights for tailored job recommendations, instant resume feedback, and realistic mock interview simulations to sharpen your skills.
        </p>
      </div>
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
        <div className="text-6xl mb-6 text-teal-400 font-extrabold flex items-center justify-center w-20 h-20 bg-gray-700 rounded-full mx-auto border-2 border-teal-400">3</div>
        <h4 className="text-2xl font-semibold mb-3">Land Your Dream Job</h4>
        <p className="text-gray-300 text-base leading-relaxed">
          Apply with newfound confidence. Track your applications, prepare for every stage, and confidently step into your first professional role. Your success is our mission.
        </p>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-20 text-center text-white bg-gray-900 rounded-xl shadow-2xl m-4">
    <h3 className="text-4xl font-bold mb-12 text-teal-300">What Our Achievers Say</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 flex flex-col justify-between h-full">
        <p className="italic text-gray-300 text-lg leading-relaxed mb-6">
          "FresherBot completely transformed my job search experience. The personalized feedback on my resume and the mock interviews were invaluable. I landed my dream job much faster than I expected!"
        </p>
        <p className="font-semibold text-teal-400 text-xl">- Alex Chen, Software Engineer</p>
      </div>
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 flex flex-col justify-between h-full">
        <p className="italic text-gray-300 text-lg leading-relaxed mb-6">
          "As a fresh graduate, the job market felt overwhelming. FresherBot's step-by-step guidance and amazing resources made the entire process so much clearer and less stressful. Highly recommended!"
        </p>
        <p className="font-semibold text-teal-400 text-xl">- Maria Rodriguez, Marketing Specialist</p>
      </div>
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 flex flex-col justify-between h-full">
        <p className="italic text-gray-300 text-lg leading-relaxed mb-6">
          "The HRCC integration and direct communication features were a game-changer. It felt like I had an insider advantage. FresherBot is truly a must-have tool for any fresher."
        </p>
        <p className="font-semibold text-teal-400 text-xl">- David Lee, Data Analyst</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="p-10 mt-12 bg-gray-950 text-white text-center rounded-t-xl shadow-inner">
    <p className="text-lg mb-4">&copy; 2025 FresherBot. All rights reserved.</p>
    <div className="flex justify-center space-x-6 mt-4 text-md">
      <a href="#" className="hover:text-teal-400 transition duration-300 transform hover:scale-105">Privacy Policy</a>
      <a href="#" className="hover:text-teal-400 transition duration-300 transform hover:scale-105">Terms of Service</a>
      <a href="#" className="hover:text-teal-400 transition duration-300 transform hover:scale-105">Contact Us</a>
    </div>
    <p className="text-gray-500 text-sm mt-6">Made with passion for career success.</p>
  </footer>
);

const BottomNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-gray-950 text-white shadow-xl z-50 rounded-t-xl py-2">
    <div className="flex justify-around items-center h-16">
      <a href="#hero" className="flex flex-col items-center text-xs text-teal-400 transform hover:scale-110 transition duration-300">
        <Home className="text-2xl" />
        <span className="mt-1">Home</span>
      </a>
      <a href="#trusted-by" className="flex flex-col items-center text-xs hover:text-teal-400 transform hover:scale-110 transition duration-300">
        <Handshake className="text-2xl" />
        <span className="mt-1">Partners</span>
      </a>
      <a href="#how-to" className="flex flex-col items-center text-xs hover:text-teal-400 transform hover:scale-110 transition duration-300">
        <Lightbulb className="text-2xl" />
        <span className="mt-1">How To</span>
      </a>
      <a href="#testimonials" className="flex flex-col items-center text-xs hover:text-teal-400 transform hover:scale-110 transition duration-300">
        <MessageSquare className="text-2xl" />
        <span className="mt-1">Testimonials</span>
      </a>
    </div>
  </nav>
);

// Icon for HRCC section - assuming Check icon is used for list items
const Check = ({ className, size = 24 }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);


// The main App component, equivalent to your Index component
const App = () => {
  useEffect(() => {
    // Set document title and body styles on component mount
    document.title = "FresherBot - Launch Your Career Journey";
    document.body.style.padding = "0";
    document.body.style.margin = "0";
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.backgroundColor = "#121339"; // Overall dark background

    // Load Tailwind CSS CDN - Ensure it's loaded only once
    const tailwindScriptId = 'tailwind-cdn-script';
    if (!document.getElementById(tailwindScriptId)) {
      const tailwindScript = document.createElement('script');
      tailwindScript.id = tailwindScriptId;
      tailwindScript.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(tailwindScript);
    }

    // Cleanup function to reset styles and remove script on component unmount
    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.style.padding = "";
      document.body.style.margin = "";
      document.body.style.backgroundColor = "";
      const tailwindScript = document.getElementById(tailwindScriptId);
      if (tailwindScript) {
        document.head.removeChild(tailwindScript);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount and once on unmount

  // framer-motion variant for fade-in-up animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 }, // Increased y for a slightly more pronounced slide
    visible: {
      opacity: 1, // Final state: visible
      y: 0,       // Final state: at original Y position
      transition: {
        duration: 0.8, // Slightly longer duration for smoother animation
        ease: "easeOut", // Easing function
      },
    },
  };

  return (
    // Main container div with flex column for sticky footer/nav and overflow hidden for responsiveness
    <div className="min-h-screen flex flex-col w-full font-inter overflow-x-hidden">
      {/* Navbar component */}
      <Navbar />

      {/* Full screen Hero Section */}
      <Hero />

      {/* The rest of the page with light background */}
      {/* Changed bg-beige-50 to bg-neutral-100 for better Tailwind compatibility and a soft light look */}
      <div className="bg-neutral-900 flex-grow py-12"> {/* flex-grow ensures this div takes available space */}
        {/* Trusted By Companies and Colleges */}
        <motion.div
          initial="hidden" // Start from hidden state
          whileInView="visible" // Animate to visible when in viewport
          viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% of element is visible
          variants={fadeInUp} // Apply the fadeInUp animation
        >
          <TrustedBy />
        </motion.div>

        {/* Scroll Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <ScrollSlider />
        </motion.div>

        {/* How We Do It (HrccScreen and Howtodo) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <HrccScreen />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Howtodo />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Testimonials />
        </motion.div>

        {/* Competitors Section (commented out as per original) */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Competitors />
        </motion.div> */}

        {/* CTA Section (commented out as per original) */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <CTASection />
        </motion.div> */}
      </div>

      {/* Footer component */}
      <Footer />

      {/* Persistent Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default App;
