import React, { useContext } from 'react'
import { Route , Redirect} from 'react-router-dom'
import {myState} from "../../App"


const PrivatRoute = ({ children, ...rest }) => {
    const {user }= useContext(myState);
 
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user !== undefined ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
    )
}

export default PrivatRoute
