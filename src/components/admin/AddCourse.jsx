import React, { useState } from "react";
import { addcourseApi } from "../../services/AllApi";
import AdminLayout from "./AdminLayout";

const AddCourse = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    duration: "",
  });

  const [loading, setLoading] = useState(false);

  const handleAddCourse = async (e) => {
    e.preventDefault();

    if (!data.title || !data.description || !data.duration) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await addcourseApi(data);

      if (response.status === 200) {
        alert("Course added successfully");
        setData({ title: "", description: "", duration: "" });
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.log(err);
      alert("Server error while adding course");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>

      {/* HEADER */}
      <h1 className="text-4xl font-extrabold text-red-600 mb-10 animate-slideUp">
        Add Course
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleAddCourse}
        className="bg-white/90 backdrop-blur-xl shadow-xl border border-red-200 rounded-2xl p-8 max-w-xl animate-fadeIn"
      >
        {/* TITLE */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-red-700">
            Course Title
          </label>
          <input
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition"
            placeholder="Enter course title"
          />
        </div>

        {/* DURATION */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-red-700">
            Duration
          </label>
          <input
            value={data.duration}
            onChange={(e) => setData({ ...data, duration: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition"
            placeholder="Ex: 3 Years"
          />
        </div>

        {/* DESCRIPTION */}
        <div className="mb-8">
          <label className="block mb-2 font-semibold text-red-700">
            Description
          </label>
          <textarea
            value={data.description}
            onChange={(e) =>
              setData({ ...data, description: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition"
            rows="4"
            placeholder="Short course description"
          ></textarea>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-bold text-lg transition 
          ${
            loading
              ? "bg-red-300 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700 hover:scale-[1.02]"
          } shadow-md`}
        >
          {loading ? "Adding..." : "Add Course"}
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddCourse;
