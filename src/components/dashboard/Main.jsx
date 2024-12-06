import React from 'react'
import { useTable } from 'react-table'
import { AiOutlinePlus } from 'react-icons/ai';


import { useSelector } from 'react-redux';

const Main = () => {



    const isActive = useSelector((state) => state?.hambergSlice?.value);
    return (

        <>
            <div className={isActive ? 'toggle-sidebar' : null}>
                <main id="main" className="main">

                    <section className="section dashboard mb-4 content_outer_box">
                        <div className="row">
                            <div className="pagetitle">
                                <h1>User Registered</h1>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-xxl-3 col-md-6">
                                        <div className="card info-card sales-card">
                                            <div className="card-body">
                                                <h5 className="card-title">Today </h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-cart"></i>
                                                    </div>
                                                    <div className="ps-3">
                                                        <h6>30</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xxl-3 col-md-6">
                                        <div className="card info-card sales-card">
                                            <div className="card-body">
                                                <h5 className="card-title">7 Days </h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-cart"></i>
                                                    </div>
                                                    <div className="ps-3">
                                                        <h6>40</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xxl-3 col-md-6">
                                        <div className="card info-card sales-card">
                                            <div className="card-body">
                                                <h5 className="card-title">30 Days </h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-cart"></i>
                                                    </div>
                                                    <div className="ps-3">
                                                        <h6>30</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xxl-3 col-md-6">
                                        <div className="card info-card sales-card">
                                            <div className="card-body">
                                                <h5 className="card-title">All Time </h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-cart"></i>
                                                    </div>
                                                    <div className="ps-3">
                                                        <h6>100</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>




                        </div>
                    </section>

                    <section className="section dashboard mb-4 content_outer_box">
                        <div className="row">
                            <div className="pagetitle">
                                <h1>Course Post</h1>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-xxl-3 col-md-6">
                                        <div className="card info-card sales-card">
                                            <div className="card-body">
                                                <h5 className="card-title">Today </h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-cart"></i>
                                                    </div>
                                                    <div className="ps-3">
                                                        <h6>30</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xxl-3 col-md-6">
                                        <div className="card info-card sales-card">
                                            <div className="card-body">
                                                <h5 className="card-title">7 Days </h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-cart"></i>
                                                    </div>
                                                    <div className="ps-3">
                                                        <h6>40</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xxl-3 col-md-6">
                                        <div className="card info-card sales-card">
                                            <div className="card-body">
                                                <h5 className="card-title">30 Days </h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-cart"></i>
                                                    </div>
                                                    <div className="ps-3">
                                                        <h6>30</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xxl-3 col-md-6">
                                        <div className="card info-card sales-card">
                                            <div className="card-body">
                                                <h5 className="card-title">All Time </h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="bi bi-cart"></i>
                                                    </div>
                                                    <div className="ps-3">
                                                        <h6>100</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>




                        </div>
                    </section>


                  

                </main>
            </div>
        </>
    )
}

export default Main
