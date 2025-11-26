import React, { useEffect, useState } from "react";
import { getfacultyApi } from "../services/AllApi";

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    handleGetFaculty();
  }, []);

  const handleGetFaculty = async () => {
    const response = await getfacultyApi();
    if (response.status === 200) {
      setFaculty(response.data);
    }
  };

  return (
    <div className="animate-fade bg-white text-gray-800">

      {/* HEADER */}
      <section className="relative bg-red-600 text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold tracking-wide animate-slideUp">
            Meet Our Faculty
          </h1>
          <p className="text-lg opacity-90 mt-3 max-w-2xl mx-auto animate-fadeIn">
            Highly qualified, passionate educators dedicated to shaping future leaders.
          </p>
        </div>

        {/* Floating Decorations */}
        <div className="absolute top-12 left-12 w-20 h-20 bg-white/15 rounded-full blur-xl animate-floatSlow"></div>
        <div className="absolute bottom-12 right-12 w-28 h-28 bg-white/10 rounded-full blur-lg animate-floatSlow2"></div>
      </section>

      {/* STAFF SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12 animate-slideUp">
          Staff Members
        </h2>

        {/* NEW MODERN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {faculty.length > 0 ? (
            faculty.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-red-200 shadow-xl rounded-2xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fadeIn"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-red-500 shadow-md"
                />

                {/* NAME */}
                <h3 className="text-2xl font-bold text-red-600 mt-5">
                  {item.name}
                </h3>

                {/* DEPARTMENT */}
                <p className="text-gray-600 text-sm mt-1 uppercase tracking-wide font-semibold">
                  {item.department}
                </p>

                {/* STYLISH DECORATION */}
                <div className="mt-4 w-16 mx-auto h-[3px] bg-red-500 opacity-70 rounded-full"></div>
              </div>
            ))
          ) : (
            <h3 className="text-center text-gray-400 col-span-full">No Faculty Added</h3>
          )}
        </div>
      </section>
    </div>
  );
};

export default Faculty;
