import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const VanDetail = () => {
    const params = useParams();
    const [van, setVan] = useState(null);
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(response => response.json())
        .then(data => setVan(data.vans));
    }, [params.id]);
    console.log(van)

    return (
        <div className='text-gray-800 pt-24 px-10 bg-orange-100 max-w-[1300px] lg:h-screen'>
            <Link to={'/vans'} className='hover:underline flex items-center gap-2'>
                <ArrowLeft size={20}/><span className=''>Back to all vans</span>
            </Link>
            {van !== null ? (
                <div className='flex lg:flex-row flex-col gap-5 py-10'>
                    <img src={van.imageUrl} alt="" className='rounded-xl lg:w-1/2 lg:h-[450px]'/>
                    <div className='flex flex-col gap-5'>
                        <span className='bg-orange-200 py-2 px-4 rounded-lg flex justify-center'>
                            {van.type}
                        </span>
                        <h1 className='font-bold text-2xl md:text-3xl text-gray-800'>{van.name}</h1>
                        <p className='text-gray-600 text-lg md:text-xl'>{van.description}</p>
                        <span className='flex justify-center mt-4'>
                            <Button title={'Rent this van'}/>
                        </span>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center items-center h-full'>
                    <div class="loader"></div>
                </div>
            )}
        </div>
    );
}

export default VanDetail;