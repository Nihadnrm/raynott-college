import React, { useEffect, useState } from "react";
import { getcourseApi } from "../services/AllApi";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    handleGetCourses();
  }, []);

  const handleGetCourses = async () => {
    const response = await getcourseApi();
    if (response.status === 200) {
      setCourses(response.data);
    }
  };

  return (
    <div className="animate-fade bg-white text-gray-800">

      {/* HEADER */}
      <section className="relative bg-red-600 text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold tracking-wide animate-slideUp">
            Our Courses
          </h1>
          <p className="text-lg opacity-90 mt-3 max-w-3xl mx-auto animate-fadeIn">
            Explore high-quality academic programs crafted for your bright future.
          </p>
        </div>

        {/* Floating Decorations */}
        <div className="absolute top-12 left-12 w-24 h-24 bg-white/15 rounded-full blur-xl animate-floatSlow"></div>
        <div className="absolute bottom-12 right-12 w-32 h-32 bg-white/10 rounded-full blur-lg animate-floatSlow2"></div>
      </section>

      {/* COURSES SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-14 animate-slideUp">
          Available Courses
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {courses.length > 0 ? (
            courses.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-red-200 shadow-xl rounded-2xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fadeIn"
              >
                {/* Title */}
                <h3 className="text-2xl font-bold text-red-600">{item.title}</h3>

                {/* Duration */}
                <p className="mt-2 text-gray-600 font-semibold">
                  Duration: {item.duration}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm text-gray-700 leading-relaxed text-justify">
                  {item.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-5 w-20 h-[3px] bg-red-500 rounded-full opacity-70"></div>
              </div>
            ))
          ) : (
            <h3 className="text-center text-gray-400 col-span-full">
              No Courses Added
            </h3>
          )}

        </div>
      </section>
    </div>
  );
};

export default Courses;
