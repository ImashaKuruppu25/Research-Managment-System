import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Customers from './pages/Team'
import LoginSignUp from './pages/LoginSignUp'


const App = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/teams' component={Customers}/>
            <Route path='/login' component={LoginSignUp}/>
        </Switch>
    )
}

export default App
