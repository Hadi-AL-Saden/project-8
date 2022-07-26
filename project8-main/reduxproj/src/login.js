import React from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {emailORUsername,login, password} from "./actions";


function Login(){
    const dispatch=useDispatch();
    
    const errorLog=useSelector(state=>state.login);
    const Fun=(e)=>{
        e.preventDefault();
        dispatch(login());
    }

    return(
        <section className="vh-100">
  <div className="container-fluid h-custom ">
    <div className="row d-flex justify-content-center align-items-center h-100">
    
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={(e)=>Fun(e)}>
         
          <div className="divider d-flex align-items-center my-4">
            <h1 className="text-center fw-bold mx-3 mb-0 btn-info text-warning">Login</h1>
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example3">
              Email address
            </label>
            <input
              type="email"
              id="form3Example3"
              className="form-control form-control-lg  "
              placeholder="Enter a valid email address"
              onChange={(e)=>dispatch(emailORUsername(e.target.value))}
            />
          </div>
          {/* Password input */}
          <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form3Example4">
              Password
            </label>
            <input
              type="password"
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter password"
              onChange={(e)=>dispatch(password(e.target.value))}
            /> 
          </div>
          <div className="d-flex justify-content-between align-items-center">
            {/* Checkbox */}
            <div className="form-check mb-0">
              <input
                className="form-check-input me-2"
                type="checkbox"
                defaultValue=""
                id="form2Example3"
              />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>

          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <input
            defaultValue="Login"
              type="submit"
              className="btn btn-warning btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
            />
            
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?{" "}
              <a href="./reg" className="link-danger ">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="col-md-9 col-lg-6 col-xl-5 btn btn-warning"id='im'>
        <img
          src="https://www.vibrantacademy.com/entranceresult/img/login.png"
          className="img-fluid"
          alt="Sample image"
        />
      </div>
    </div>
  </div>
 
    
</section>

    )

}

export default Login;