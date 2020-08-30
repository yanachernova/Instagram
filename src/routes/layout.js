import React, {useState} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//Import views
import NoAuthRoats from './NoAuthRoats'
import AuthRoates from './AuthRoates'
import injectContext from '../store/appContext'





const Layout = props => {
  const [auth, setAuth] = useState(false)
    return (
        <BrowserRouter>
            <Switch>
                {
                    !auth ?

                        (
                            < Route path="/" component={()=><NoAuthRoats {...{auth, setAuth}}/>} />
                        )
                        :
                        (
                            <Route path="/" component={()=> <AuthRoates {...{auth, setAuth}}/>} />
                        )

                }

            </Switch>
        </BrowserRouter>
    )
}
export default injectContext(Layout);