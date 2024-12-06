import React, { useContext } from "react";
import { useTable } from 'react-table'
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import { IoIosArrowBack } from 'react-icons/io';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';


import Form from 'react-bootstrap/Form';

const Details = () => {
    const { address, setAddress, next, prev } = useContext(MultiStepFormContext);
    console.log('address', address)

    const steps = () => {
        next()
    }





    const data = React.useMemo(
        () => [
            {
                srno: '001',
                course: 'B.Tech',
                fees: '10000',
                eligibility: '10+2 with 75% + JEE Advanced',
            },
            {
                srno: '001',
                course: 'B.Tech',
                fees: '10000',
                eligibility: '10+2 with 75% + JEE Advanced',
            },
            {
                srno: '001',
                course: 'B.Tech',
                fees: '10000',
                eligibility: '10+2 with 75% + JEE Advanced',
            },
            {
                srno: '001',
                course: 'B.Tech',
                fees: '10000',
                eligibility: '10+2 with 75% + JEE Advanced',
            },

           
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'SR. No',
                accessor: 'srno', // accessor is the "key" in the data
            },
            {
                Header: ' Course Name',
                accessor: 'course',
            },
            {
                Header: 'Fees',
                accessor: 'fees',
            },
            {
                Header: 'Eligibility',
                accessor: 'eligibility',
            }
          
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })


    return (

        <Formik
            initialValues={address}
            onSubmit={(values) => {
                console.log(values)
                setAddress(values);
                next();
                // console.log('i am next')
            }}

            validate={(values) => {
                const errors = {};
                if (!values.address1) errors.address1 = "Address is required";
                if (!values.Eligibility) errors.Eligibility = "Eligibility is required";
                return errors;
            }}
        >
            {({ handleSubmit, errors }) => {
                return (
                    <Form className={"details__wrapper"}>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className=''>
                                    <Form.Label htmlFor="estd_date">Course</Form.Label>
                                    <Form.Select id="estd_date" className="Multi_step_form_input select_dropdown">
                                        <option>Select Course</option>
                                        <option>B.Tech</option>
                                        <option>M.Tech</option>
                                        <option>Ph.D</option>
                                        <option>MA</option>
                                        <option>MCA</option>
                                    </Form.Select>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className={`form__item`}>
                                    <label>Fees</label>
                                    <Input name={"fees"} className="Multi_step_form_input" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className={`form__item ${errors.Eligibility && "input__error"}`}>
                                    <label>Eligibility</label>
                                    <Input name={"Eligibility"} className="Multi_step_form_input" />
                                    <p className={"error__feedback"}>{errors.Eligibility}</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 mt-2">
                                <div className={"form__item button__items d-flex justify-content-end"} >
                                    <Button className="form_add_btn">
                                        Add  <AiOutlinePlus />
                                    </Button>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div style={{ overflowX: 'auto' }}>
                                <h1 className="gallery_images_heading">Course List</h1>
                                    <table {...getTableProps()} className="data_table">
                                        <thead>
                                            {headerGroups.map(headerGroup => (
                                                <tr className='table_head' {...headerGroup.getHeaderGroupProps()}>
                                                    {headerGroup.headers.map(column => (
                                                        <th className='table_td'
                                                            {...column.getHeaderProps()}

                                                        >
                                                            {column.render('Header')}
                                                        </th>
                                                    ))}
                                                </tr>
                                            ))}
                                        </thead>
                                        <tbody {...getTableBodyProps()}>
                                            {rows.map(row => {
                                                prepareRow(row)
                                                return (
                                                    <tr {...row.getRowProps()} className='table_row'>
                                                        {row.cells.map(cell => {
                                                            return (
                                                                <td className='table_body'
                                                                    {...cell.getCellProps()}
                                                                >
                                                                    {cell.render('Cell')}
                                                                </td>
                                                            )
                                                        })}
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>  



                            <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                                <div className={"form__item button__items d-flex justify-content-between"}>
                                    <Button type={"default"} onClick={prev} className="form_back_btn">
                                        <IoIosArrowBack className="form_icon" />   Back
                                    </Button>
                                    <Button type={"primary"} onClick={steps} className="form_next_btn">
                                        Next <MdOutlineNavigateNext />
                                    </Button>
                                </div>
                            </div>


                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};
export default Details;
