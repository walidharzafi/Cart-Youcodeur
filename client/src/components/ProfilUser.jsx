import React, {  useEffect, useState } from 'react'
import { Card,CardHeader, CardBody,  CardTitle, CardText, CardImg, CardFooter, Row, Col } from 'reactstrap'
import Profil from '../images/program.png'
import axios from 'axios'

export const ProfilUser = () => {
    const [infos, setInfos]= useState([]);
    const getInfos = async () => {
        try {
            const {data} = await axios.get('http://localhost:8000/api/infos')
            if(data){
                console.log(data)
                setInfos(data[0])
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getInfos()
    }, [])
    return (
        <div >
            <Card  className="container w-50 mt-5" >
                <CardHeader className="text-center">Cart Youcoder</CardHeader>
                <Row>
                    <Col xs="5">
                        <CardImg width="100%" src={Profil} alt="Card image cap" />
                    </Col>
                    <Col xs="7" className="align-self-center">

                        <CardBody >
                            <CardTitle tag="h5">First Name : {infos.first_name} </CardTitle>
                            <CardTitle tag="h5">Last Name : {infos.last_name} </CardTitle>
                            <CardText> Adress : {infos.adress} </CardText>
                            <CardText> Phone : {infos.phone} </CardText>
                            <CardText> Email : {infos.email} </CardText>
                        </CardBody>
                    </Col>
                </Row>
                <CardFooter > 2020 - 2021 </CardFooter>
            </Card>
        </div>
    )
}


