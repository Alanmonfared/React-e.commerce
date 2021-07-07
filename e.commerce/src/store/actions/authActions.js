import React from 'react';
import axios from 'axios'
import actiontypes from '../actiontypes';
// import { useHistory } from 'react-router-dom'
// import jwt from 'jsonwebtoken'

export  const register = (_user,history ) => {
   
   return async dispatch => {
      const res =  await axios.post('http://localhost:9999/api/users/register', _user)

      console.log(res)
      dispatch(login(_user,history))
      
      
   }
}

export  const login = (_user, history) => {
   return async  dispatch => {
   const res  = axios.post('http://localhost:9999/api/users/login', _user)
       .then(res => {

        dispatch(setProfile(res.data.user))
        console.log(res.data.user)
        
       })
    //    history.push('/products')

       .catch(err => {
         //   dispatch(err.message);
           console.log(err)
       })
   }
}



export const addOrder = (order,  profile) => {
   console.log(order);
   
   return async dispatch => {
       const res = await axios.patch(`http://localhost:9999/api/users/addorder/${profile.email}`,order)
       console.log(res)
       
    
    //   {headers: { Authorization: "Bearer " + profile.token }}

        //   .then(res => {
        //       console.log(res)

        //   }) 
         //   {headers: { Authorization: "Bearer " + user.token }}
       
       
    //    dispatch(updateProfileUser(_user))
    //    console.log(order);
   }
}


// export const updateProfileUser = _user => {
//    return async dispatch => {
//        const res = await axios.get( `http://localhost:9999/api/users/${_user._id}`,
          
//            {
//                headers: {  Authorization: "Bearer " + _user.token}
                 
               
//            }
//        )
//        dispatch(setProfile(res.data.user))
//        console.log(res.data.user);
//    }
// }


export const setProfile = _user => {
  
  return {
    type: actiontypes().user.login,
    payload: _user,
 
 
}
}












