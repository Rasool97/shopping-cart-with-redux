import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import {fetchProduct } from '../redux/product/productAction';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.product)
    const params = useParams();
    const id = params.id;
    
    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id])

    
    return (
        <section className='w-full min-h-[calc(100vh-8.5rem)] py-8 px-4 lg:px-12 flex items-center justify-center'>
            
            {state.loading && <Loading />}

            {state.error && !state.loading && <Redirect to='/notfound' />}
            
            {!state.loading && !state.error && (
                <div className="container h-auto bg-white border rounded-md grid grid-cols-1 md:grid-cols-9 py-6 px-4 gap-8">
                    <div className='aspect-[1/1.1] p-2 col-span-full md:col-span-3'>
                        <img src={state.product.image} className="h-full w-full" alt="productImage" />
                    </div>
                    <div className='flex flex-col gap-y-4 p-8 border-2 border-gray-200 rounded-md col-span-full md:col-span-6'>
                        <h2 className='text-lg md:text-2xl font-medium text-blue-600'>{state.product.title}</h2>
                        <p className='text-sm md:text-base text-gray-800 text-justify'>{state.product.description}</p>
                        <p className='flex gap-4 mb-10'>
                            <span className='text-base md:text-lg font-bold text-yellow-400'>Category:</span>
                            <span className='text-sm md:text-base bg-purple-500 text-white rounded-md px-1'>{state.product.category}</span>
                        </p>
                        <div className='flex justify-between items-center'>
                            <span className='bg-green-600 text-white text-xs sm:text-sm md:text-base py-2 px-3 rounded-md'>{state.product.price} $</span>
                            <Link className='btn font-medium sm:text-sm md:text-base'  to='/products'>Back to Shop</Link>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProductDetails;