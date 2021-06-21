import React from 'react'
import Link from 'react-router-dom'

const Cart = ({product}) => {
    return (
        <div>
            <div className="card col-3">
                <img src={product.image} alt="" />
                <p> {product.name} </p>
                <p> {product.desc} </p>
                <p> {product.short} </p>
            <Link className="btn btn-grad" >ADD TO CART</Link>
            </div>
            
        </div>
    )
}

export default Cart
