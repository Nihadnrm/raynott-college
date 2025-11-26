import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex overflow-hidden">

      {/* MOBILE MENU BUTTON */}
      <button
        className="sm:hidden fixed top-4 right-4 z-50 bg-red-600 text-white px-3 py-2
                   rounded-lg shadow-lg text-2xl active:scale-95"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* SIDEBAR */}
      <div
        className={`
          fixed sm:static top-0 left-0 h-full w-64 bg-red-600 text-white p-6
          flex flex-col overflow-y-auto shadow-xl
          transform ${open ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          sm:translate-x-0 z-40 shrink-0
        `}
      >
        {/* Close Button (mobile only) */}
        <button
          className="sm:hidden absolute top-5 right-5 text-3xl font-semibold"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {/* ADMIN TITLE */}
        <h2 className="text-3xl font-extrabold mb-10 mt-12 sm:mt-0 text-center sm:text-left tracking-wide">
          Admin Panel
        </h2>

        {/* NAV LINKS */}
        <nav className="flex flex-col gap-5 text-lg sm:text-base">

          <Link
            onClick={() => setOpen(false)}
            to="/addcourse"
            className="hover:text-red-200 transition-all"
          >
            ➤ Add Course
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/addfaculty"
            className="hover:text-red-200 transition-all"
          >
            ➤ Add Faculty
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/addevent"
            className="hover:text-red-200 transition-all"
          >
            ➤ Add Event
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/viewmessages"
            className="hover:text-red-200 transition-all"
          >
            ➤ View Messages
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/facultylist"
            className="hover:text-red-200 transition-all"
          >
            ➤ Faculty List
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/eventlist"
            className="hover:text-red-200 transition-all"
          >
            ➤ Event List
          </Link>

          <Link
            onClick={() => setOpen(false)}
            to="/"
            className="hover:text-red-200 transition-all"
          >
            ➤ Exit
          </Link>
        </nav>
      </div>

      {/* DARK OVERLAY FOR MOBILE */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="sm:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
        />
      )}

      {/* MAIN CONTENT */}
      <div
        className="
          flex-1 bg-white min-h-screen p-6 sm:p-10
          pt-20 sm:pt-10 overflow-y-auto animate-fadeIn
        "
      >
        {children ? (
          children
        ) : (
          <div className="space-y-4 animate-slideUp">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600">
              Welcome Admin
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl text-gray-700">
              Manage courses, faculty, events, and view student messages all from your
              dashboard in a clean and powerful interface.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLayout;
