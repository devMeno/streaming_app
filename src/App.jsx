import { useState } from 'react'
import './App.css'
import LeftSidebar from './components/leftSidebar'
import Header from './components/header'
import Banner from './components/banner'
import Music from './components/music'

function App() {

    return (
        <>
            <div className="flex">
                <LeftSidebar />
                <div className='w-full'>
                    <Header />
                    <Banner />
                    <p className='font-semibold  text-xl'>Popular</p>
                    <Music />
                    <Music />
                    <Music />
                </div>
            </div>
        </>
    )
}

export default App
