import React, { useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { myState } from "../../App";
import axios from "axios";

const Logout = () => {
  const { setUser } = useContext(myState);
    const history = useHistory()

    useEffect(()=>{
  
        axios
      .get("/logout")
      .then((res) => {
        if (res.data) {
          setUser(" ")
          history.replace("/");
        }
      })
      .catch((err) => console.log(err));
    },[history,setUser])


    return (
        <div>
            <h1>This is Logout page</h1>
        </div>
    )
}

export default Logout
