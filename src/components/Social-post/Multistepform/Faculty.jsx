import React, { useContext } from "react";
import { Button, Col, Row } from "antd";
import Form from 'react-bootstrap/Form';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import MultiStepFormContext from "./MultiStepFormContext";
import { AiOutlinePlus } from 'react-icons/ai';

const Faculty = () => {
    const { gallery, setGallery, next, prev } = useContext(MultiStepFormContext);

  
    const steps = () => {
      next()
    }
    return (
        <>
            <div >
                <Form className={"details__wrapper"}>
                    <div className="row faculty_form">



                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" className="Multi_step_form_input" />
                            </Form.Group>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <Form.Group className="mb-3">
                                <Form.Label>Post</Form.Label>
                                <Form.Control type="text" className="Multi_step_form_input" />
                            </Form.Group>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" className="Multi_step_form_input" />
                            </Form.Group>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" className="Multi_step_form_input" />
                            </Form.Group>
                        </div>


                        <div className="col-lg-12 col-md-12 col-sm-12 mt-2">
                                <div className={"form__item button__items d-flex justify-content-end"} >
                                    <Button className="form_add_btn">
                                        Add  <AiOutlinePlus />
                                    </Button>
                                </div>
                            </div>



                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2>Faculty</h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="faculty_details_box">
                                <div className="faculty_name">
                                    <h3>Akash Kumar</h3>
                                    <p>Web Developer</p>
                                </div>
                                <div className="faculty_contact">
                                    <h3>Contact this faculty</h3>
                                    <div>  <span className="faculty_contact_span">Email:</span><span className="faculty_contact_span_detail">akashkumar@gmail.com</span></div>
                                    <div>  <span className="faculty_contact_span">Phone:</span><span className="faculty_contact_span_detail">+91 987466321</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="faculty_details_box">
                                <div className="faculty_name">
                                    <h3>Akash Kumar</h3>
                                    <p>Web Developer</p>
                                </div>
                                <div className="faculty_contact">
                                    <h3>Contact this faculty</h3>
                                    <div>  <span className="faculty_contact_span">Email:</span><span className="faculty_contact_span_detail">akashkumar@gmail.com</span></div>
                                    <div>  <span className="faculty_contact_span">Phone:</span><span className="faculty_contact_span_detail">+91 987466321</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="faculty_details_box">
                                <div className="faculty_name">
                                    <h3>Akash Kumar</h3>
                                    <p>Web Developer</p>
                                </div>
                                <div className="faculty_contact">
                                    <h3>Contact this faculty</h3>
                                    <div>  <span className="faculty_contact_span">Email:</span><span className="faculty_contact_span_detail">akashkumar@gmail.com</span></div>
                                    <div>  <span className="faculty_contact_span">Phone:</span><span className="faculty_contact_span_detail">+91 987466321</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="faculty_details_box">
                                <div className="faculty_name">
                                    <h3>Akash Kumar</h3>
                                    <p>Web Developer</p>
                                </div>
                                <div className="faculty_contact">
                                    <h3>Contact this faculty</h3>
                                    <div>  <span className="faculty_contact_span">Email:</span><span className="faculty_contact_span_detail">akashkumar@gmail.com</span></div>
                                    <div>  <span className="faculty_contact_span">Phone:</span><span className="faculty_contact_span_detail">+91 987466321</span></div>
                                </div>
                            </div>
                        </div>

                       
                        <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                            <div className={"form__item button__items d-flex justify-content-between"}>
                                <Button type={"default"} onClick={prev} className="form_back_btn">
                                    <IoIosArrowBack className="form_icon" />   Back
                                </Button>
                                <Button type={"primary"} onClick={steps} className="form_next_btn">
                                    Done <MdOutlineNavigateNext />
                                </Button>
                            </div>
                        </div>


                    </div>
                </Form>
            </div>
        </>
    )
}

export default Faculty
