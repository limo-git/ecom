import '../styles/Cart.css'
import { useState } from 'react';


function Cart({cartItems}) {
    
    
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    return (
     <div className='cart'>
        <div className='cartHead'><h1>Cart</h1></div>
        <div className='cartFlex'> 
        
            <div className='nameHead'>
                <h2>Name</h2>
                <ul className='nameList'>
                {cartItems.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
              </li>
            ))}
                </ul>
                
            </div>
            <div className='priceList'>
                <h2>Price</h2>
                <ul className='priceList'>
            {cartItems.map((item, index) => (
              <li key={index}>
                <span>Rs {item.price}</span>
              </li>
            ))}
          </ul>
            </div>
        </div>
        <div className='total'>
         <div>   <h2>Total</h2> </div>
            <div>{totalAmount}</div>
        </div>
        </div>
);
}

export default Cart