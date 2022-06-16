import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../components/Loading';
import Product from '../components/Product';
import { fetchProducts } from '../redux/products/productsAction';


const Products = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.products);
 
    useEffect(() => {
        if(!state.products.length) {
            dispatch(fetchProducts());
        }
        
    }, [dispatch, state.products])

    
    return (
        <> 
            {state.loading && (
                <div className='min-h-[calc(100vh-8rem)] w-full flex items-center justify-center'>
                    <Loading />
                </div>
            )}
            {!state.loading && (
                <div className='container py-6 md:py-12 px-4 lg:px-16'>
                    <h2 className='text-2xl font-medium border-b-4 border-blue-600 inline-block pb-1 pr-4 mb-6'>Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                        {state.products.map(product => (
                            <Product key={product.id} data={product} />
                        ))} 
                    </div>        
                </div>
            )}

        </>
    );
};

export default Products;