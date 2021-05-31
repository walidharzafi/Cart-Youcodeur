import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/layout/Header'
import Home from '../components/Home'
import Register from '../components/Register'
import Login from '../components/Login'
// import ProfilUser from '../components/ProfilUser'
import { PrintCarts } from '../components/PrintCarts'
import Dashboard from '../components/Dashboard'
import Logout from '../components/Logout'
import {SuperAdminRoute, AdminRoute, UserRoute, IsAuthenticate } from './ProtectedRoutes'
import { UserContext } from '../Context/ContextUser'

const Routes = () => {
    const {authe : {isAuth , role}} = useContext( UserContext )
    return (
        <Router>
            <>
                <Header />
                <div className="bg-cover bg-Img" >
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <IsAuthenticate exact path="/login" isAuth={isAuth} role={role} component={Login} />
                    <Route exact path="/logout"  component={Logout} />
                    <UserRoute exact path="/profil" isAuth={isAuth} role={role} component={PrintCarts} />
                    <SuperAdminRoute exact path="/dashboard" isAuth={isAuth} role={role} component={Dashboard} />
                    <AdminRoute exact path="/dashboard" isAuth={isAuth} role={role} component={Dashboard} />
                    </Switch>
                </div>
            </>
        </Router>
    )
}

export default Routes
