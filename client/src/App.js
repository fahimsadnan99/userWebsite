import React, { createContext,  useState } from 'react'
import {Switch, Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Signin from "./components/Signin/Signin"
import Signup from "./components/Signup/Signup"
import UpdateProfile from "./components/About/updateProfile"
import PrivatRoute from './components/PrivatRoute/PrivatRoute'
import Logout from './components/Logout/Logout'


 
export const myState = createContext()

const App = () => {
    const [user, setUser] = useState();



  return (
    <>
    <myState.Provider value={{user, setUser}}>
<Navbar></Navbar>

 <Switch>

<Route exact path="/">
    <Home></Home>
</Route>


<PrivatRoute  path="/about">
    <About></About>
</PrivatRoute>


<Route path="/contact">
    <Contact></Contact>
</Route>


<Route path="/signin">
    <Signin></Signin>
</Route>



<Route  path="/signup">
    <Signup></Signup>
</Route>
<Route  path="/logout">
        <Logout></Logout>
</Route>
<Route  path="/updateProfile/:id">
    <UpdateProfile></UpdateProfile>
</Route>
 </Switch>
 </myState.Provider>
    </>
  )
}

export default App
