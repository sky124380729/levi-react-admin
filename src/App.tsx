import React from 'react'
import Layout from './layout/index'
import Login from './views/login'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

const App = (): JSX.Element => {
    return (
        <Router>
            <Switch>
                <Redirect path='/' exact to='/app'></Redirect>
                <Route path='/login' component={Login}></Route>
                <Route path='/app' component={Layout}></Route>
                <Route path='/404'>出错啦</Route>
                <Redirect to='/404' push></Redirect>
            </Switch>
        </Router>
    )
}

export default App
