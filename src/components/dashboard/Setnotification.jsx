import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
const Setnotification = () => {
    const isActive = useSelector((state) => state?.hambergSlice?.value);

    return (
        <>
            <div className={isActive ? 'toggle-sidebar' : null}>
                <main id="main" className="main">

                    <section className="section dashboard mb-4 content_outer_box">
                        <div className="row">
                            <div className="pagetitle page_header">
                                <h1>Set Notification</h1>

                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">

                                <Form className='dashboard_form'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label> Message</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" label="All users" />
                                    </Form.Group>
                                    
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="Select_Users_select_box">Select Users</Form.Label>
                                        <Form.Select id="Select_Users_select_box">
                                            <option>1</option>
                                            <option>2</option>
                                        </Form.Select>
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

export default Setnotification
