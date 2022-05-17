import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
          
        </div>
    )
}
export default Dashboard
