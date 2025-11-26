import React, { useState } from "react";
import { addContactApi } from "../services/AllApi";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleAddMessage = async () => {
    if (!contact.name || !contact.email || !contact.message) {
      alert("Please fill all fields");
      return;
    }

    const response = await addContactApi(contact);
    if (response.status === 200) {
      alert("Message sent successfully");
      setContact({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="animate-fade bg-white text-gray-800">

      {/* HEADER */}
      <section className="relative bg-red-600 text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold tracking-wide animate-slideUp">
            Contact Us
          </h1>
          <p className="text-lg opacity-90 mt-3 max-w-2xl mx-auto animate-fadeIn">
            We're always here to assist you. Send us your queries anytime.
          </p>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-12 left-12 w-24 h-24 bg-white/15 rounded-full blur-xl animate-floatSlow"></div>
        <div className="absolute bottom-12 right-12 w-28 h-28 bg-white/10 rounded-full blur-lg animate-floatSlow2"></div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-6 max-w-3xl mx-auto w-full">
        <div className="bg-white/80 backdrop-blur-xl border border-red-200 rounded-2xl shadow-xl p-8 sm:p-10 animate-fadeIn">

          {/* NAME */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-red-700 text-base">
              Name
            </label>
            <input
              type="text"
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-red-500 transition"
              placeholder="Enter your name"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-red-700 text-base">
              Email
            </label>
            <input
              type="email"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-red-500 transition"
              placeholder="Enter your email"
            />
          </div>

          {/* MESSAGE */}
          <div className="mb-8">
            <label className="block mb-2 font-medium text-red-700 text-base">
              Message
            </label>
            <textarea
              rows="5"
              value={contact.message}
              onChange={(e) => setContact({ ...contact, message: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:ring-red-500 transition"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="button"
            onClick={handleAddMessage}
            className="w-full bg-red-600 text-white font-bold py-3 rounded-lg text-lg hover:bg-red-700 hover:scale-[1.02] transition-all duration-300 shadow-lg"
          >
            Send Message
          </button>

        </div>
      </section>
    </div>
  );
};

export default Contact;
