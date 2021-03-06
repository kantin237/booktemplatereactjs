import React from 'react'
import MainRouter from '../routes/MainRouter'
import {HashRouter, Route} from 'react-router-dom'
import FooterLayout from './FooterLayout'
import HeaderLayout from './HeaderLayout'
import NavigationLayout from './NavigationLayout'
import MainLayout from './MainLayout'

export default function DefaultLayout() {

    return (
        <div>
            <HeaderLayout />
            <MainLayout />
            <MainRouter />
            <FooterLayout />
        </div>
    )
}
