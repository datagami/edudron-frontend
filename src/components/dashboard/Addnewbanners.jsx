import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
const Addnewbanners = () => {
    const isActive = useSelector((state) => state?.hambergSlice?.value);

  return (
    <>
       <div className={isActive ? 'toggle-sidebar' : null}>
                <main id="main" className="main">

                <section className="section dashboard mb-4 content_outer_box">
                        <div className="row">
                            <div className="pagetitle page_header">
                                <h1>Add Banner</h1>

                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">

                                <Form className='dashboard_form'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label> Starting Date</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>End Date</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>

                                   
                                    <Button className='form_submit_btn' type="submit">
                                        Submit
                                    </Button>
                                </Form>

                            </div>
                        </div>
                    </section> 
                </main>
            </div>
    </>
  )
}

export default Addnewbanners
