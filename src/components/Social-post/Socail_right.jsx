import React from 'react'
import { NavLink } from 'react-router-dom'

const Socail_right = () => {
  return (
    <>
     <section className='Socail_left_right_static'>
        <div className="profile_col socail_news_col ">
        <h4>LinkedIn News</h4>
        <div>
          <ul  className='socail_single_news custom_scroll'>
            <li>
              <NavLink to='#' >
                <h4>10 Big Ideas that will shape 2023</h4>
                <h6>Top News <span>11,253 readers</span> </h6>
              </NavLink>
            </li>
            <li>
              <NavLink to='#' >
                <h4>Telecom firms tweak hiring plans</h4>
                <h6>Top News <span>8,253 readers</span> </h6>
              </NavLink>
            </li>
            <li>
              <NavLink to='#' >
                <h4>PepsiCo laying off hundreds</h4>
                <h6>Top News <span>11,253 readers</span> </h6>
              </NavLink>
            </li>
            <li>
              <NavLink to='#' >
                <h4>IIT students choosing jobs in India</h4>
                <h6>Top News <span>8,253 readers</span> </h6>
              </NavLink>
            </li>
            <li>
              <NavLink to='#' >
                <h4>IIT students choosing jobs in India</h4>
                <h6>Top News <span>8,253 readers</span> </h6>
              </NavLink>
            </li>
            <li>
              <NavLink to='#' >
                <h4>IIT students choosing jobs in India</h4>
                <h6>Top News <span>8,253 readers</span> </h6>
              </NavLink>
            </li>
          </ul>
        </div>
        </div>
          
      </section>
    </>
  )
}

export default Socail_right
