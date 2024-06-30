import React from 'react'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const DashboardLayout = () => {
    return(
        <div className="mx-auto">
            <Sidebar />
            <div className="mx-auto">
                <Header />
                
            </div>

        </div>
    )
}

export default DashboardLayout