import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { API_BASE_URL } from "../../config";

export default function Donations() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const itemsPerPage = 10;
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}donation`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Il y a eu une erreur!", error);
      });
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="py-10 px-20 space-y-5 w-full">
      <div className="bg-white mx-auto h-[70vh] p-10 rounded-3xl">
        <div className="h-[90%] w-full">
        <table className="border-2 w-full rounded-3xl">
          <thead className="border-2">
            <tr>
              <th className="py-2 px-4 border-2 font-Montserrat">Prenom</th>
              <th className="py-2 px-4 border-2 font-Montserrat">Nom</th>
              <th className="py-2 px-4 border-2 font-Montserrat">Numéro</th>
              <th className="py-2 px-4 border-2 font-Montserrat">Montant</th>
              <th className="py-2 px-4 border-2 font-Montserrat">Devise</th>
              <th className="py-2 px-4 border-2 font-Montserrat">
                Description
              </th>
              <th className="py-2 px-4 border-2 font-Montserrat">Statut</th>
              <th className="py-2 px-4 border-2 font-Montserrat">
                Transact_Id
              </th>
              <th className="py-2 px-4 border-2 font-Montserrat">Date</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-2 font-Montserrat">{item.firstName}</td>
                <td className="py-2 px-4 border-2 font-Montserrat">{item.lastName}</td>
                <td className="py-2 px-4 border-2 font-Montserrat">{item.phoneNumber}</td>
                <td className="py-2 px-4 border-2 font-Montserrat">{item.amount}</td>
                <td className="py-2 px-4 border-2 font-Montserrat">{item.currency}</td>
                <td className="py-2 px-4 border-2 font-Montserrat">{item.description}</td>
                <td className="py-2 px-4 border-2 font-Montserrat">{item.status}</td>
                <td className="py-2 px-4 border-2 font-Montserrat">{item.transactionId}</td>
                <td className="py-2 px-4 border-2 font-Montserrat">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePreviousPage}
            className="flex items-center px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            <Icon icon="tabler:chevrons-left" className="w-5 h-5" />
            Précédent
          </button>
          <span>
            Page {currentPage} sur {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            className="flex items-center px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Suivant
            <Icon icon="tabler:chevrons-right" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
