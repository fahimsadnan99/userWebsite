import React, {  useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios"
import {useHistory} from "react-router-dom"


const Signup = () => {
  const history = useHistory()

    const [user,setUser] = useState({
        name : "",
        email : "",
        password : ""
    })


    const handleChange = (e)=>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!user.name || !user.email || !user.password){
            window.alert("Please Fill All Field")
        }else{

         
             axios.post("/signup",{...user})
            .then((res)=>{ if(res.data.data){
              window.alert("User Registation Successful")
              history.replace("/signin")
            }})
            .catch((err)=> console.log(err))
         
          
            setUser({
                name : "",
                email : "",
                password : ""
            })
        }
       
    }

  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-6 offset-3">
          <h1 className="my-2">Sign Up </h1>
          <Link to="/signin" style={{fontSize : "20px"}}>Already Have an account? Go to SingIn.. </Link>
          <div className="my-2">
            <form onSubmit={handleSubmit}>

            <div className="form-group">
               
                <input
                  type="name"
                  name="name"
                  value={user.name}
                  className="form-control"
                  placeholder="Enter Name"
                  onChange={handleChange}
                />
            
              </div>



              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  className="form-control"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
