import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Shop from '../assets/icons/Shop';
import logo from '../assets/images/logo.ee82aaa88a630f7da4c9.png';

const Navbar = () => {
    const state = useSelector(state => state.cart);

    return (
        <div className='bg-white w-full shadow-md fixed top-0 left-0 right-0 flex flex-col items-center'>
            <div className='w-full flex gap-x-8 items-center justify-center py-4 border-b border-gray-200'>
                <div className='pb-4'>
                    <img src={logo} alt="logo" className='w-52 h-16' />
                </div>
                <Link to='/cart' className='relative'>
                    <Shop />
                    <span className='absolute top-0 right-0 bg-blue-800 text-white text-xs text-center font-medium rounded-full px-1'>{state.itemsCounter}</span>
                </Link>
            </div>
            <nav className='container flex justify-center items-center px-4 md:px-16 py-4'>
                <ul className='list-none flex gap-x-8'>
                   <li>
                        <NavLink to='/' exact  className='text-gray-800 text-lg hover:text-blue-600 px-1'>Home</NavLink>
                   </li>
                   <li>
                        <NavLink to='/products'  className='text-gray-800 text-lg hover:text-blue-600 px-1'>Products</NavLink>
                   </li>
                   <li>
                        <NavLink to='/contactus'  className='text-gray-800 text-lg hover:text-blue-600 px-1'>Contact Us</NavLink>
                   </li>
                   <li>
                        <NavLink to='/aboutus'  className='text-gray-800 text-lg hover:text-blue-600 px-1'>About Us</NavLink>
                   </li>
               </ul>

           </nav> 
        </div>
    );
};

export default Navbar;