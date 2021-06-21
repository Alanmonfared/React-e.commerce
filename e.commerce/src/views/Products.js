import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductCatalog } from '../store/actions/productCatalogActions';
import { ProductItem } from '../components/products/ProductItem';

const Products = () => {
   
    const dispatch = useDispatch();

    const productCatalog =  useSelector(state => state.productCatalog);
                                         
    useEffect(() => {
        dispatch(getProductCatalog());
    }, [dispatch])

   
    return (
        <div className="row mb-3 d-flex justify-content-center align-content-center mt-5 gap-3"    >
          
          {
              productCatalog.map(product => (

                <ProductItem product={product} key={product._id} />
               
              ))
           
           
          }
              
        </div>
    )
}

export default Products
