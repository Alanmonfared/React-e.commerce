import React from 'react'
import { Link } from 'react-router-dom'

export const ProductItem = ({product}) => {
    return (
            
    <div className="card mb-3 hover-shadow  " style={{maxWidth: "340px"}}>
        <div className="row g-0 ">
            <div className="col-md-4">
            <img src={product.image} alt="..."    className="img-fluid mt-4" />
            {/* <img src="../image/Breguet-logo-1024x768.png" alt="" width="300px "  /> */}

            </div>
            <div className="col-md-8 ">
              <div className="card-body ">
                <div className="mb-3">
                <h5 className="card-title"> {product.name} </h5>
                {/* <h4 className="card-text">{product.short}</h4> */}
                </div>
                
                
                <p> {product.desc.slice(0,50)}.... </p>
            
            
              </div>
                  
            </div>
        </div>
       
        <div className=" d-flex mt-auto justify-content-between ">
                <span className="text-danger d-flex   "> <p className="text-dark mx-2 ">Price:</p> { product.price } <p className="mx-1">SEK</p> </span>
                <Link className="btn btn-sm btn-outline-success mb-3 mt-auto hover shadow-1 "  to={`/products/${product._id}`}>Buy</Link>
        </div> {/* varför funkar det inte med props när man ska hämta id? */}
    </div>
        
    )
}

export default ProductItem