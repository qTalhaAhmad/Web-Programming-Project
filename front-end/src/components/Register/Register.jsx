import React,{useState} from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
export default function Register() {
const navigate=  useNavigate();
const gotoRegister =() =>navigate("/user/Register");
  const [register, setRegister] = useState("Register");
  return (
    
      
            <div className="card" style={{ width:"40%",margin:"auto"}}>
              <div className="card-header px-lg-5">
                <h3 style={{paddingTop:12,fontWeight:600}} className="card-heading text-primary">Customer Registation</h3>
              </div>
              <div className="card-body p-lg-5">
                

                <form action="index.html">
                  <div className="form-floating mb-3">
                    <input className="form-control" id="username" type="email" placeholder="name@example.com" required />
                    <label for="username">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="floatingInput" type="email" placeholder="name@example.com" required />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="floatingPassword" type="password" placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" name="agree" id="agree" />
                    <label className="form-check-label" for="agree">I agree with the <a href="#">Terms & Conditions</a>.</label>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary" id="regidter" type="button" name="registerSubmit">Register</button>
                  </div>
                </form>
              </div>
              <div className="card-footer px-lg-5 py-lg-4">
                <div className="text-sm text-muted">Already have an account? <Link to="/user/login">login</Link>.</div>
              </div>
            </div>
          
         
        
      
  )
}
