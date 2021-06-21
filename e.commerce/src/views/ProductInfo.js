import { useEffect  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams} from 'react-router-dom'
import  ProductItemInfo from '../components/products/ProductItemInfo'
import { getProductById, getProductCatalog } from '../store/actions/productCatalogActions'

const ProductInfo = () => {

  const dispatch = useDispatch();
  const id = useParams().id

  useEffect(() => {
      dispatch(getProductById(id))
  },[dispatch,id])

  const product = useSelector(state => state.product.product )

    return (
        <div className="d-flex justify-content-center align-content-center mt-5">
              
          {
             
            <div >

              { product &&  <ProductItemInfo product={product}  />}
            </div>
               
           
           
           
          }
              
        </div>
    )
}

export default ProductInfo
