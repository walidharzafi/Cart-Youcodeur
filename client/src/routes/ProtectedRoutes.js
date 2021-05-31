import React from 'react'
import {Redirect, Route } from 'react-router-dom'

const SuperAdminRoute = ({component:Component,isAuth,role,...rest})=>(
    <Route
     {...rest}
     render={() => ( 
         (isAuth && role === 'Super Admin' ) 
         ? <Component/> : <Redirect to="/login" /> 
    )}
/>
)

const AdminRoute = ({ component:Component, isAuth, role, ...rest}) => {
    return (
        <Route
        {...rest}
        render={() => ( 
            (isAuth && role === 'Admin')  
            ? <Component/> : <Redirect to="/login" />  
        )}
        />
    )
}


const UserRoute = ({component:Component,isAuth,role,...rest})=>(
    <Route
     {...rest}
    render={() => ( 
         (isAuth && role === 'User' ) 
         ? <Component/> : <Redirect to="/login" />  
    )}
/>
)

const IsAuthenticate = ({component:Component,role,isAuth,...rest})=> (
    <Route
        {...rest}
        render={() => (
            !isAuth ? <Component/> 
                    : ( role === "Super Admin" || role === "Admin"
                    ? <Redirect to="/dashboard" />  
                    : <Redirect to="/profil" /> )
            
        
        )}
    />
)


export {SuperAdminRoute, AdminRoute, UserRoute, IsAuthenticate }