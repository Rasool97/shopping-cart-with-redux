import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart';
import {checkoutCart, clearCart} from '../redux/cart/cartAction'


const ShopCart = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.cart);

    const onClear = () => {
        dispatch(clearCart());
    }

    const onCheckout = () => {
        dispatch(checkoutCart());
    }

    return (
        <section className='container px-4 md:px-16 py-6 md:py-10 grid grid-cols-1 lg:grid-cols-9 gap-8'>
            {/* Carts */}
            <div className='w-full flex flex-col gap-4 order-2 lg:order-1 lg:col-span-6'>
                {!!state.selectedItems.length && state.selectedItems.map(item => (
                    <Cart key={item.id} data={item} />
                ))}
            </div>

             {/* Info */}
             {state.selectedItems.length > 0 && (
                <div className=' h-52 bg-white p-8 flex flex-col justify-center gap-y-4 border border-gray-200 rounded-md order-1 lg:order-2 lg:col-span-3'>
                    <h3>
                        <span className='text-blue-600 text-base md:text-lg font-medium'>
                            Total items: {" "}
                        </span>
                        <span className='text-gray-900'>
                            {state.itemsCounter}
                        </span>
                    </h3>
                    <h3>
                        <span className='text-blue-600 text-base md:text-lg font-medium'>
                            Total payments: {" "}
                        </span>
                        <span className='text-gray-900'>
                            {state.total} $
                        </span>
                    </h3>
                    <div className='flex justify-between items-center'>
                        <button onClick={onClear} className='text-green-600 text-lg font-medium'>Clear</button>
                        <button onClick={onCheckout} className='bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700'>Checkout</button>
                    </div>
                </div>
            )}

            {/* Nothing cart */}
            {state.selectedItems.length === 0 && !state.checkout && (
                <div className='flex flex-col gap-y-10 items-center justify-center col-span-full'>
                    <p className='text-xl font-bold text-emerald-700'>Want to buy?</p>
                    <Link className='bg-blue-600 text-white px-3 py-1 rounded-md' to='/products'>Go to shop</Link>
                </div>
            )}

            {/* Checkout */}
            {state.checkout && (
                <div className='flex flex-col gap-y-10 items-center justify-center col-span-full'>
                    <p className='text-xl font-bold text-emerald-700'>Checked out successfully</p>
                    <Link className='bg-blue-600 text-white px-3 py-1 rounded-md' to='/products'>Buy more</Link>
                </div>
            )}
        </section>
    )
}

export default ShopCart;
