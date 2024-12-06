import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import Form from 'react-bootstrap/Form';
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import { MdOutlineNavigateNext } from 'react-icons/md';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
const Details = () => {
    const { details, setDetails, next } = useContext(MultiStepFormContext);
    //console.log(details)
 
    return (
    
        <Formik
            initialValues={details}
            onSubmit={(values) => {
                setDetails(values);
                next();
                console.log(next())

            }}
            validate={(values) => {
                const errors = {};
                if (!values.name) errors.name = "Name is required";
                if (!values.email) errors.email = "Email is required";

                if (!values.phone) errors.phone = "Phone Number is required";

                if (!values.city) errors.city = "City is required";


                if (!values.state) errors.state = "State is required";


                if (!values.country) errors.country = "Country is required";




                return errors;
            }}
        >
            {({ handleSubmit, errors }) => {
                return (
                    <>
                        <Form className={"details__wrapper"}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className={`form__item ${errors.name && "input__error"}`}>
                                        <label>College Name *</label>
                                        <Input name={"name"}  className="Multi_step_form_input " />
                                        <p className={"error__feedback"}>{errors.name}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className={`form__item ${errors.email && "input__error"}`}>
                                        <label>Email *</label>
                                        <Input name={"email"} min={0} className="Multi_step_form_input" />
                                        <p className={"error__feedback"}>{errors.email}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className={`form__item ${errors.phone && "input__error"}`}>
                                        <label>Phone Number*</label>
                                        <Input name={"phone"} min={0} className="Multi_step_form_input" />
                                        <p className={"error__feedback"}>{errors.phone}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className=''>
                                        <Form.Label htmlFor="estd_date">Establisted Year</Form.Label>
                                        <Form.Select id="estd_date" className="Multi_step_form_input">
                                            <option>2001</option>
                                        </Form.Select>
                                    </div>
                                </div>


                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <Form.Label htmlFor="estd_date">UGC Approved</Form.Label>
                                    <div className='form_radio_btn'>
                                        <div class="form-check margin_right">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Yes
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className={`form__item ${errors.city && "input__error"}`}>
                                        <label>City*</label>
                                        <Input name={"city"} min={0} className="Multi_step_form_input" />
                                        <p className={"error__feedback"}>{errors.city}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className={`form__item ${errors.state && "input__error"}`}>
                                        <label>State*</label>
                                        <Input name={"state"} min={0} className="Multi_step_form_input" />
                                        <p className={"error__feedback"}>{errors.state}</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className={`form__item ${errors.country && "input__error"}`}>
                                        <label>Country*</label>
                                        <Input name={"country"} min={0} className="Multi_step_form_input" />
                                        <p className={"error__feedback"}>{errors.country}</p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <label>Description</label>
                                    <FloatingLabel controlId="floatingTextarea2">
                                        <Form.Control
                                            as="textarea" className="Multi_step_form_input"
                                            placeholder="Leave a comment here"
                                            style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                </div>


                                <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                                    <div className={"form__item button__items d-flex justify-content-end"} >
                                        <Button type={"primary"} onClick={handleSubmit} className="form_next_btn">
                                            Next <MdOutlineNavigateNext />
                                        </Button>
                                    </div>
                                </div>

                            </div>





                        </Form>

                    </>
                );
            }}
        </Formik>
    );
};
export default Details;
