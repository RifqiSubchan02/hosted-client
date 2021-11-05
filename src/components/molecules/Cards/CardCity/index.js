import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { cityImage } from '../../../../assets';
import { url } from '../../../../config/api';

const CardCity = () => {
  const [dataCities, setDataCities] = useState([]);

  useEffect(async () => {
    try {
      const cities = await axios.get(`${url.api}/houses/city`);
      setDataCities(cities.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="w-full">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-start pb-12">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl font-heading text-black">
            Explore nearby
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dataCities.map(city => {
            return (
              <div key={city.house_city} className="w-full rounded-lg shadow-lg p-3 flex flex-row justify-center items-center">
                <div className="mr-3">
                  <img className="object-center object-cover rounded h-20 w-24" src={cityImage} alt="photo" />
                </div>
                <div className="text-start">
                  <p className="text-xl text-black font-bold mb-2">{city.house_city}</p>
                  <p className="text-base text-black font-normal">30 minute drive</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>)
}

export default CardCity;
