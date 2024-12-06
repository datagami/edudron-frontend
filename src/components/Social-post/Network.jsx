import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineTeam, AiOutlineUser } from 'react-icons/ai'
import { BiGroup } from 'react-icons/bi'
import { MdEventAvailable } from 'react-icons/md'
import { RiPagesLine, RiContactsBookLine } from 'react-icons/ri'
import Pagination from 'react-bootstrap/Pagination'
import { api_instance } from '../Frontend/Header/HeaderApi`s'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import { useDispatch, useSelector } from 'react-redux'
import { otherUserDetails } from '../../Redux/slice/otherUserSlice'
const Network = () => {
  const auth = JSON.parse(localStorage.getItem('login_result'))
  const [youmayknow, setYoumayknow] = useState([])
  const [addconnection, setAddConnection] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [otherUsers, setOtherUsers] = useState([])

  //// redux==========

  const dispatch = useDispatch()

  const navigate = useNavigate()

  // console.log(otherUsers)

  const suggested_users = () => {
    setIsLoading(true)
    api_instance
      .get(`/api/suggestionsUser`)
      .then((response) => {
        if (response) {
          setIsLoading(false)
          setYoumayknow(response.data)
        }
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    suggested_users()
  }, [])

  const add_connections = (id) => {
    api_instance
      .patch(`/api/user/${id}/connect`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const remove_connection = (id) => {
    api_instance
      .patch(`/api/user/${id}/remove-connection`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const unfollow_api = (id) => {
    api_instance
      .patch(`/api/user/${id}/unfollow`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const other_user_details = (id) => {
    api_instance
      .get(`/api/user/${id}`)
      .then((response) => {
        console.log(response)
        dispatch(otherUserDetails(response.data))
        if (response) {
          navigate('/users_profile')
          setOtherUsers(response.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <section className="socail_pages_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="socail_post_white_box">
                <h3>Manage my network</h3>
                <div className="manage_network_col">
                  <ul>
                    <li>
                      <NavLink to="#" className="manage_network_links">
                        <div className="manage_network_links_inner">
                          <span>
                            {' '}
                            <AiOutlineTeam className="icon" />{' '}
                          </span>
                          <h5>Connections</h5>
                        </div>
                        <div>
                          <span>6541</span>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-8 col-sm-12 network_col">
              <div className="socail_post_white_box ">
                <h3 className="mb-3">People you may know</h3>

                {isLoading ? (
                  <Stack spacing={1} sx={{ marginTop: '50px' }}>
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={60} />
                    <Skeleton variant="rounded" width={210} height={60} />
                  </Stack>
                ) : (
                  <div className="container">
                    <div className="row">
                      {youmayknow?.users?.map((v) => {
                        return (
                          <div
                            className="col-lg-3 col-md-6 col-sm-12 connection_col"
                            key={v._id}
                          >
                            <div className="profile_col ">
                              <img
                                className="img-fluid bg_img"
                                src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg"
                                alt=""
                              />
                              <div className="profile_sec">
                                <img
                                  className="img-fluid"
                                  src={v.avatar}
                                  alt=""
                                />
                                <h4
                                  className="user_on_hover"
                                  onClick={() => other_user_details(v._id)}
                                >
                                  {v.fullname}
                                </h4>
                                <p>
                                  web designer and developer at Hybrid Plus
                                  Infotech Solution Pvt Ltd
                                </p>
                              </div>

                              <div className="connect_div">
                                <NavLink to="#">
                                  <button
                                    onClick={() => add_connections(v._id)}
                                  >
                                    Connect
                                  </button>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    {/* <div className="row">
<div className="col-lg-12">
  <div className="pagination_div">
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  </div>
</div>
</div> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Network
