import { useState } from 'react'
import './App.css'
import LeftSidebar from './components/leftSidebar'
import Header from './components/header'
import DarkVariantExample from './components/caroussel'


function App() {

    return (
        <>
            <div className="flex">
                {/* <LeftSidebar />
                <Header /> */}
                <DarkVariantExample />
            </div>
        </>
    )
}

export default App
