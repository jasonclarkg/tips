import React from 'react'
import ReactRouter from 'react-router'
import { MainComponent } from './components/main';

export const createRoutes = [
    {
        path: '/',
        exact: true,
        render: () => <MainComponent />
    }
]