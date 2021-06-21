import React from 'react';
import axios from 'axios'
import actiontypes from '../actiontypes';
import jwt from 'jsonwebtoken'

export  const register = (user) => {
   return dispatch => {
       dispatch(loading())
       axios.post('http://localhost:9999/register', user)
       .then(res => {
           console.log(res.data);
           dispatch(_success(res.data.accessToken))
            
       })
       .catch(err => {
           dispatch(err.message);
           console.log(err)
       })
   }
}



export const _success = (token) => {
      return dispatch => {
         const id = jwt.decode(token).sub;
         axios.get(`http://localhost:9999/users${id}`)
         .then(res => {
            dispatch(success({token, admin: res.data.admin}))
         })
      }
} 


export const success = ({token, admin}) => {
return {
  type: actiontypes().auth.success,
   payload: {token, admin}
  }

}


export const failure = error => {
   return {
      type: actiontypes().auth.failure,
      payload: error
   }
}


export const loading = () => {
   return {
      type: actiontypes().auth.loading,
   }
}