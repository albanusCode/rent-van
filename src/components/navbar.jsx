import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
};
const Menu2 = () => {
    return (
        <div className="flex fixed top-0 bg-slate-900 flex-col text-gray-400 z-10 w-full justify-center items-center h-40 sidebar">
            <ul className='flex gap-10'>
                <li>
                    <NavLink to="/" className='hover:text-gray-100' style={({ isActive }) => isActive ? activeStyle : undefined} end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/host" className='hover:text-gray-100' style={({ isActive }) => isActive ? activeStyle : undefined}>Host</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className='hover:text-gray-100' style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/vans" className='hover:text-gray-100' style={({ isActive }) => isActive ? activeStyle : undefined}>Vans</NavLink>
                </li>
            </ul>
        </div>
    );
};

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const location = useLocation();

    return (
        <div className='relative w-full'>
            <nav className='absolute max-w-[1300px] mb-4 flex w-full justify-between sm:px-20 px-10 items-center z-10 h-16 top-0'>
                <Link to='/' className='text-white font-bold bg-'>
                    <img src={logo} alt="" className='w-[32px]'/>
                    <h2 className={`${location.pathname === '/' ? 'text-gray-300 font-semibold' : 'font-normal text-black'}`}>Rentvans</h2>
                </Link>
                <div className={`font-semibold sm:flex flex-1 justify-end gap-10 mr-10 items-center hidden ${location.pathname === '/' ? 'text-white' : 'text-black'}`}>
                    <NavLink to='/host' className="hover:underline" style={({ isActive }) => isActive ? activeStyle : undefined} end>Host</NavLink>
                    <NavLink to='/about' className="hover:underline" style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink>
                    <NavLink to='/vans' className="hover:underline" style={({ isActive }) => isActive ? activeStyle : undefined}>Vans</NavLink>
                </div>
                <div className='text-white flex flex-1 justify-end gap-10 items-center sm:hidden'>
                    <span className='bg-gray-800 rounded-lg p-2'>
                        <Menu onClick={() => setToggle(prev => !prev)} />
                    </span>
                </div>
            </nav>
            <div>
                {toggle && (
                    <>
                        <Menu2 />
                        <span className='fixed z-50 flex justify-center pt-7 items-center right-6 text-gray-400 hover:text-white' onClick={() => setToggle(prev => !prev)}>
                            <X size={30}/>
                        </span>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;