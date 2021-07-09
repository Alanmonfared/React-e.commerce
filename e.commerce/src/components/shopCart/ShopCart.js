import React from 'react'
import  { useSelector} from 'react-redux'
// import userAddOrder from '../../views/userAddOrder'
import ShopCartInner from './ShopCartInner'
import {  Link } from 'react-router-dom';


const ShopCart = () => {

    const shoppingCart = useSelector(state => state.cartReducer.shoppingCart)
    const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount)

   
   
   const empty = (
       <div className="p-2 d-flex justify-conten-center align-items-center">
           {/* din cart är tomt */}
       </div>
   )
   
   
    return (
    <div>
        {
            shoppingCart.map(product =>(
               <ShopCartInner product={product} key={product._id} />

            ))
        }

        {
            !ShopCart.length && empty
        }
       
        <div className="dropdown-menu"></div>
       
        <div className="p-2 d-flex justify-content-between align-items-center">
            <div>
                <div>
                    Total Amount: <span> {totalCartAmount} SEK </span>
                </div>
               
            </div>
            {/* <button className="btn btn-success" >Checkout</button> */}
            <Link className="btn btn-sm btn-outline-success mb-3 mt-auto hover shadow-1 "  to={'/userAddOrder'}>Checkout</Link>

        </div>

            
    </div>
    )
}

export default ShopCart
