import React from 'react'
import Layout from './layout/index'
import Cookies from 'js-cookie'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

const Login = (props: any): JSX.Element => {
    const handleClick = (e: React.MouseEvent) => {
        // console.log(e)
        Cookies.set('token', 'whosyourdaddy')
        props.history.push('/')
    }
    console.log(props)
    return (
        <div>
            <p>login</p>
            <button onClick={handleClick}>登录</button>
        </div>
    )
}

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
