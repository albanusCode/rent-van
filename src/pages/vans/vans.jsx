import React, { useState, useEffect } from 'react';
import { makeServer } from '../../server';
import { Link } from 'react-router-dom';
import Button from '../../components/button';

makeServer();

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    fetch('/api/vans')
      .then(response => response.json())
      .then(data => setVans(data.vans))
      .catch(error => console.error('Error fetching vans:', error));
  }, []);

  const handleFilter = (type) => {
    setSelectedType(type);
  };

  const filteredVans = selectedType ? vans.filter(van => van.type === selectedType) : vans;

  return (
    <div className={`flex py-4 bg-[#FFF7ED] overflow-x-hidden max-w-[1300px] justify-center`}>
      {filteredVans ? (
      <div className='relative mt-20 px-10'>
        <h1 className='text-3xl md:text-5xl md:p-8 font-semibold'>Explore Our Van Options</h1>
        <div className='flex justify-center sm:gap-10 gap-2 my-10 font-sans'>
          <span 
            className={`py-2 px-4 rounded-lg cursor-pointer ${selectedType === 'simple' ? 'bg-orange-500' : 'bg-orange-200 hover:bg-orange-500'}`}
            onClick={() => handleFilter('simple')}
          >
            Simple
          </span>
          <span 
            className={`py-2 px-4 rounded-lg cursor-pointer ${selectedType === 'luxury' ? 'bg-orange-500' : 'bg-orange-200 hover:bg-orange-500'}`}
            onClick={() => handleFilter('luxury')}
          >
            Luxury
          </span>
          <span 
            className={`py-2 px-4 rounded-lg cursor-pointer ${selectedType === 'rugged' ? 'bg-orange-500' : 'bg-orange-200 hover:bg-orange-500'}`}
            onClick={() => handleFilter('rugged')}
          >
            Rugged
          </span>
          <span className='px-4 rounded-lg cursor-pointer underline' onClick={() => handleFilter(null)}>Clear filters</span>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-10 items-center">
          {filteredVans.map((van) => (
            <div key={van.id} className="w-full">
              <Link 
                to={`/vans/${van.id}`} 
                aria-label={`View details for ${van.name}, priced at ${van.price} per day`}
              >
                <div className='flex justify-center'>
                  <img
                    src={van.imageUrl}
                    alt={`Image of ${van.name}`}
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
              </Link>
            </div>
          ))}
        </div>
      </div>
      ) : <div className='flex justify-center items-center h-full'>
              <div class="loader"></div>
          </div>
      }
    </div>
  );
}

export default Vans;
