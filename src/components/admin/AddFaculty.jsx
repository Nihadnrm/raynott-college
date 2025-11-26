import React, { useState } from "react";
import { addfacultyApi } from "../../services/AllApi";
import AdminLayout from "./AdminLayout";

const AddFaculty = () => {
  const [addfaculty, setAddfaculty] = useState({
    name: "",
    department: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleAddFaculty = async (e) => {
    e.preventDefault();

    if (!addfaculty.name || !addfaculty.department || !addfaculty.image) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      const response = await addfacultyApi(addfaculty);

      if (response.status === 200) {
        alert("Faculty added successfully");
        setAddfaculty({ name: "", department: "", image: "" });
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>

      {/* HEADER */}
      <h1 className="text-4xl font-extrabold text-red-600 mb-10 animate-slideUp">
        Add Faculty
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleAddFaculty}
        className="bg-white/90 backdrop-blur-xl shadow-xl border border-red-200 rounded-2xl p-8 max-w-xl animate-fadeIn"
      >
        {/* NAME */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-red-700">
            Name
          </label>
          <input
            value={addfaculty.name}
            onChange={(e) =>
              setAddfaculty({ ...addfaculty, name: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition"
            placeholder="Faculty Name"
          />
        </div>

        {/* DEPARTMENT */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-red-700">
            Department
          </label>
          <input
            value={addfaculty.department}
            onChange={(e) =>
              setAddfaculty({ ...addfaculty, department: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition"
            placeholder="Ex: Computer Science"
          />
        </div>

        {/* PHOTO URL */}
        <div className="mb-8">
          <label className="block mb-2 font-semibold text-red-700">
            Photo URL
          </label>
          <input
            value={addfaculty.image}
            onChange={(e) =>
              setAddfaculty({ ...addfaculty, image: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition"
            placeholder="https://image.jpg"
          />
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
          {loading ? "Adding..." : "Add Faculty"}
        </button>
      </form>

    </AdminLayout>
  );
};

export default AddFaculty;
