import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/host/vans')
      .then(response => response.json())
      .then(data => setVans(data.vans))
      .catch(error => console.error('Error fetching vans:', error));
  }, []);
  return (
    <div className='flex flex-col justify-center items-center bg-[#FFF7ED]'>
      {vans ? (
        <div className='flex flex-col gap-5 sm:w-[500px] w-[90%]'>
        {vans.map((van) => (
          <Link to={`/host/vans/${van.id}`} className='m-2 bg-slate-50 '>
              <div className='p-2 flex flex-row gap-5 items-center'>
                <img src={van.imageUrl} alt="" width={100}className='mb-5 rounded-lg'/>
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold text-2xl'>{van.name}</h2>
                  <h2 className='text-sm'>${van.price}/day</h2>
                </div>
              </div>
          </Link>
        ))}
        </div>
      ) : <div className="loader"></div>}
    </div>
  )
}

export default HostVans