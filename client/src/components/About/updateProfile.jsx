import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const UpdateProfile = () => {
    const [user,setUser] = useState()
    const [file,setFiles] = useState()

    const age = useRef("")
    const blood = useRef("")
    const live = useRef("")
    const study = useRef("")
 
   
   const hanldeSubmit = (e)=>{
       e.preventDefault()
       const token = document.cookie.split("=")[1]
        
       const formData = new FormData()
           
        formData.append("file" ,file)
    
       formData.append('age' , age.current.value)
       formData.append('blood', blood.current.value)
       formData.append('live', live.current.value)
       formData.append('study', study.current.value)
      
       axios.put('/update', formData,{
           headers : {
               Authorization : token
           }
       })
       .then((res)=> console.log(res.data))
       .catch((err)=> console.log(err))
   }
    
useEffect(()=>{
    const token = document.cookie.split("=")[1]
    axios.get('/update',{
        headers : {
            Authorization : token
        }
    })
    .then((res)=> setUser(res.data))
    .catch((err)=> console.log(err))
},[])

console.log(user);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <form className="my-5" onSubmit={hanldeSubmit}>
                     <h4>Set Your Image</h4>
                     <div className="form-group">
                        
   
    <input type="file" name="file"   onChange={(e)=> setFiles(e.target.files[0])} className="form-control-file" />
    <img src={file&&URL.createObjectURL(file) || user&&user.img }  alt="img" style={{width : "200px"}}></img>
  </div>


  <input type="text" value={user && user.age}  name="age" ref={age} className="form-control my-2" placeholder="Enter Age"/>
  <input type="text" value={user && user.blood}  name="blood" ref={blood} className="form-control my-2" placeholder="Enter Blood Group"/>
  <input type="text" value={user && user.live} name="live" ref={live} className="form-control my-2" placeholder="Where are You live?"/>
  <input type="text" value={user && user.study} name="Study" ref={study} className="form-control my-2" placeholder="Where Are You study"/>
  <input type="submit" value="Submit" className="btn btn-success"/>
  </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile
