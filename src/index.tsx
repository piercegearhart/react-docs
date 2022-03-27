import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import docRoutes from './routes'

import TopNav from './components/topNav'
import Spacer from './components/spacer'
import SideBar from './components/sidebar'

ReactDOM.render(
    <BrowserRouter>
        <main>
            <TopNav />
            <Spacer />
            <SideBar />
            <Routes>
                <Route path="/" element={<Navigate to="/introduction" replace />} />
                {docRoutes.map(route => (
                    <Route key={route.key} path={route.path} element={<route.element />} />
                ))}
            </Routes>
        </main>
    </BrowserRouter>,
    document.getElementById('root')
)