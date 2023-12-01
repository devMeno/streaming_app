import { useState } from 'react'
import './App.css'
import LeftSidebar from './components/leftSidebar'
import Header from './components/header'
import Banner from './components/banner'
import Music from './components/music'
import RightComponent from './components/rightComponent'

function App() {

    return (
        <>
            {/* <div className="flex">
                <LeftSidebar />
                <div className='w-full'>
                    <Header />
                    <Banner />
                    <p className='font-semibold  text-xl'>Popular</p>
                    <Music />
                    <Music />
                    <Music />
                    <Music />
                    <Music />
                </div>
                <RightComponent />
            </div> */}
            <RightComponent />
        </>
    )
}

export default App
