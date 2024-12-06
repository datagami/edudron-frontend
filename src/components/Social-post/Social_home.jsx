import React from 'react'
import Socail_left from './Socail_left'
import Socail_right from './Socail_right'
import Social_Header from './Social_Header'
import Social_main from './Social_main'

const SocialHome = () => {
  return (
    <>
      <Social_Header />
      <div className="socail_post_main_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <Socail_left />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Social_main />
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <Socail_right />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SocialHome
