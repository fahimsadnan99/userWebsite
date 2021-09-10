import React, { useEffect, useState } from "react";
import "./About.css";
import axios from "axios";
import { useHistory } from "react-router-dom";


const About = () => {
  const [user, setUser] = useState();
const history = useHistory()
  const update = ()=>{
    const id = user._id
      history.push(`/updateProfile/${id}`)
  }

  console.log(user);

  const imgUrl =
    "https://image.freepik.com/free-vector/businessman-avatar-character_24877-18284.jpg";
    
  useEffect(() => {
   let token = document.cookie.split("=")[1].trim();
   if(token !== undefined){
    axios
      .get("/about", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => setUser(res.data.data))
      .catch((err) => console.log(err));
   }

  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            {!user || user.img === "" ? (
              <img className="card-img-top" src={imgUrl} alt="img" />
            ) : (
              <img className="card-img-top" src={user.img} alt="img" />
            )}

            {user && (
              <button
                className="btn btn-info ml-auto"
                style={{ width: "150px" }}
                onClick={update}
              >
                Update Profile
              </button>
            )}
            <div className="card-body">
              <h3 className="card-title">
                Name : {!user || user.name === "" ? "Not Define" : user.name}
              </h3>
              <h5>
                Email : {!user || user.email === "" ? "Not Define" : user.email}
              </h5>
              <h5>
                Age : {!user || user.age === "" ? "Not Define" : user.age}
              </h5>
              <h5>
                Study : {!user || user.study === "" ? "Not Define" : user.study}
              </h5>
              <h5>
                Live : {!user || user.live === "" ? "Not Define" : user.live}
              </h5>
              <h5>
                Blood : {!user || user.blood === "" ? "Not Define" : user.blood}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
