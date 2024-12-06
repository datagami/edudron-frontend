import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
const AddNewUser = () => {
    const isActive = useSelector((state) => state?.hambergSlice?.value);

  return (
    <>
       <div className={isActive ? 'toggle-sidebar' : null}>
                <main id="main" className="main">

                <section className="section dashboard mb-4 content_outer_box">
                        <div className="row">
                            <div className="pagetitle page_header">
                                <h1>Add New User</h1>

                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">

                                <Form className='dashboard_form'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Profile Name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label> Name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="gender_select_box">Gender</Form.Label>
                                        <Form.Select id="gender_select_box">
                                            <option>Male</option>
                                            <option>Female</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>DOB</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" />
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

export default AddNewUser
