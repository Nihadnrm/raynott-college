import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import { getContactApi } from "../../services/AllApi";

const ViewMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const response = await getContactApi();
    if (response.status === 200) {
      setMessages(response.data);
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-4xl font-extrabold text-red-600 mb-8 animate-slideUp">
        Messages
      </h1>

      <div className="bg-white/90 backdrop-blur-xl shadow-xl border border-red-200 rounded-2xl p-6 sm:p-8 max-w-3xl w-full animate-fadeIn">

        {/* Empty State */}
        {messages.length === 0 ? (
          <p className="text-center text-gray-500 py-6 text-lg">
            No Messages Yet
          </p>
        ) : (
          <div className="space-y-5">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-red-200 shadow-sm bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Name + Email */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl font-bold text-red-600">
                    {msg.name}
                  </h3>
                  <p className="text-sm text-gray-600">{msg.email}</p>
                </div>

                {/* Divider */}
                <div className="mt-3 w-full h-[2px] bg-red-100 rounded-full"></div>

                {/* Message */}
                <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </AdminLayout>
  );
};

export default ViewMessages;
