import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import LeftSideNavBar from '../pages/Shared/LeftSideNavBar';
const Main = () => {
    return (
        <div><Header></Header>
            <div className='grid grid-cols-6 gap-4'>
                <div>
                    <LeftSideNavBar></LeftSideNavBar>
                </div>
                <div className='col-span-5'>
                    <Outlet></Outlet>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;