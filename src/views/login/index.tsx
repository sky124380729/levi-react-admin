import React from 'react'
import Cookies from 'js-cookie'
import './index.scss'

const Login = (props: any): JSX.Element => {
    const handleClick = (e: React.MouseEvent) => {
        Cookies.set('token', 'whosyourdaddy')
        props.history.push('/')
    }
    return (
        <div className='login-box'>
            <h2>Login</h2>
            <form autoComplete='off'>
                <div className='user-box'>
                    <input type='text' autoComplete='off' />
                    <label>Username</label>
                </div>
                <div className='user-box'>
                    <input type='password' autoComplete='off' />
                    <label>Password</label>
                </div>
                <a href='#' onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </div>
    )
}

export default Login
