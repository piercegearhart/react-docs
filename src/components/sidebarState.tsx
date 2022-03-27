// React useState
import { useEffect, useState } from 'react'

var showSideBar = true
const setShowSideBar = (event:any) => {
    showSideBar = event
    console.log('test')
}

const SidebarState = () => {
    const [showSideBarState, setShowSideBarState] = useState(showSideBar)

    useEffect(() => {
        
    })
}

export default {showSideBar, setShowSideBar}