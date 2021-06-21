import actiontypes from '../actiontypes';


export const addToCart = product => {
    return {
        type: actiontypes().cart.add,
        payload: product
    }
}


export const deleteInner = id => {
    return {
        type: actiontypes().cart.sub,
        payload: id
    }
}


export const deleteInnerProduct = id => {
    return {
        type: actiontypes().cart.delete,
        payload: id
    }
}