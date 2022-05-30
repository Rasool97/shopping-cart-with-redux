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
            {state.loading && <Loading />}
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-12 py-6 md:py-10 px-4 md:px-16'>
                {!state.loading && state.products.map(product => (
                    <Product key={product.id} data={product} />
                ))}         
            </div>
        </>
    );
};

export default Products;