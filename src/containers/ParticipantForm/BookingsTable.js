import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getParticipantById, getUserById } from "store/users/userActions";

const BookingsTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState();
  const [participantData, setParticipantData] = useState();
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.loginReducer);
  const { singleUser, singleParticipant } = useSelector(
    (state) => state.userReducer
  );
  console.log("admin", admin);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    dispatch(getUserById(admin?._id));
    setUserData(singleUser);
  }, []);

  console.log("singleUser", singleUser);
  const { id } = useParams();
  const history = useNavigate();

    // const filteredData = data.filter((item) => {
    //   return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    // });

  return (
    <div
      className="flex flex-col"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <div
        className="w-full mb-8"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "53%",
        }}
      >
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </div> */}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" style={{display:"flex", marginTop:"5%"}}>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    View
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {singleUser?.booking?.map((item) => (
                  <tr key={item._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item?._id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item.firstName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {item.lastName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => {
                          history(`/pay-done/${item?._id}`)
                          console.log(item._id);
                        }}
                        className="text-sm text-gray-500"
                        style={{
                          width: "3rem",
                          border: "1px solid black",
                          borderRadius: "10px",
                          backgroundColor: "#4f46e5ff",
                          color: "#FFF",
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsTable;
