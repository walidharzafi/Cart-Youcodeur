import React from 'react'
import { Card, CardImg, CardTitle, CardText,CardBody, CardHeader,CardFooter, Row, Col } from 'reactstrap';
import Profil from '../images/program.png'

const AllCarts = () => {
    return (
        <div className= "container">
            <Row>
                <Col xs="6" sm="4">
                    <Card className=" mt-5">
                        <CardHeader className="text-center">Cart Youcoder</CardHeader>
                        <Row>
                            <Col xs="5">
                                <CardImg width="100%" src={Profil} alt="Card image cap" />
                            </Col>
                            <Col xs="7" className="align-self-center">
                                <CardBody >
                                    <CardTitle tag="h6">First Name :</CardTitle>
                                    <CardTitle tag="h6">Last Name :</CardTitle>
                                    <CardText> Adress : </CardText>
                                    <CardText> Phone : </CardText>
                                    <CardText> Email : </CardText>
                                </CardBody>
                            </Col>
                        </Row>
                        <CardFooter > 2020 - 2021 </CardFooter>
                    </Card>
                </Col>
                <Col xs="6" sm="4">
                    <Card className="  mt-5">
                        <CardHeader className="text-center">Cart Youcoder</CardHeader>
                        <Row>
                            <Col xs="5">
                                <CardImg width="100%" src={Profil} alt="Card image cap" />
                            </Col>
                            <Col xs="7" className="align-self-center">
                                <CardBody >
                                    <CardTitle tag="h6">First Name :</CardTitle>
                                    <CardTitle tag="h6">Last Name :</CardTitle>
                                    <CardText> Adress : </CardText>
                                    <CardText> Phone : </CardText>
                                    <CardText> Email : </CardText>
                                </CardBody>
                            </Col>
                        </Row>
                        <CardFooter > 2020 - 2021 </CardFooter>
                    </Card>
                </Col>
                <Col xs="6" sm="4">
                    <Card className="  mt-5">
                        <CardHeader className="text-center">Cart Youcoder</CardHeader>
                        <Row>
                            <Col xs="5">
                                <CardImg width="100%" src={Profil} alt="Card image cap" />
                            </Col>
                            <Col xs="7" className="align-self-center">
                                <CardBody >
                                    <CardTitle tag="h6">First Name :</CardTitle>
                                    <CardTitle tag="h6">Last Name :</CardTitle>
                                    <CardText> Adress : </CardText>
                                    <CardText> Phone : </CardText>
                                    <CardText> Email : </CardText>
                                </CardBody>
                            </Col>
                        </Row>
                        <CardFooter > 2020 - 2021 </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default AllCarts
