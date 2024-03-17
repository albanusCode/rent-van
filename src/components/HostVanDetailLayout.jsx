import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom'

const HostVanDetailLayout = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  const params = useParams();
    const [van, setVan] = useState(null);
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(response => response.json())
        .then(data => setVan(data.vans));
    }, [params.id]);
  return (
    <>
    {van !== null ? (
        <div className='flex flex-col gap-10'>
          <nav className='flex px-4 gap-10 bg-[#FFF7ED] overflow-x-hidden max-w-[1300px] justify-center'>
            <NavLink
              to={`/host/vans/${van.id}`}
              end
              style={({ isActive }) => isActive ? activeStyle : undefined}
            >
              Details
            </NavLink>
            <NavLink
              to="/host/Income"
              style={({ isActive }) => isActive ? activeStyle : undefined}
            >
              Pricing
            </NavLink>
            <NavLink
              to="/host/vans"
              end
              style={({ isActive }) => isActive ? activeStyle : undefined}
            >
              Photos
            </NavLink>
          </nav>
          <div className='sm:px-0 px-4'>
          <Outlet/>
          </div>
        </div>
        
            ) : (
                <div className='flex justify-center items-center h-full'>
                    <div className="loader"></div>
                </div>
            )}
    </>
  )
}

export default HostVanDetailLayout