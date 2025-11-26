import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 mt-10">
      
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* COLUMN 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-3">College Portal</h2>
          <p className="text-white/70 text-sm leading-relaxed">
            Empowering students through quality education,
            innovation, and academic excellence.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/70">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-white transition">Courses</Link></li>
            <li><Link to="/events" className="hover:text-white transition">Events</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-2 text-white/70">
            <li>📍 Malappuram, Kerala</li>
            <li>📧 collegeportal@gmail.com</li>
            <li>📞 +91 98765 43210</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            
            <a href="#" className="hover:text-gray-300 transition"><i className="fa-solid fa-phone"></i></a>
            <a href="#" className="hover:text-gray-300 transition"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-300 transition"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-white/50 mt-10 text-sm border-t border-white/20 pt-4">
        © {new Date().getFullYear()} College Portal. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
