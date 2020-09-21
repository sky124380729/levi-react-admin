import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Test = () => (
    <div>
        <p>测试路由跳转</p>
        <li>
            <Link to='/login'>登录</Link>
        </li>
    </div>
)

export default Test
