import actiontypes from "../actiontypes";

const initState = {
  profile: {},
  loggedIn: false,
}

const userReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().user.login:
      return {
        
        profile: action.payload,
        

        loggedIn:true
      
      }



    default:
      return state
  }
}

export default userReducer;