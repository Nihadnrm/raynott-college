import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getfacultyApi, deletefacultyApi } from "../../services/AllApi";

const ListofFaculty = () => {
  const navigate = useNavigate();
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    const response = await getfacultyApi();
    if (response.status === 200) {
      setFaculty(response.data);
    } else {
      alert("Something went wrong");
    }
  };

  const handleDeleteFaculty = async (id) => {
    const response = await deletefacultyApi(id);
    if (response.status === 200) {
      alert("Faculty deleted successfully");
      fetchFaculty();
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="w-full bg-white min-h-screen p-6 sm:p-10">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/admin")}
        className="mb-6 bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-md shadow-sm transition"
      >
        ← Back
      </button>

      {/* HEADER */}
      <h1 className="text-4xl font-extrabold text-red-600 mb-10 animate-slideUp">
        Faculty List
      </h1>

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto rounded-2xl shadow-xl border border-red-200 bg-white/90 backdrop-blur animate-fadeIn">

        <table className="w-full text-left text-sm sm:text-base">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="py-4 px-5">Photo</th>
              <th className="py-4 px-5">Name</th>
              <th className="py-4 px-5">Department</th>
              <th className="py-4 px-5 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {faculty.length > 0 ? (
              faculty.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-red-50 transition-all"
                >
                  {/* PHOTO */}
                  <td className="py-4 px-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-red-400 shadow-sm"
                    />
                  </td>

                  {/* NAME */}
                  <td className="py-4 px-5 font-semibold text-gray-700">
                    {item.name}
                  </td>

                  {/* DEPARTMENT */}
                  <td className="py-4 px-5 text-gray-600">{item.department}</td>

                  {/* ACTIONS */}
                  <td className="py-4 px-5 text-center">
                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => handleDeleteFaculty(item._id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 shadow-md hover:shadow-lg transition-all"
                      >
                        Delete
                      </button>

                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-6 text-gray-500 text-base"
                >
                  No Faculty Found
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default ListofFaculty;
