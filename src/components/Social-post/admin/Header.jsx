import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Header = () => {
  return (
    <>
      <section className="admin_post_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="admin_post_section_top_div">
                <div className="admin_post_section_inner_div">
                  <img
                    className="img-fluid"
                    src="https://media.licdn.com/dms/image/D4D0BAQFfZIYu9cEDOQ/company-logo_100_100/0/1663796888791?e=1680134400&v=beta&t=l8RzBrwym_zI7JSqizr7YpzZgC6JAyc9RQmlNzUXuAI"
                    alt=""
                  />
                  <h3>Hybrid Plus Infotech Solution PVT LTD</h3>
                  <p>Super admin view</p>
                </div>
                <div className="view_mem_btn">
                  <button>View as member</button>
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>
            {/* Menus */}

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  <NavDropdown title="All Pages" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Home 
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                       My Company
                      </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="#features">Product</Nav.Link>
                    <NavDropdown title="Content" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Recommend to employee
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                       Content Suggestions
                      </NavDropdown.Item>
                    </NavDropdown>

                   
                    <Nav.Link href="#pricing">Activity</Nav.Link>
                  </Nav>
                  <Nav>
                  <NavDropdown title="Admin Tools" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Tool 1
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                     Tool 2
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
         
    </>
  )
}

export default Header
