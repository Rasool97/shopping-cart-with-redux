import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Shop from '../assets/icons/Shop';

const Navbar = () => {
    const state = useSelector(state => state.cart);

    return (
        <nav className='bg-white w-full shadow-md fixed top-0 left-0 right-0'>
           <div className='container flex justify-between items-center px-4 md:px-16 py-4'>
               <Link to='/products' className='text-blue-600 text-md font-bold px-1 border-b-[3px] border-blue-600'>Products</Link>
               <Link to='/cart' className='relative'>
                   <Shop />
                   <span className='absolute top-0 right-0 bg-blue-800 text-white text-xs text-center font-medium rounded-full px-1'>{state.itemsCounter}</span>
               </Link>
            </div> 
        </nav>
    );
};

export default Navbar;