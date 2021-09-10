import axios from "axios";
import React, { useContext, useState } from "react";
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";
import { myState } from "../../App";

const Signin = () => {
  const history = useHistory()
  const {setUser} = useContext(myState)

    const [newUser,setNewUser] = useState({
        email : "",
        password : ""
    })


    const handleChange = (e)=>{
      setNewUser({
            ...newUser,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(!newUser.email || !newUser.password){
            window.alert("Please Fill All Field")
        }else{
          axios.post("/signin",{...newUser})
            .then((res)=>{ if(res.data.data){
              window.alert("Login Successful")
              setUser(newUser)
              history.replace("/")

            }})
          
            .catch((err)=> console.log(err))
            setUser({
                email : "",
                password : ""
            })
        }
       
    }

  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-6 offset-3">
          <h1 className="my-2">Sign In </h1>
          <Link to="/signup" style={{fontSize : "20px"}}>Create An Account? Go to Singup.. </Link>
          <div className="my-2">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
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
                  value={newUser.password}
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

export default Signin;
