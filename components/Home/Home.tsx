import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    
      <div className='grid grid-cols-1 md:grid-cols-2 pl-20'>
        <div>
            <h2 className='font-bold font text-[40px] md:text-[60px'>
                Drive Your Adventure Today!
                </h2>
            <h2 className='text-[15px] pr-20 mt-5 text-gray-400'>
            Rent the perfect vehicle today and explore new destinations with convenience and peace of mind

            </h2>
            <button className='mt-3 border-gray-700 bg-black p-2 rounded-full px-3 cursor-pointer text-white
            hover:scale-105 transition-all
            '>Explore More
            </button>
            
        </div>
        <div>
            <Image src='/car.png'
            alt='car'
            width={400}
            height={500}
            />
        </div>
    </div>

    
    
  )
}

export default Hero