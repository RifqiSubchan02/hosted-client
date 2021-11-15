import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Modal } from '..';
import { url } from '../../../config/api';

const Table = () => {
  const [dataHouses, setDataHouses] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isApprove, setIsApprove] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");
  const [houseId, setHouseId] = useState("");

  useEffect(() => {
    fetchDataHouses();
  }, [])

  const onAction = async () => {
    try {
      const result = await axios.put(`${url.api}/houses/approval/${houseId}`, { approval: isApprove }, {
        headers: {
          "Authorization": localStorage.getItem("access_token")
        }
      });

      alert(result.data.message);
    } catch (error) {
      alert(error)
    }
  }

  async function fetchDataHouses() {
    try {
      const result = await axios.get(`${url.api}/houses/approval`, {
        headers: {
          "Authorization": localStorage.getItem("access_token")
        }
      })

      setDataHouses(result.data.data);
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    House Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Region
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dataHouses.map(houses => (
                  <tr key={houses.house_id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        {houses.house_id}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{houses.house_name}</div>
                      <div className="text-sm text-gray-500">{houses.house_user_id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{houses.house_address}</div>
                      <div className="text-sm text-gray-500">{houses.house_city}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{houses.house_province}</div>
                      <div className="text-sm text-gray-500">{houses.house_country}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => {
                          setIsOpen(true);
                          setDialogTitle("Approve House");
                          setDialogMessage("Are you sure want to approve ?");
                          setIsApprove(true);
                          setHouseId(houses.house_id);
                        }}
                        className="rounded mr-2 px-2 py-2 text-white hover:bg-blue-200 bg-indigo-600">
                        Approve
                      </button>
                      <button
                        onClick={() => {
                          setIsOpen(true);
                          setDialogTitle("Reject House");
                          setDialogMessage("Are you sure want to reject ?");
                          setIsApprove(false);
                          setHouseId(houses.house_id);
                        }}
                        className="rounded px-2 py-2 text-white hover:bg-blue-200 bg-red-400"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isOpen ? <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} dialogTitle={dialogTitle} dialogMessage={dialogMessage} onAction={onAction} /> : null}
    </div>
  )
}

export default Table
