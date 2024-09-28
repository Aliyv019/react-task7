import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearBasket } from '../redux/store';

export default function Basket() {
    const basket = useSelector((state) => state.basket.items);
    const dispatch=useDispatch()
    const handleClearBasket = () => {
        dispatch(clearBasket())
    };
    const total = basket.reduce((acc, item) => {
        return acc + item.price;
    }, 0);

    return (
        <div>
            <h1>Basket</h1>
            <ul>
                {basket.map((item, index) => (
                    <li className=' flex items-center p-2 border-2 rounded-md'>
                    <img className=' w-36 h-36' src={item.img} alt="" />
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.price}$</p>
                    </div>
                    </li>
                ))}
            </ul>
            <div className='flex gap-2 justify-center' >
                <button className='bg-blue-400 p-5 rounded'>Total Price: {total}$</button>
                <button onClick={handleClearBasket} className='bg-blue-400 p-5 rounded'>Clear all</button>
            </div>
        </div>
    );
}