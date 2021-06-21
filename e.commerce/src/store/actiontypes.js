const actiontypes = () => {
    return {
        productCatalog: {
            set: 'PRODUCT_CATALOG_SET'
        },
        product: {
            set: 'PRODUCT_SET',
            clear: 'PRODUCT_CLEAR'
        },
        cart: {
            add: 'ADD_TO_CART',
            sub: 'SUB_FROM_CART',
            delete: ' DELETE_FROM_CART',
            clear: 'CLEAR_CART'
        },
        auth: {
            loading: 'AUTH_LOAIDNG',
            success: 'AUTH_SUCCESS',
            failure: 'AUTH_FAILURE',
            logout:  'AUTH_LOGOUT'
        }
    }
    
}

export default actiontypes