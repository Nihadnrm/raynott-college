import React from "react";

const About = () => {
  return (
    <div className="animate-fade bg-white text-gray-800">

      {/* HEADER */}
      <section className="relative bg-red-600 text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold tracking-wide animate-slideUp">
            About Our College
          </h1>
          <p className="text-lg opacity-90 mt-3 max-w-3xl mx-auto animate-fadeIn">
            Learn more about our journey, values, mission, and vision for the future.
          </p>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-12 left-12 w-24 h-24 bg-white/20 rounded-full blur-xl animate-floatSlow"></div>
        <div className="absolute bottom-12 right-12 w-32 h-32 bg-white/10 rounded-full blur-lg animate-floatSlow2"></div>
      </section>

      {/* ABOUT THE COLLEGE */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-red-600 mb-6 animate-slideUp">
          About the College
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg animate-fadeIn">
          Our college is committed to nurturing young minds and preparing them for a bright future.
          With highly experienced faculty, modern infrastructure, and a wide range of programs,
          we aim to deliver world-class education that meets global standards.
          <br /><br />
          We encourage creativity, innovation, and holistic development, ensuring our students grow
          academically, personally, and socially. Every student is guided to become a confident,
          ethical, and impactful individual.
        </p>

        {/* Decorative Line */}
        <div className="mt-8 w-24 h-1 bg-red-500 rounded-full opacity-70"></div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 px-6 bg-red-50 border-y border-red-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-600 mb-6 animate-slideUp">
            Our Mission
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg animate-fadeIn">
            Our mission is to offer accessible, affordable, and high-quality education while
            fostering an inclusive and inspiring learning environment.  
            <br /><br />
            We empower students with knowledge, life skills, ethics, and confidence to excel in a
            rapidly evolving world and contribute meaningfully to society.
          </p>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-red-600 mb-6 animate-slideUp">
          Our Vision
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg animate-fadeIn">
          Our vision is to be recognized as a leading educational institution known for academic
          excellence, innovation, and student-centered learning.
          <br /><br />
          We aspire to inspire the next generation of leaders, innovators, and professionals who
          will positively impact society and shape a better tomorrow.
        </p>

        {/* Decorative Line */}
        <div className="mt-8 w-24 h-1 bg-red-500 rounded-full opacity-70"></div>
      </section>
    </div>
  );
};

export default About;
