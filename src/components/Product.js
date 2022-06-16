import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { quantityCount, shorten, sumItems } from '../helpers/functions';

// Icons
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

// Actions
import {addItem, removeItem, increase, decrease} from '../redux/cart/cartAction'

const Product = ({data}) => {
    const {title, price, image, id} = data;
    const dispatch = useDispatch();
    const state = useSelector(state => state.cart);

    const addItemHandler = () => {
        const selectedItems = [...state.selectedItems];

        if(!state.selectedItems.find(product => product.id === data.id)) {
            selectedItems.push({
                ...data,
                quantity: 1
            });
    
            dispatch(addItem({
                selectedItems,
                ...sumItems(selectedItems)
            }))
        }    
    }

    const removeItemHandler = () => {
        let selectedItems = [...state.selectedItems];
        selectedItems = selectedItems.filter(product => product.id !== id);

        dispatch(removeItem({
            selectedItems,
            ...sumItems(selectedItems)
        }))
    }

    const increaseHandler = () => {
        const selectedItems = [...state.selectedItems];
        const itemIndex = selectedItems.findIndex(product => product.id === id);
        selectedItems[itemIndex].quantity++;
        
        
        dispatch(increase({
            selectedItems,
            ...sumItems(selectedItems)
        }))
    }

    const decreaseHandler = () => {
        const selectedItems = [...state.selectedItems];
        const itemIndex = selectedItems.findIndex(product => product.id === id);
        selectedItems[itemIndex].quantity--;
        
        dispatch(decrease({
            selectedItems,
            ...sumItems(selectedItems)
        }))
    }

    return (
        <div className='bg-white border border-gray-300 rounded-xl overflow-hidden transition-shadow hover:shadow-lg p-4'>
            <div className='aspect-square mb-4'>
                <img src={image} alt="product" className='w-full h-full' />
            </div>
            <div>
                <h3 className='text-lg font-medium py-2'>{shorten(title)}</h3>
                <span className='text-sm font-medium'>{price} $</span>
            </div>
            <div className='pt-4 flex items-center justify-between'>
                <Link className='text-blue-600 text-base' to={`/products/${id}`}>Details</Link>

                <div className='flex justify-between gap-x-2 items-center'>
                    {/* Add to cart btn */}
                    {quantityCount(state.selectedItems, id) < 1 && (
                    <button onClick={addItemHandler} className='btn font-medium'>
                        Add to Cart
                    </button>)}
                    
                    {/* Trash btn */}
                    {quantityCount(state.selectedItems, id) === 1 && (
                        <button onClick={removeItemHandler} className='bg-blue-600 text-white w-8 h-8 p-1 flex justify-center items-center rounded-md transition-colors hover:bg-blue-800'>
                            <FaTrash />
                        </button>
                    )}

                    {/* Decrease btn */}
                    {quantityCount(state.selectedItems, id) > 1 && (
                    <button onClick={decreaseHandler} className='bg-blue-600 text-white w-8 h-8 flex justify-center items-center rounded-md transition-colors hover:bg-blue-800'>
                        <FaMinus />
                    </button>)}

                    {/* Count product */}
                    {quantityCount(state.selectedItems, id) > 0 && (
                        <span className='text-lg font-bold text-blue-600'>
                            {quantityCount(state.selectedItems, id)}
                        </span>
                    )}

                    {/* Increase btn */}
                    {quantityCount(state.selectedItems, id) > 0 && (
                    <button onClick={increaseHandler} className='bg-blue-600 text-white w-8 h-8 flex justify-center items-center rounded-md transition-colors hover:bg-blue-800'>
                        <FaPlus />
                    </button>)}
                </div>
            </div>
        </div>   
    );
};

export default Product;