import React from 'react'
import Layout from './layout/index'
import { BrowserRouter as Router } from 'react-router-dom'

function App(): JSX.Element {
    return (
        <Router>
            <div className='App'>
                <Layout></Layout>
            </div>
        </Router>
    )
}

export default App
