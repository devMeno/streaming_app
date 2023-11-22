import { useState } from 'react'
import './App.css'
import LeftSidebar from './components/leftSidebar'
import Header from './components/header'


function App() {

    return (
        <>
            <div className="flex">
                <LeftSidebar />
                {/* <Header /> */}
            </div>
        </>
    )
}

export default App
