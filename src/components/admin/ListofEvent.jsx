import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEventApi, deleteEventApi } from "../../services/AllApi";

const ListofEvent = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await getEventApi();
    if (response.status === 200) {
      setEvents(response.data);
    } else {
      console.log("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    const response = await deleteEventApi(id);
    if (response.status === 200) {
      alert("Event deleted successfully");
      fetchEvents();
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
        Events List
      </h1>

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto rounded-2xl shadow-xl border border-red-200 bg-white/90 backdrop-blur animate-fadeIn">
        <table className="w-full text-left text-sm sm:text-base">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="py-4 px-5">Title</th>
              <th className="py-4 px-5">Date</th>
              <th className="py-4 px-5">Description</th>
              <th className="py-4 px-5 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {events.length > 0 ? (
              events.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-red-50 transition-all"
                >
                  {/* TITLE */}
                  <td className="py-4 px-5 font-semibold text-gray-700">
                    {item.title}
                  </td>

                  {/* DATE */}
                  <td className="py-4 px-5 text-gray-600">{item.date}</td>

                  {/* DESCRIPTION */}
                  <td className="py-4 px-5 max-w-xs sm:max-w-sm">
                    <p className="text-gray-700 truncate sm:whitespace-normal">
                      {item.description}
                    </p>
                  </td>

                  {/* ACTIONS */}
                  <td className="py-4 px-5 text-center">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleDelete(item._id)}
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
                  No Events Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ListofEvent;
