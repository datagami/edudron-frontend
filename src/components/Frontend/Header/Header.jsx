import React from 'react'
import Main_Header from '../Header/Main_Header'
import Menus from './Menus'
import Mobile_menu from './Mobile_menu'
import Top_Sub_Header from './Top_Sub_Header'

const Header = () => {
  return (
    <>
    <section style={{backgroundColor:'rgb(220, 228, 236)'}} className="headers">
    <Top_Sub_Header/>
      {/* <Main_Header /> */}
      <Menus/>

{/* <Mobile_menu className="mobile_header" /> */}

      </section>
    </>
  )
}

export default Header
