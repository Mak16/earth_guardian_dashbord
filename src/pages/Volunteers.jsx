import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config";

export default function Volunteers() {
  const [volunteers, setVolunteers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}volunteer`)
      .then((response) => {
        setVolunteers(response.data);
      })
      .catch((error) => {
        console.error("Il y a eu une erreur!", error);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = volunteers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(volunteers.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="py-10 px-20 space-y-5 w-full">
      <div className="bg-white mx-auto p-10 rounded-3xl">
        <table className="border-2 w-full rounded-3xl">
          <thead className="border-2">
            <tr>
              <th className="py-2 px-4 border-2 font-Montserrat">No.</th>
              <th className="py-2 px-4 border-2 font-Montserrat">First Name</th>
              <th className="py-2 px-4 border-2 font-Montserrat">Last Name</th>
              <th className="py-2 px-4 border-2 font-Montserrat">Email</th>
              <th className="py-2 px-4 border-2 font-Montserrat">Message</th>
              <th className="py-2 px-4 border-2 font-Montserrat">Created At</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((volunteer, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-2 font-Montserrat">
                  {indexOfFirstItem + index + 1}
                </td>
                <td className="py-2 px-4 border-2 font-Montserrat">
                  {volunteer.first_name}
                </td>
                <td className="py-2 px-4 border-2 font-Montserrat">
                  {volunteer.last_name}
                </td>
                <td className="py-2 px-4 border-2 font-Montserrat">
                  {volunteer.email}
                </td>
                <td className="py-2 px-4 border-2 font-Montserrat">
                  {volunteer.message}
                </td>
                <td className="py-2 px-4 border-2 font-Montserrat">
                  {new Date(volunteer.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm">
            {pageNumbers.map((number) => (
              <a
                key={number}
                onClick={() => paginate(number)}
                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                  currentPage === number
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-gray-500 border-gray-300"
                }`}
              >
                {number}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
