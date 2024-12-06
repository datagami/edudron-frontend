import React from 'react'
import { useTable } from 'react-table'
import { AiOutlinePlus } from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UsersList = () => {

    const isActive = useSelector((state) => state?.hambergSlice?.value);

    const data = React.useMemo(
        () => [
            {
                id: '001',
                name: 'Akash Kumar',
                username: 'akashkumar',
                email: 'akashkumarjat@gmail.com',
                gender: 'Male',
                phone: '9874563210',
                dob: '2022-11-16',
                view: <button className='table_btn view_btn'>View</button>,
                action: [<button className='table_btn edit_btn'>Edit</button>, <button className='table_btn block_btn'>Block</button>],
                verify: <button className='table_btn verified_btn'>Verified</button>,
                deleteaccount: <button className='table_btn delete_btn'>Delete</button>,
            },

            {
                id: '002',
                name: 'Vikash Kharadia',
                username: 'akashkumar',
                email: 'akashkumarjat@gmail.com',
                gender: 'Male',
                phone: '9874563210',
                dob: '2022-11-16',
                view: <button className='table_btn view_btn'>View</button>,
                action: [<button className='table_btn edit_btn'>Edit</button>, <button className='table_btn block_btn'>Block</button>],
                verify: <button className='table_btn verified_btn'>Verified</button>,
                deleteaccount: <button className='table_btn delete_btn'>Delete</button>,
            },
            {
                id: '2',
                name: 'Akash Kumar',
                username: 'akashkumar',
                email: 'akashkumarjat@gmail.com',
                gender: 'Male',
                phone: '9874563210',
                dob: '2022-11-16',
                view: <button className='table_btn view_btn'>View</button>,
                action: [<button className='table_btn edit_btn'>Edit</button>, <button className='table_btn block_btn'>Block</button>],
                verify: <button className='table_btn verified_btn'>Verified</button>,
                deleteaccount: <button className='table_btn delete_btn'>Delete</button>,
            },
            {
                id: '2',
                name: 'Akash Kumar',
                username: 'akashkumar',
                email: 'akashkumarjat@gmail.com',
                gender: 'Male',
                phone: '9874563210',
                dob: '2022-11-16',
                view: <button className='table_btn view_btn'>View</button>,
                action: [<button className='table_btn edit_btn'>Edit</button>, <button className='table_btn block_btn'>Block</button>],
                verify: <button className='table_btn verified_btn'>Verified</button>,
                deleteaccount: <button className='table_btn delete_btn'>Delete</button>,
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id', // accessor is the "key" in the data
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Username',
                accessor: 'username',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Gender',
                accessor: 'gender',
            },
            {
                Header: 'Phone',
                accessor: 'phone',
            },
            {
                Header: 'DOB',
                accessor: 'dob',
            },
            {
                Header: 'View',
                accessor: 'view',
            }, {
                Header: 'Action',
                accessor: 'action',
            }, {
                Header: 'Verify',
                accessor: 'verify',
            },
            {
                Header: 'Delete Account',
                accessor: 'deleteaccount',
            },
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
        <>

            <div className={isActive ? 'toggle-sidebar' : null}>
                <main id="main" className="main">

                    <section className="section dashboard mb-4 content_outer_box">
                        <div className="row">
                            <div className="pagetitle page_header">
                                <h1>User List</h1>
                                <button className='add_btn'> <NavLink to='/addnewusers'> <AiOutlinePlus /> </NavLink> </button>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div style={{ overflowX: 'auto' }}>

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
                        </div>
                    </section>
                </main>
            </div>
            
        </>
    )
}

export default UsersList
