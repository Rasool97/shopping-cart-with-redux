import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeaturedItems from '../components/FeaturedItems';
import Header from '../components/Header';
import { fetchProducts } from '../redux/products/productsAction';

const HomePage = () => {
    const [topItems, setTopItems] = useState(null);
    const dispatch = useDispatch();
    const state = useSelector(state => state.products);

    useEffect(() => {
        if(!state.products.length) {
            dispatch(fetchProducts());
        }

        if(!topItems && state.products) {
            const topRating = state.products.length > 0 ? state.products.filter(product => product.rating.rate > 4) : null;
            setTopItems(topRating);
        }
        
    }, [dispatch, state.products, topItems])

    return (
        <>
            <Header />
            <FeaturedItems topItems={topItems} />
        </>
    );
};

export default HomePage;