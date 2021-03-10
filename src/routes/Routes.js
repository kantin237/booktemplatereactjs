import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'

export default function Routes() {
    return (
        <HashRouter>
            <Route  path="/" component={DefaultLayout}/>
        </HashRouter>
    )
}
