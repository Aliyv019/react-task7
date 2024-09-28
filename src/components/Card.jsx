import React, { useState } from 'react'
import { addItem } from '../redux/store'
import { useDispatch } from 'react-redux'

export default function Card({item}) {
    const [isInBasket,setIsInBasket]=useState(false)
    const dispatch=useDispatch()
    const handleAddtoCart=()=>{
        if(isInBasket) return
        setIsInBasket(true)
        dispatch(addItem(item))
    }
    return (
        <li className=' flex flex-col items-center p-2 border-2 rounded-md'>
            <img className=' w-36 h-36' src={item.img} alt="" />
            <div>
                <h2>{item.name}</h2>
                <p>{item.price}$</p>
                <button onClick={handleAddtoCart} className=' bg-blue-400 p-2 rounded'>{isInBasket?"Item is in basket":"Add to Cart"}</button>
            </div>
        </li>
    )
}
