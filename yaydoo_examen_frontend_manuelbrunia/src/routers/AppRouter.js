import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../components/home/HomeScreen'
import { UsersScreen } from '../components/users/UsersScreen'
import { Navbar } from '../components/ui/NavBar'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
                <Route path="/users" element={<UsersScreen></UsersScreen>}></Route>
                {/* <Route path="/users/create" element={<Test2Screen></Test2Screen>}></Route> */}
            </Routes>
        </BrowserRouter>
    )
}