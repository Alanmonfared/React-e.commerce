import React from 'react'
// import { NavLink,Link } from 'react-router-dom'
import {useState} from 'react'
import { useDispatch} from 'react-redux'
import { register  } from '../../store/actions/authActions'



const Login = () => {

        const dispatch = useDispatch();

        const sub = (e) => {
            e.preventdefault()
            dispatch(register({
               firstName,
               lastName,
               email,
               password,
               admin: true     

            }))
        }



    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] =   useState('');
    const [email, setEmail] =         useState('');
    const [password, setPassword] =  useState('');


return (
<div className=" container d-flex justify-content-center align-content-center ">
    <div className="col-6 shadow p-5 mx-5">
     <ul className="nav nav-pills nav-justified mb-3 " id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
            <a className="nav-link active" id="tab-login"data-mdb-toggle="pill" href="/#pills-login"role="tab"
            aria-controls="pills-login"
            aria-selected="true" >Login</a>
           
            
        </li>
        <li className="nav-item" role="presentation">
            <a
            className="nav-link"
            id="tab-register"
            data-mdb-toggle="pill"
            href="/#pills-register"
            role="tab"
            aria-controls="pills-register"
            aria-selected="false">Register</a>
         
            
        </li>
        </ul>



        <div className="tab-content">
        <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
        >
            <form>
          

            
            <div className=" mb-4">
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" htmlFor="loginName">Email</label>
            </div>

            
            <div className=" mb-4">
                <input type="password" id="loginPassword" className="form-control" />
                <label className="form-label" htmlFor="loginPassword">Password</label>
            </div>

            
           

            
            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

            
            <div className="text-center">
                <p>Not a member? <a href="/#">Register</a></p>
            </div>
            </form>
        </div>
      
            {/* // ! register */}
        <div
            className="tab-pane fade"
            id="pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
        >
            <form onSubmit={sub}>
            
            <div className=" mb-1">
                <input type="text" id="registerName" className="form-control" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <label className="form-label" htmlFor="registerName">Name</label>
            </div>

            
            <div className=" mb-1">
                <input type="text" id="registerUsername" className="form-control" value={lastName} onChange={e => setLastName(e.target.value)} />
                <label className="form-label" htmlFor="registerUsername">Username</label>
            </div>

            
            <div className=" mb-1">
                <input type="email" id="registerEmail" className="form-control"  value={email} onChange={e => setEmail(e.target.value)}/>
                <label className="form-label" htmlFor="registerEmail">Email</label>
            </div>

            
            <div className=" mb-1">
                <input type="password" id="registerPassword" className="form-control"  value={password} onChange={e => setPassword(e.target.value)}/>
                <label className="form-label" htmlFor="registerPassword">Password</label>
            </div>

           

          <button  className="btn btn-primary btn-block mb-3">Sign in</button>
            </form>
        </div>
    </div>

     
     </div>   

        
            
</div>
    )
}

export default Login
