import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dummyAlumni } from "../assets/DummyAlluminies";
import { getcourseApi, getfacultyApi, getEventApi } from "../services/AllApi";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    handleGetCourses();
    handleGetFaculty();
    handleGetEvents();
  }, []);

  const handleGetCourses = async () => {
    const res = await getcourseApi();
    if (res.status === 200) setCourses(res.data);
  };

  const handleGetFaculty = async () => {
    const res = await getfacultyApi();
    if (res.status === 200) setFaculty(res.data);
  };

  const handleGetEvents = async () => {
    const res = await getEventApi();
    if (res.status === 200) setEvents(res.data);
  };

  return (
    <div className="bg-white text-gray-800 w-full overflow-x-hidden">

      {/* ⭐ HERO SECTION */}
      <section className="bg-red-600 text-white py-20 px-6 lg:px-16 overflow-hidden">
        <div className="grid lg:grid-cols-2 items-center gap-10 animate-fadeIn">

          {/* TEXT */}
          <div className="text-center lg:text-left animate-slideUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Welcome to  
              <span className="block text-white/90 mt-2">Our College</span>
            </h1>

            <p className="text-lg opacity-90 mt-4 max-w-xl mx-auto lg:mx-0">
              Creating tomorrow’s leaders through world-class education, innovation, and opportunities.
            </p>

            <Link
              to="/about"
              className="mt-6 inline-block bg-white text-red-600 font-bold px-8 py-3 rounded-xl shadow-xl hover:bg-red-100 hover:scale-105 transition-all"
            >
              Learn More →
            </Link>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center animate-zoomIn">
            <img
              src="https://img.freepik.com/premium-photo/education-college-girl-student-isolated-red-september-1-copy-space-banner-knowledge-education-school-education-students-life-teen-girl-back-school-knowledge-day-smart-clever_474717-182128.jpg"
              className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>



      {/* ⭐ ABOUT */}
      <section className="py-20 px-6 text-center animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">About Us</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed bg-red-50 border border-red-200 rounded-xl p-6 shadow">
          Our institution fosters an environment of excellence, innovation and personal growth.
        </p>
      </section>



      {/* ⭐ COURSES */}
      <section className="py-20 bg-red-50 px-6 animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12">
          Popular Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all animate-slideUp"
            >
              <h3 className="text-xl font-bold text-red-600">{item.title}</h3>
              <p className="text-gray-600 mt-3 text-sm">{item.description}</p>
              <p className="text-gray-800 mt-4 font-semibold">Duration: {item.duration}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to={'/courses'} className="bg-red-600 text-white px-8 py-3 rounded-xl shadow hover:bg-red-700 hover:scale-105 transition-all">
            More Courses →
          </Link>
        </div>
      </section>



      {/* ⭐ FACULTY */}
      <section className="py-20 px-6 max-w-7xl mx-auto animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12">
          Our Faculty
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faculty.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className="flex bg-white border border-red-200 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all animate-slideUp"
            >
              <img src={item.image} className="w-36 h-36 object-cover" />

              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-red-600">{item.name}</h3>
                <p className="text-gray-600">{item.department}</p>
                <div className="mt-4 w-16 h-1 bg-red-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to={'/faculty'} className="bg-red-600 text-white px-8 py-3 rounded-xl shadow hover:bg-red-700 hover:scale-105 transition-all">
            More Faculty →
          </Link>
        </div>
      </section>



      {/* ⭐ EVENTS */}
      <section className="py-20 px-6 max-w-7xl mx-auto animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.slice(0, 3).map((ev, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl p-6 border border-red-200 hover:-rotate-1 hover:scale-[1.03] transition-all animate-zoomIn"
            >
              <h3 className="text-xl font-bold text-red-600">{ev.title}</h3>
              <p className="mt-4 text-gray-600 text-sm">{ev.description}</p>
              <p className="mt-3 text-sm font-bold text-red-700">{ev.date}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to={'/events'} className="bg-red-600 text-white px-8 py-3 rounded-xl shadow hover:bg-red-700 hover:scale-105 transition-all">
            More Events →
          </Link>
        </div>
      </section>



      {/* ⭐ ALUMNI */}
      <section className="py-20 px-6 max-w-7xl mx-auto animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12">Our Alumni</h2>

        <div className="flex overflow-x-auto gap-8 pb-6 scrollbar-hide">
          {dummyAlumni.map((item, i) => (
            <div
              key={i}
              className="min-w-[220px] bg-white border border-red-200 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-all animate-slideUp"
            >
              <img
                src={item.image}
                className="w-24 h-24 mx-auto rounded-full border-4 border-red-500"
              />
              <h3 className="text-lg font-bold text-red-600 mt-3">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.course}</p>
              <p className="text-gray-700 text-sm font-semibold">{item.role}</p>
            </div>
          ))}
        </div>
      </section>



      {/* ⭐ CONTACT */}
      <section className="bg-red-600 text-white py-20 px-6 text-center animate-fadeIn">
        <h3 className="text-3xl md:text-4xl font-bold">Contact Us</h3>
        <p className="max-w-xl mx-auto text-lg opacity-90 mt-4">
          Feel free to reach out. We’re always happy to help!
        </p>

        <Link to={'/contact'} className="mt-6 inline-block bg-white text-red-600 font-bold px-8 py-3 rounded-xl shadow hover:scale-105 transition">
          Get in Touch
        </Link>
      </section>

    </div>
  );
};

export default Home;
