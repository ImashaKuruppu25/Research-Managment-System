import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Customers from './pages/Team'

const App = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/teams' component={Customers}/>
        </Switch>
    )
}

export default App
