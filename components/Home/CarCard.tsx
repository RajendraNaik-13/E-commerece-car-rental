import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaGasPump } from 'react-icons/fa'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'
import { PiSteeringWheelFill } from 'react-icons/pi'
import { FaArrowRight } from "react-icons/fa";
function CarCard(props:any) {
    const [car, setcar] = useState<any>()
    useEffect(()=>{
      if(props.car){
        setcar(props.car)
      }
    },[props.car])
  return car&&(
    <div className="bg-white rounded-lg shadow-lg p-4 group hover:bg-gray-100 transition-colors duration-300">
      <h2 className="text-[20px] font-medium mb-2">{car.name}</h2>
      <h2 className="">
        <span className="text-[12px] font-light">₹</span>
        {car.price}
        <span className="text-[12px] font-light">/day</span>
      </h2>
      <Image
        src={car.image?.url}
        alt={car.name}
        width={150}
        height={200}
        className="w-[200px] h-[150px] mb-3 object-contain"
      />
      <div className="flex justify-around">
        
        <div className="text-center text-gray-500 group-hover:hidden">
          <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
          <h2 className="text-[14px] font-light">{car.carType}</h2>
        </div>
        <div className="text-center text-gray-500 group-hover:hidden">
          <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
          <h2 className="text-[14px] font-light">{car.seats} Seat</h2>
        </div>
        <div className="text-center text-gray-500 group-hover:hidden">
          <FaGasPump className="w-full text-[22px] mb-2" />
          <h2 className="text-[14px] font-light">{car.carAvg} MPG</h2>
        </div>
      </div>
      
      <div className="hidden group-hover:flex justify-center mt-4 opacity-100 transition-opacity duration-300">
        <button className="flex items-center px-8 py-2 bg-gray-950 text-white rounded-lg shadow-md hover:scale-105 transition duration-300">
          Rent Now
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default CarCard