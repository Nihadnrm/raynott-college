import React, { useState } from "react";
import { addEventApi } from "../../services/AllApi";
import AdminLayout from "./AdminLayout";

const AddEvent = () => {
  const [addEvent, setAddEvent] = useState({
    title: "",
    date: "",
    description: "",
  });

  const handleAddEvent = async (e) => {
    e.preventDefault();

    const response = await addEventApi(addEvent);
    if (response.status === 200) {
      alert("Event added successfully");
      setAddEvent({ title: "", date: "", description: "" });
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <AdminLayout>

      {/* HEADER */}
      <h1 className="text-4xl font-extrabold text-red-600 mb-10 animate-slideUp">
        Add Event
      </h1>

      {/* FORM CONTAINER */}
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">

        <form
          onSubmit={handleAddEvent}
          className="bg-white/90 backdrop-blur-xl shadow-xl border border-red-200 rounded-2xl p-8 sm:p-10 animate-fadeIn"
        >
          {/* TITLE */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-red-700">
              Event Title
            </label>
            <input
              value={addEvent.title}
              onChange={(e) =>
                setAddEvent({ ...addEvent, title: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition"
              placeholder="Enter event title"
            />
          </div>

          {/* DATE */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-red-700">
              Event Date
            </label>
            <input
              type="date"
              value={addEvent.date}
              onChange={(e) =>
                setAddEvent({ ...addEvent, date: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="mb-8">
            <label className="block mb-2 font-semibold text-red-700">
              Description
            </label>
            <textarea
              value={addEvent.description}
              onChange={(e) =>
                setAddEvent({ ...addEvent, description: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition"
              rows="4"
              placeholder="Enter event details"
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-bold text-lg 
                       hover:bg-red-700 hover:scale-[1.02] transition-all shadow-md"
          >
            Add Event
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddEvent;
