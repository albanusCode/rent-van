import React, { useState, useEffect } from 'react';
import { makeServer } from '../server';
import Button from '../components/button'

makeServer();

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then(response => response.json())
      .then(data => setVans(data.vans))
      .catch(error => console.error('Error fetching vans:', error));
  }, []);
  
  return (
    <div className={`flex py-4 bg-[#FFF7ED] overflow-x-hidden max-w-[1300px] justify-center`}>
      <div className='relative mt-20 md:px-10 px-10'>
        <h1 className='text-3xl md:text-5xl md:p-8 font-semibold'>Explore Our Van Options</h1>
        <div className='flex justify-center gap-10 my-10 font-sans'>
          <span className='bg-orange-200 py-2 px-4 rounded-lg cursor-pointer hover:bg-orange-500'>Simple</span>
          <span className='bg-orange-200 py-2 px-4 rounded-lg cursor-pointer hover:bg-orange-500'>Luxury</span>
          <span className='bg-orange-200 py-2 px-4 rounded-lg cursor-pointer hover:bg-orange-500'>Rugged</span>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-10 items-center">
          {vans.map((van) => (
            <div key={van.id} className="w-full">
              <div className='flex justify-center'>
                <img
                  src={van.imageUrl}
                  alt={van.name}
                  className='sm:w-[320px] w-auto h-auto mb-4 rounded-lg'
                />
              </div>
              <div className='lg:ml-6'>
                <div className='flex justify-between lg:w-[320px]'>
                  <span className='font-semibold'>{van.name}</span>
                  <span className='font-semibold'>${van.price}/day</span>
                </div>
                <div className='pt-3 sm:w-[400px]'>
                  <Button title={van.type}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vans;