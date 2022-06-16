import { Link } from 'react-router-dom';
import ShowCase from '../assets/images/showCase.jpg';

const Header = () => {
    return (
        <section className='w-full h-[calc(100vh-4.5rem)] md:h-[calc(100vh+1rem)] bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: `url(${ShowCase})` }}>
            <div className='bg-gray-50 bg-opacity-70 text-gray-800 text-justify rounded-md p-4 flex flex-col gap-y-4 absolute w-3/4 md:w-3/5 lg:w-2/5 top-1/2 left-1/2 -translate-y-3/4 -translate-x-1/2 lg:-translate-x-3/4'>
                <h2 className='text-2xl font-medium border-b-4 border-blue-600 self-start pb-1 pr-2'>Online Shop</h2>
                <p className='text-base text-left'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum ex expedita laborum obcaecati repudiandae!
                </p>
                <p className='text-base text-left hidden sm:block'>
                Ad libero magnam ratione repellendus voluptatum! Adipisci eligendi enim, fugit laudantium magnam modi sapiente voluptatum.
                </p>
                <Link to='/products' className='btn self-start font-medium'>ORDER NOW!</Link>
            </div>
        </section>
    );
};

export default Header;