import { Route,Redirect } from "react-router-dom"
import { useSelector} from "react-redux"


export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const loggedIn = useSelector((state) => state.userReducer.loggedIn);
    const profile = useSelector((state) => state.userReducer.profile);
    

  
  
    return (
      <Route
        {...rest}
        render={ props => {
          if (loggedIn.isAuthenticated()) {
            return <Component {...props} profile={profile} loggedIn={loggedIn}/>;
          } else {
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location }}}
              />
            );
          }
        }}
      />
    );
  };


  export default ProtectedRoute;
