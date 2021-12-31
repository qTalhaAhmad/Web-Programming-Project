import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
export default function Login() {
    const navigate=  useNavigate();
const gotoRegister =() =>navigate("/user/Register");
    return (
        <div>
    
          
            <div className="card" style={{width:"40%",margin:"auto"}}>
              <div className="card-header px-lg-5">
                <h3 style={{paddingTop:12,fontWeight:600}} className="card-heading text-primary">Login</h3>
              </div>
              <div className="card-body p-lg-5">
                <h3 className="mb-4">Hi, welcome back! 👋👋</h3>
               
                <form id="loginForm" action="index.html">
                  <div className="form-floating mb-3">
                    <input className="form-control" id="floatingInput" type="email" placeholder="name@example.com" required />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="floatingPassword" type="password" placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                    <label className="form-check-label" for="remember">Remember me</label>
                  </div>
                  <button className="btn btn-primary" type="button">Submit</button>
                </form>
              </div>
              <div className="card-footer px-lg-5 py-lg-4">
                <div className="text-sm text-muted">Don't have an account? <Link to="/user/Register">Register</Link>.</div>
              </div>
            </div>
          </div>
        
    )
}
