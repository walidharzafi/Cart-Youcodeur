import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Image from '../images/js.png'

const Home = () => {
    return (
        <Container>
        <Row>
            <Col xs="6" className="">
                <img src={Image} alt="Welcom" style= {{width : "110%"}} />
            </Col>
            <Col xs="5" className="align-self-center float-end">
                <h1> WELCOM TO </h1>
                <br />
                <h1><span className="coleur">CART YOUCODERS</span></h1>
            </Col>
        </Row>
        </Container>
    )
}

export default Home
