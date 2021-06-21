import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, deleteInner, deleteInnerProduct } from '../../store/actions/cartActions'

const ShopCartInner = ({product}) => {

    const dispatch = useDispatch();

    const addInner = e => {
        e.stopPropagation()
        dispatch(addToCart(product))
    }


    const removeInner = e => {
        e.stopPropagation()
        dispatch(deleteInner(product._id))
    }
    const deleteProduct = e => {
        e.stopPropagation()
        dispatch(deleteInnerProduct(product._id))
    }


    return (
        <div>
            <div className="p-2 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={product.image} alt="product" className="img-fluid image-width" />
                    <div>
                        <div><strong> {product.name} </strong></div>
                        <div><small> {product.quantity} * {product.price} </small></div>
                    </div>
                </div>
            
                <div className="d-flex ">
                    <button className="btn btn-sm   btn-outline-dark" onClick={addInner} >+</button>
                    <button className="btn btn-sm  btn btn-outline-dark mx-2" onClick={removeInner}>-</button>
                    <button className="btn btn-sm  btn-danger hover" onClick={deleteProduct}>X</button>
                </div>
            </div>            
        </div>
    )
}

export default ShopCartInner
