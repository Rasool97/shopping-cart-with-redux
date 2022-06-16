import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import {FiShoppingCart } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const state = useSelector(state => state.cart);

    const {pathname} = useLocation();

    const openMenuHandler = () => {
        setOpenMenu(prevState => !prevState);
    }

    useEffect(() => {
        setOpenMenu(false);

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }, [pathname])

    return (
        <nav className='w-full md:shadow-md flex flex-col z-10 relative top-0 left-0 right-0'>
            <div className='bg-white w-full py-2 px-3 md:border-b border-gray-200 flex justify-between md:justify-center items-center'>
                <div className='flex items-center justify-start md:justify-center'>
                    <Link to='/'>
                        <img src={logo} alt="logo" className='w-36 h-12 md:w-48 md:h-16' />
                    </Link>
                    <Link to='/cart' className='relative'>
                        <FiShoppingCart className="h-6 w-14 md:h-8 text-blue-600" />
                        <span className='absolute -top-1 right-1 bg-blue-800 text-white text-xs font-bold text-center rounded-full px-2'>{state.itemsCounter}</span>
                    </Link>
                </div>
                <div className='flex flex-col gap-y-2 cursor-pointer md:hidden' onClick={openMenuHandler}>
                    <div className={`w-10  h-[4px] sm:h-[5px] bg-blue-500 rounded-full transition-all duration-500 origin-middle ${openMenu ? 'rotate-45' : 'rotate-0'}`}></div>
                    <div className={`w-10  h-[4px] sm:h-[5px] bg-blue-500 rounded-full transition-all duration-500 origin-middle ${openMenu ? 'translate-x-96 opacity-0' : 'translate-x-0 opacity-100'}`}></div>
                    <div className={`w-10  h-[4px] sm:h-[5px] bg-blue-500 rounded-full transition-all duration-500 origin-middle ${openMenu ? '-rotate-45' : 'rotate-0'}`}></div>
                </div>
            </div>
            <div className='-z-10 h-0 md:h-auto'>
                <ul className='w-full bg-white py-3 list-none hidden md:flex justify-center items-center gap-x-8 '>
                    <li>
                        <NavLink  to='/' exact  className='text-gray-800 text-lg hover:text-blue-600 px-1'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/products'  className='text-gray-800 text-lg hover:text-blue-600 px-1'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/aboutus'  className='text-gray-800 text-lg hover:text-blue-600 px-1'>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contactus'  className='text-gray-800 text-lg hover:text-blue-600 px-1'>Contact Us</NavLink>
                    </li>
                </ul>
                <ul className={`list-none bg-white bg-opacity-80 py-4 flex flex-col items-center gap-y-6 md:hidden transition-all duration-700 ${openMenu ? 'translate-y-0' : '-translate-y-96'}`}>
                    <li>
                        <NavLink to='/' exact  className='text-gray-800 text-lg hover:text-blue-600 px-1'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/products'  className='text-gray-800 text-lg hover:text-blue-600 px-1'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/aboutus'  className='text-gray-800 text-lg hover:text-blue-600 px-1'>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contactus'  className='text-gray-800 text-lg hover:text-blue-600 px-1'>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;