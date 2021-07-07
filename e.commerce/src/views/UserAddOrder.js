
import React from 'react'
import { addOrder } from '../store/actions/authActions'
import {useSelector,useDispatch} from 'react-redux'
import ShopCartInner from '../components/shopCart/ShopCartInner'

const UserAddOrder = () => {
    // const shoppingCart = useSelector(state => state.cartReducer.shoppingCart)

    // return (
    //     <div>
    //         <h1>Den funkar</h1>

    //         {
    //         shoppingCart.map(product =>(
    //            <ShopCartInner product={product} key={product._id} />

    //         ))
    //     }

    //     </div>
    // )



    const dispatch = useDispatch();
    const profile = useSelector(state => state.userReducer.profile)
    const shoppingCart = useSelector(state => state.cartReducer.shoppingCart)
    const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount)



    const onSub = (e) => {
        e.preventDefault();


            // console.log('hej',shoppingCart)
            // console.log(profile.email)
            dispatch(addOrder(shoppingCart, profile))
            console.log(profile);


    }



    return (

        <div className="container">
            
            {
            shoppingCart.map(product =>(
               <ShopCartInner product={product} key={product._id} />

            ))
        }
            <div className="d-flex justify-content-center">
                <button className="btn btn-info "   onClick={onSub}>buy</button>

            </div>
        </div>
    )





}

export default UserAddOrder
