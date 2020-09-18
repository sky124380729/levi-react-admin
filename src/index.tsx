import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css'
import './styles/index.scss'
import { ConfigProvider } from 'antd'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <ConfigProvider
        componentSize='middle'
        form={{
            validateMessages: {
                // eslint-disable-next-line no-template-curly-in-string
                required: '${label}是必需的'
            }
        }}
    >
        <App />
    </ConfigProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
