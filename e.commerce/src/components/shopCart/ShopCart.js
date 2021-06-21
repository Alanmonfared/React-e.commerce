import React from 'react'
import  { useSelector} from 'react-redux'
import ShopCartInner from './ShopCartInner'

const ShopCart = () => {

    const shoppingCart = useSelector(state => state.cartReducer.shoppingCart)
    const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount)

   
   
   const empty = (
       <div className="p-2 d-flex justify-conten-center align-items-center">
           din cart är tomt
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
                    Total Amount: <span> {totalCartAmount} </span>
                </div>
                <small className="text-muted">inkl tax</small>
            </div>
            <button className="btn btn-success ">Checkout</button>
        </div>

            
    </div>
    )
}

export default ShopCart
