import React, { useState, useContext } from 'react'
import { Col, Container, Row, Button, Form, FormGroup, Label, Input, Card, CardHeader, CardBody, Alert } from 'reactstrap'
import Image from '../images/world.png'
import { UserContext } from '../Context/ContextUser'
import axios from 'axios'
axios.defaults.withCredentials = true

const Login = (props) => {
    const {setAuthe} = useContext(UserContext)
    const [form, setForm] = useState({email : '', password : ''})
    const [message, setMessage] = useState('')
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const data = await axios.post('http://localhost:8000/api/login', form, { withCredentials: true })
            if(data) {
                console.log(data, "login");
                setAuthe(data.data)
            }
        } catch (error) {
            console.log(error);
            setMessage(error.response.data.message)
        }
    }
    return (
        <Container>
            <Row >
                <Col xs="7" className="align-self-center">
                    {message ?  <Alert color="info"> {message} </Alert> : null}

                    <Card className="mt-5 shadow p-3 bg-body rounded ">
                        <CardHeader>register</CardHeader>
                        <CardBody className="mt-1">
                            <Form form className="container" onSubmit={handleSubmit}>
                                <FormGroup className="mt-3">
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Please Enter Your Email" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup className="mt-3">
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Please Enter Your Password" onChange={handleChange} />
                                </FormGroup>
                               
                                <Button className="mt-3" type="submit">Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="5">
                    <img src={Image} alt="IMG" style= {{width : "120%"}} className="mt-5" />
                </Col>
            </Row>
        </Container>
    )
}

export default Login
