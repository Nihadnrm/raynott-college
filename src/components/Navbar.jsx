import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white shadow-lg sticky top-0 z-50 transition-all">

      {/* NAVBAR CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-extrabold tracking-wide flex items-center gap-1">
          <span className="text-white">RAYNOTT</span>
          <span className="text-red-200">INSTITUTE</span>
        </h1>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-red-200 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-red-200 transition">About</Link></li>
          <li><Link to="/courses" className="hover:text-red-200 transition">Courses</Link></li>
          <li><Link to="/faculty" className="hover:text-red-200 transition">Faculty</Link></li>
          <li><Link to="/events" className="hover:text-red-200 transition">Events</Link></li>
          <li><Link to="/contact" className="hover:text-red-200 transition">Contact</Link></li>
          <li><Link to="/admin" className="hover:text-red-200 transition">Admin</Link></li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl hover:text-red-200 transition"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden bg-red-700 p-5 space-y-4 text-lg font-medium animate-slideDown">
          <Link onClick={() => setOpen(false)} to="/" className="block hover:text-red-200">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="block hover:text-red-200">About</Link>
          <Link onClick={() => setOpen(false)} to="/courses" className="block hover:text-red-200">Courses</Link>
          <Link onClick={() => setOpen(false)} to="/faculty" className="block hover:text-red-200">Faculty</Link>
          <Link onClick={() => setOpen(false)} to="/events" className="block hover:text-red-200">Events</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="block hover:text-red-200">Contact</Link>
          <Link onClick={() => setOpen(false)} to="/admin" className="block hover:text-red-200">Admin</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
