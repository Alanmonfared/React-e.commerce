import React from 'react'
// import { Link,NavLink } from 'react-router-dom'
import {  useDispatch} from 'react-redux'
import { addToCart } from '../../store/actions/cartActions'

const ProductItemInfo = ({product}) => {



    const dispatch = useDispatch();
    return (
        
        
    <div className=" mb-5 d-flex " style={{maxWidth: "840px"}}>
        <div className="row g-0 ">
            <div className="col-md-4">
                <img src={product.image} alt="..."    className="img-fluid" />
                <img src="../image/Breguet-logo-1024x768.png" alt="" width="300px "  />

            </div>
            <div className="col-md-8 ">
              <div className="card-body ">
                <h5 className="card-title"> {product.name} </h5>
                <p > {product.desc} </p>
                <p className="card-text">{product.short}</p>
               
                
                              
              </div>
            </div>
        </div>
        {/* <Link className="btn btn-grad mb-3 mt-auto"  to={`/products/${product._id}`}  >show</Link> */}
      <div className="mt-auto ">
      <span className="text-danger d-flex"> <p className="text-dark">Price:</p> { product.price } <p className="mx-2">SEK</p> </span>
                <button onClick={() => {dispatch(addToCart(product)) }} className="btn btn-outline-success ">ADD TO CART</button>
      </div>   {/* varför funkar det inte med props när man ska hämta id? */}

    </div>
    )
}

export default ProductItemInfo


