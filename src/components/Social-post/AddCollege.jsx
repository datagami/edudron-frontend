import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

 
import { useSelector } from 'react-redux';
import MultiStepForm from './Multistepform';
const AddCollege = () => {
    const isActive = useSelector((state) => state?.hambergSlice?.value);

    return (
        <>
            <div className={isActive ? 'toggle-sidebar' : null}>
                <main id="main" className="main">

                    <section className="section dashboard mb-4 content_outer_box">
                        <div className="row">
                            <div className="pagetitle page_header">
                                <h1>Add New College</h1>

                            </div>


                           
                            <div className="col-lg-12 col-md-12 col-sm-12">

                            <MultiStepForm/>

                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default AddCollege
