import React, { useEffect, useState } from "react";
import { getEventApi } from "../services/AllApi";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    handleGetEvents();
  }, []);

  const handleGetEvents = async () => {
    const response = await getEventApi();
    if (response.status === 200) {
      setEvents(response.data);
    }
  };

  return (
    <div className="animate-fade bg-white text-gray-800">

      {/* HEADER */}
      <section className="relative bg-red-600 text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold tracking-wide animate-slideUp">
            College Events
          </h1>
          <p className="text-lg opacity-90 mt-3 max-w-3xl mx-auto animate-fadeIn">
            Stay updated with all major programs, workshops, celebrations & activities.
          </p>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-12 left-12 w-24 h-24 bg-white/15 rounded-full blur-xl animate-floatSlow"></div>
        <div className="absolute bottom-12 right-12 w-32 h-32 bg-white/10 rounded-full blur-lg animate-floatSlow2"></div>
      </section>

      {/* EVENTS SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-14 animate-slideUp">
          Upcoming Events
        </h2>

        {/* NEW MODERN EVENT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {events.length > 0 ? (
            events.map((ev, index) => (
              <div
                key={index}
                className="relative bg-white border border-red-200 shadow-xl p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 animate-fadeIn"
              >

                {/* Floating Date Tag */}
                <span className="absolute -top-4 right-4 bg-red-600 text-white text-sm px-4 py-1 rounded-full shadow">
                  {ev.date}
                </span>

                {/* Event Title */}
                <h3 className="text-2xl font-bold text-red-600 mt-4">
                  {ev.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-3 text-sm leading-relaxed text-justify">
                  {ev.description}
                </p>

                {/* Read More Button (UI Only) */}
                <button className="mt-5 text-red-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            ))
          ) : (
            <h3 className="text-center text-gray-500 col-span-full">
              No Events Available
            </h3>
          )}

        </div>
      </section>

    </div>
  );
};

export default Events;
