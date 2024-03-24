import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
  const params = useParams();
    const [van, setVan] = useState(null);
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(response => response.json())
        .then(data => setVan(data.vans));
    }, [params.id]);
  return (
    <div className='flex flex-col'>
        {van ? (
          <div className='flex flex-col gap-5'>
            <h3 className='font-bold text-gray-800'>Name: <span className='font-normal'>{van.name}</span></h3>
            <h3 className='font-bold text-gray-800'>Type: <span className='font-normal'>{van.type}</span></h3>
            <h3 className='font-bold text-gray-800'>Description: <span className='font-normal'>{van.description}</span></h3>
            <h3 className='font-bold text-gray-800'>Visibility: <span className='font-normal'>{van.visibility}</span></h3>
          </div>
        ): <div>Loading</div>}
    </div>
  )
}

export default Details