import React, { useState, useEffect } from 'react';
import HostVanDetailLayout from '../../components/HostVanDetailLayout';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const HostVanDetail = () => {
    const params = useParams();
    const [van, setVan] = useState(null);
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(response => response.json())
        .then(data => setVan(data.vans));
    }, [params.id]);

    console.log(van);
    return (
        <div className='text-gray-800 sm:px-20 px-8 bg-orange-50 max-w-[1300px]'>
            <Link to={'/host/vans/'} className='hover:underline flex items-center gap-2'>
                <ArrowLeft size={20}/><span className=''>Back to all vans</span>
            </Link>
            {van !== null ? (
                <>
                    <div className='flex lg:flex-row justify-center items-center flex-row sm:gap-20 gap-5 py-10'>
                        <img src={van.imageUrl} alt="" className='rounded-xl sm:w-[200px] w-[120px] sm:h-[200px]'/>
                        <div className='flex flex-col gap-2 sm:gap-8'>
                            <span className='bg-orange-200 rounded-sm'>
                                <h3 className='px-2'>{van.type}</h3>
                            </span>
                            <h1 className='font-bold text-lg md:text-xl text-gray-800'>{van.name}</h1>
                            <p className='text-gray-600 text-lg md:text-xl'>${van.price}/day</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <HostVanDetailLayout/>
                    </div>
                </>
            ) : (
                <div className='flex justify-center items-center h-full'>
                    <div className="loader"></div>
                </div>
            )}
        </div>
    );
}

export default HostVanDetail;
