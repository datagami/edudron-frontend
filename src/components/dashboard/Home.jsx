import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import Main from './Main';
import './assets/css/custom.css'
import Profile from './Profile';


import { useSelector } from 'react-redux';
import Footer from './Footer';

const Home = () => {
    
    const isActive=useSelector((state)=>state?.hambergSlice?.value);
  

    return (
        <>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <Header />
                        
                    </div>

                    <div className={isActive ? 'toggle-sidebar' : null}>
                        <div className="sidebar">
                            <Sidebar />
                        </div>
                         
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                    
                    </div>

                </div>
              
            </div>


        </>
    )
}

export default Home