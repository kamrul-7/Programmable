import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import LeftSideNavBar from '../pages/Shared/LeftSideNavBar';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-4'>
                <div className='text-start col-span-1'>
                    <LeftSideNavBar></LeftSideNavBar>
                </div>
                <div className='col-span-3'>

                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default Main;