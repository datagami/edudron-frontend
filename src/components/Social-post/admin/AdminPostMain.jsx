import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { FcAddImage, FcVideoCall } from 'react-icons/fc'
import { AiOutlineEdit, AiOutlinePlus, AiOutlineComment } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import { BiLike } from 'react-icons/bi'

const AdminPostMain = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
  return (
    <>
 <section>
        <div className="socail_main_top_div">
          <div className="dis_flex">
            <div className="imgs">
              <img
                className="img-fluid"
                src="https://media.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1680134400&v=beta&t=l8RzBrwym_zI7JSqizr7YpzZgC6JAyc9RQmlNzUXuAI"
                alt=""
              />
            </div>
            <div className="start_post_btn_div">
              <button onClick={handleShow} className="start_post_btn">
                Start a post
              </button>
            </div>
          </div>

          <div className="post_btns_div">
            <ul>
              <li>
                <button onClick={handleShow} className="post_btns">
                  <span>
                    <FcAddImage className="icons" />
                  </span>
                  <span> Photo</span>
                </button>
              </li>
              <li>
                <button onClick={handleShow} className="post_btns">
                  <span>
                    <FcVideoCall className="icons" />
                  </span>
                  <span> Video</span>
                </button>
              </li>

              <li>
                <button onClick={handleShow} className="post_btns">
                  <span>
                    <BsBagCheck className="icons" />
                  </span>
                  <span> Poll</span>
                </button>
              </li>

              <li>
                <button onClick={handleShow} className="post_btns">
                  <span>
                    <AiOutlineEdit className="icons" />
                  </span>
                  <span> Write a article</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="post_col">
          <div className="post_col_inner_div">
            <div className="dis_flex">
              <img
                className="img-fluid"
                src="https://media.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1680134400&v=beta&t=l8RzBrwym_zI7JSqizr7YpzZgC6JAyc9RQmlNzUXuAI"
                alt=""
              />
              <div className="post_col_name">
                <h3>Hybrid Plus Infotech Solution PVT LTD</h3>
                <p className="followers">
                 3210 Followers
                </p>
                <p className="post_time">1 Day ago</p>
              </div>
            </div>
            {/* <div>
              <button className="follow_btn">
                <AiOutlinePlus /> Follow
              </button>
            </div> */}
          </div>
          <div className="post_content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <img
              className="img-fluid"
              src="https://media.licdn.com/dms/image/C4D22AQHglQr7XIy7EQ/feedshare-shrink_800/0/1672143455718?e=1675296000&v=beta&t=eGjJ9UgRMtLbGDNoOqyiM-QQo09YLfbp9wgljBiSlX4"
              alt=""
            />
          </div>
          <div className="like_comment_count_div">
            <div>
              <span>
                <BiLike className="icons" />
              </span>
              <span>Manoj Mehta and 25 Others</span>
            </div>
            <div>
              <span>500 Comments</span>
            </div>
          </div>

          <div className="like_comment_div">
            <div>
              <button className="like_comment_btn">
                <BiLike className="icons" /> <span>Like</span>
              </button>
            </div>
            <div>
              <button className="like_comment_btn comment_bbtn">
                <AiOutlineComment className="icons" /> <span>Comment</span>
              </button>
            </div>
          </div>

          <div className="add_comment">
            <img
              className="img-fluid commenter_img"
              src="https://media.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1680134400&v=beta&t=l8RzBrwym_zI7JSqizr7YpzZgC6JAyc9RQmlNzUXuAI"
              alt=""
            />
            <div className="add_comment_input_div">
              <Form>
                <Form.Group className="">
                  <Form.Control
                    className="add_comment_input_box"
                    type="text"
                    placeholder="Add a comment"
                  />
                </Form.Group>
              </Form>
            </div>
            <div>
              <button className="post_btn">Post</button>
            </div>
          </div>

          <div className="all_comments_div">
            <div className="commenters_inner_div">
              <div className="imgs">
                <img
                  className="img-fluid"
                  src="https://media-exp1.licdn.com/dms/image/C5103AQE9lf9dOKO2Fw/profile-displayphoto-shrink_100_100/0/1574711601069?e=1675900800&v=beta&t=vpwlXrKsGh0kQ9RHDBvdh8LCq4NtlHPHE7U-vU1LI3k"
                  alt=""
                />
              </div>
              <div>
                <div className="commenter_name">
                  <div className="post_col_name ">
                    <h3>Manoj Mehta</h3>
                    <p>
                      Co- Founder at Hybrid Plus | jyotishee.com tech partner
                    </p>
                  </div>
                  <div className="comment_time">
                    <p>1 hour ago</p>
                  </div>
                </div>
                <div className="comment_body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy{' '}
                  </p>
                  <div className="comments_like_comment_div">
                    <ul>
                      <li>
                        <button className="like_comment_btn">Like</button>
                      </li>
                      <li>
                        <button className="like_comment_btn">Comment</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="commenters_inner_div">
              <div className="imgs">
                <img
                  className="img-fluid"
                  src="https://media-exp1.licdn.com/dms/image/C5103AQE9lf9dOKO2Fw/profile-displayphoto-shrink_100_100/0/1574711601069?e=1675900800&v=beta&t=vpwlXrKsGh0kQ9RHDBvdh8LCq4NtlHPHE7U-vU1LI3k"
                  alt=""
                />
              </div>
              <div>
                <div className="commenter_name">
                  <div className="post_col_name ">
                    <h3>Manoj Mehta</h3>
                    <p>
                      Co- Founder at Hybrid Plus | jyotishee.com tech partner
                    </p>
                  </div>
                  <div className="comment_time">
                    <p>1 hour ago</p>
                  </div>
                </div>
                <div className="comment_body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy{' '}
                  </p>
                  <div className="comments_like_comment_div">
                    <ul>
                      <li>
                        <button className="like_comment_btn">Like</button>
                      </li>
                      <li>
                        <button className="like_comment_btn">Comment</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="post_col">
          <div className="post_col_inner_div">
            <div className="dis_flex">
              <img
                className="img-fluid"
                src="https://media.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1680134400&v=beta&t=l8RzBrwym_zI7JSqizr7YpzZgC6JAyc9RQmlNzUXuAI"
                alt=""
              />
              <div className="post_col_name">
              <h3>Hybrid Plus Infotech Solution PVT LTD</h3>
                <p className="followers">
                 3210 Followers
                </p>
                <p className="post_time">1 Day ago</p>
              </div>
            </div>
            {/* <div>
              <button className="follow_btn">
                <AiOutlinePlus /> Follow
              </button>
            </div> */}
          </div>
          <div className="post_content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <img
              className="img-fluid"
              src="https://media.licdn.com/dms/image/C4D22AQHglQr7XIy7EQ/feedshare-shrink_800/0/1672143455718?e=1675296000&v=beta&t=eGjJ9UgRMtLbGDNoOqyiM-QQo09YLfbp9wgljBiSlX4"
              alt=""
            />
          </div>
          <div className="like_comment_count_div">
            <div>
              <span>
                <BiLike className="icons" />
              </span>
              <span>Manoj Mehta and 25 Others</span>
            </div>
            <div>
              <span>500 Comments</span>
            </div>
          </div>

          <div className="like_comment_div">
            <div>
              <button className="like_comment_btn">
                <BiLike className="icons" /> <span>Like</span>
              </button>
            </div>
            <div>
              <button className="like_comment_btn comment_bbtn">
                <AiOutlineComment className="icons" /> <span>Comment</span>
              </button>
            </div>
          </div>

          <div className="add_comment">
            <img
              className="img-fluid commenter_img"
              src="https://media.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1680134400&v=beta&t=l8RzBrwym_zI7JSqizr7YpzZgC6JAyc9RQmlNzUXuAI"
              alt=""
            />
            <div className="add_comment_input_div">
              <Form>
                <Form.Group className="">
                  <Form.Control
                    className="add_comment_input_box"
                    type="text"
                    placeholder="Add a comment"
                  />
                </Form.Group>
              </Form>
            </div>
            <div>
              <button className="post_btn">Post</button>
            </div>
          </div>

          <div className="all_comments_div">
            <div className="commenters_inner_div">
              <div className="imgs">
                <img
                  className="img-fluid"
                  src="https://media-exp1.licdn.com/dms/image/C5103AQE9lf9dOKO2Fw/profile-displayphoto-shrink_100_100/0/1574711601069?e=1675900800&v=beta&t=vpwlXrKsGh0kQ9RHDBvdh8LCq4NtlHPHE7U-vU1LI3k"
                  alt=""
                />
              </div>
              <div>
                <div className="commenter_name">
                  <div className="post_col_name ">
                    <h3>Manoj Mehta</h3>
                    <p>
                      Co- Founder at Hybrid Plus | jyotishee.com tech partner
                    </p>
                  </div>
                  <div className="comment_time">
                    <p>1 hour ago</p>
                  </div>
                </div>
                <div className="comment_body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy{' '}
                  </p>
                  <div className="comments_like_comment_div">
                    <ul>
                      <li>
                        <button className="like_comment_btn">Like</button>
                      </li>
                      <li>
                        <button className="like_comment_btn">Comment</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="commenters_inner_div">
              <div className="imgs">
                <img
                  className="img-fluid"
                  src="https://media-exp1.licdn.com/dms/image/C5103AQE9lf9dOKO2Fw/profile-displayphoto-shrink_100_100/0/1574711601069?e=1675900800&v=beta&t=vpwlXrKsGh0kQ9RHDBvdh8LCq4NtlHPHE7U-vU1LI3k"
                  alt=""
                />
              </div>
              <div>
                <div className="commenter_name">
                  <div className="post_col_name ">
                    <h3>Manoj Mehta</h3>
                    <p>
                      Co- Founder at Hybrid Plus | jyotishee.com tech partner
                    </p>
                  </div>
                  <div className="comment_time">
                    <p>1 hour ago</p>
                  </div>
                </div>
                <div className="comment_body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy{' '}
                  </p>
                  <div className="comments_like_comment_div">
                    <ul>
                      <li>
                        <button className="like_comment_btn">Like</button>
                      </li>
                      <li>
                        <button className="like_comment_btn">Comment</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default AdminPostMain
