import React from 'react'

import { Route, Switch } from 'react-router-dom'

//import Dashboard from './pages/Dashboard'
import Team from './pages/TeamGroup/Team'
import LoginSignUp from './pages/LoginSignUp/LoginSignUp'


const App = () => {
    return (
        <Switch>
            {/* <Route path='/' exact component={Dashboard}/> */}
            <Route path='/teams' component={Team}/>
            <Route path='/login' component={LoginSignUp}/>
        </Switch>
    )
}

export default App
