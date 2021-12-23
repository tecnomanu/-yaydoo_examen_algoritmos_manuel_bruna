import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../components/home/HomeScreen'
import { Test1Screen } from '../components/test-1/Test1Screen'
import { Test2Screen } from '../components/test-2/Test2Screen'
import { Navbar } from '../components/ui/NavBar'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
                <Route path="/test-1" element={<Test1Screen></Test1Screen>}></Route>
                <Route path="/test-2" element={<Test2Screen></Test2Screen>}></Route>
            </Routes>
        </BrowserRouter>
    )
}