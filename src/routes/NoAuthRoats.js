import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../views/Home'



const NoAuthRoats = ({setAuth}) => {
    return (
        <Switch>
        <Route exact path='/' component={()=><Home setAuth={setAuth}/>} />
        <Redirect to='/' />
    </Switch>
    )
}

export default NoAuthRoats