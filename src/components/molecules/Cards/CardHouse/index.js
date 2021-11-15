import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { url } from '../../../../config/api';
import { cityImage } from '../../../../assets';
import { PlusCircleIcon } from '@heroicons/react/outline';

const CardHouse = () => {
  const [myHouses, setMyHouses] = useState([]);

  async function fetchDataMyHouses() {
    try {
      const result = await axios.get(`${url.api}/houses/my-houses`, {
        headers: {
          "Authorization": localStorage.getItem("access_token")
        }
      })

      setMyHouses(result.data.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchDataMyHouses();
  }, [])

  return (
    <div className="w-full">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-1 py-12">
        <div className="w-full pb-12 flex flex-row justify-between">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl font-heading text-black">
            My Houses
          </h1>
          <button className="rounded px-2 py-2 text-white hover:bg-blue-200 bg-indigo-600 flex text-center">
            <PlusCircleIcon className="w-6 h-6 mr-1" /> Add
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {myHouses && myHouses.map(house => {
            const { house_name, house_rating, house_approval } = house;
            return (
              <div key={house.house_id} className="w-full rounded-lg shadow-lg p-3 flex flex-col justify-center">
                <div>
                  <img className="object-center object-cover rounded h-36 w-30" src={cityImage} alt="house..." />
                </div>
                <div className="text-start">
                  <p className="text-xl text-black font-bold mb-2">{house_name}</p>
                  <p className="text-base text-black font-normal">Rating: {house_rating}</p>
                  <p className="text-base text-black font-normal">
                    Status :
                    <span className={house_approval === null ? 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-500 text-white' : house_approval === false ? 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white' : 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'}>
                      {house_approval === null ? "On Progress" : house_approval === false ? "Rejected" : "Approved"}
                    </span>
                    <div className="my-3">
                      <button className="rounded px-2 py-2 text-white mr-2 hover:bg-blue-200 bg-indigo-600">
                        Edit
                      </button>
                      {house_approval !== false ? null : (
                        <button className="rounded px-2 py-2 text-white mr-2 hover:bg-blue-200 bg-yellow-600">
                          Request
                        </button>
                      )}
                      <button className="rounded px-2 py-2 text-white hover:bg-blue-200 bg-red-500">
                        Remove
                      </button>
                    </div>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default CardHouse
