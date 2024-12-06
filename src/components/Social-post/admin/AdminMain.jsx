import React from 'react'
import Header from './Header'



import AdminPostLeft from './AdminPostLeft'
import AdminPostMain from './AdminPostMain'
import AdminPostRight from './AdminPostRight'

const AdminMain = () => {
  return (
    <>
      <Header/>

      <div className="socail_post_main_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <AdminPostLeft/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
             <AdminPostMain/>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
           <AdminPostRight/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminMain
