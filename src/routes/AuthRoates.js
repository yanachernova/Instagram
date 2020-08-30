import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Main from '../views/Main'

const AuthRoates = ({ setAuth}) => {

    return (
        <Switch>
            <Route exact path='/main' component={<Main setAuth={setAuth}/>} />
            <Redirect to='/main' />
        </Switch>
    )
}

export default AuthRoates
