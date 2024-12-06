import React from 'react'
import { useTable } from 'react-table'
import { AiOutlinePlus } from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Bannerslist = () => {

    const isActive = useSelector((state) => state?.hambergSlice?.value);

    const data = React.useMemo(
        () => [
            {
                id: '001',
                Image: 'Akash Kumar',
                StartDate: '2022-11-08',
                EndDate: '2022-11-18',
                CreatedAt: '2022-05-31 09:41:00',
                delete: <button className='table_btn delete_btn'>Delete</button>,
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
                Header: 'Image',
                accessor: 'Image',
            },
            {
                Header: 'Start Date',
                accessor: 'StartDate',
            },
            {
                Header: 'End Date',
                accessor: 'EndDate',
            },
            {
                Header: 'Created At',
                accessor: 'CreatedAt',
            },

            {
                Header: 'Delete ',
                accessor: 'delete',
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
                                <h1>Banner List</h1>
                                <button className='add_btn'> <NavLink to='/addnewbanners'> <AiOutlinePlus /> </NavLink> </button>
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

export default Bannerslist
