import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
const Addnewcategory = () => {
    const isActive = useSelector((state) => state?.hambergSlice?.value);

  return (
    <>
       <div className={isActive ? 'toggle-sidebar' : null}>
                <main id="main" className="main">

                <section className="section dashboard mb-4 content_outer_box">
                        <div className="row">
                            <div className="pagetitle page_header">
                                <h1>Add New Category</h1>

                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">

                                <Form className='dashboard_form'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label> Description</Form.Label>
                                        <Form.Control as="textarea" type="text" style={{ height: '200px' }} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Banner</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>

                                    

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="parentcat_select_box">Parent Category</Form.Label>
                                        <Form.Select id="parentcat_select_box">
                                            <option>1</option>
                                            <option>3</option>
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

export default Addnewcategory
