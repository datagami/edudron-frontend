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

const Search_Result = () => {
  const loginUserData = JSON.parse(localStorage.getItem('login_result'))
  console.log(loginUserData)

  const auth = JSON.parse(localStorage.getItem('login_result'))
  const [youmayknow, setYoumayknow] = useState([])
  const [addconnection, setAddConnection] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [otherUsers, setOtherUsers] = useState([])
  const[searchUsers,setSearchUsers]=useState([])

  const serachInput=useSelector(state=>state?.searchUserSlice?.value);
  console.log(serachInput)

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

  const search_user=()=>{

    api_instance
    .get(`/api/search?fullname=${serachInput}`, )
    .then((response) => {
      console.log(response.data)
     setSearchUsers(response?.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(()=>{
    search_user()
  },[serachInput])
console.log(searchUsers.users);
  return (
    <>
      <section className="search_result_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <section className="Socail_left_right_static">
                <div className="profile_col ">
                  <img
                    className="img-fluid bg_img"
                    src="https://media.licdn.com/dms/image/D4D16AQHVUQwlJPJXjw/profile-displaybackgroundimage-shrink_200_800/0/1671245975927?e=1680739200&v=beta&t=0CWyuIWBYDbIXIxl0YEDNgQ_3RZFt6mtS8yn2miq8AY"
                    alt=""
                  />
                  <div className="profile_sec">
                    <img
                      className="img-fluid"
                      // src="https://media-exp1.licdn.com/dms/image/D4D03AQG6kF5kZOac0Q/profile-displayphoto-shrink_100_100/0/1667357252158?e=1675900800&v=beta&t=SPoYL-kpkG8VcHtAbWmoO56t1KFZTLdbFWuJrcNxkKQ"
                      src={loginUserData?.data?.avatar}
                      alt=""
                    />
                    <h4>{loginUserData?.data?.fullname}</h4>
                    <p>
                      web designer and developer at Hybrid Plus Infotech
                      Solution Pvt Ltd
                    </p>
                  </div>
                  <div className="profile_views_div">
                    <NavLink to="#">
                      <h3>Who's viewed your profile</h3>
                      <h3>70</h3>
                    </NavLink>
                  </div>

                  <div className="profile_views_div mb-5 pb-3">
                    <NavLink to="#">
                      <h3>Manage your network</h3>
                      <h3>700</h3>
                    </NavLink>
                  </div>
                </div>
              </section>
            </div>

            <div className="col-lg-9 col-md-8 col-sm-12 network_col">
              <div className="socail_post_white_box ">
                <h3 className="mb-3">People</h3>

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
                      {searchUsers?.users?.map((v) => {
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

export default Search_Result
