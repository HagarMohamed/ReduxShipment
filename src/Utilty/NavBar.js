import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div className='nav-style w-100'>
        <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src="https://png.pngtree.com/png-vector/20221107/ourmid/pngtree-modern-truck-or-logistics-logo-design-png-image_6425124.png" alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input type="text" className="form-control" placeholder="search" />
            </div>
          </Col>
        </Row>
    </Container>
    </div>
  )
}

export default NavBar
