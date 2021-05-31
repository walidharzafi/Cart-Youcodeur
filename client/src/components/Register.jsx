import React, { useState, useContext } from 'react'
import { Col, Container, Row, Button, Form, FormGroup, Label, Input, Card, CardHeader, CardBody } from 'reactstrap'
import Image from '../images/world.png'
import axios from 'axios'
import { UserContext } from '../Context/ContextUser'

const Register = (props) => {
    const {setAuthe} = useContext(UserContext)
    const initialState = { first_name : '', last_name : '', adress : '', phone :  '', email : '', password : '', role : 'User'}
    const [form, setForm] = useState(initialState)
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const data = await axios.post('http://localhost:8000/api/register',form) 
            if(data){
                console.log(data, "register");
                setAuthe(data.data)
                props.history.push('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <Row>
                <Col xs="7">
                    <Card className="mt-5 shadow p-3 bg-body rounded">
                        <CardHeader>register</CardHeader>
                        <CardBody className="mt-1">
                            <Form form className="container" onSubmit={handleSubmit}>
                                <FormGroup className="mt-3 ">
                                    <Label for="firstName">First Name</Label>
                                    <Input type="text" name="first_name" id="firstName" placeholder="Please Enter Your First Name " onChange={handleChange} />
                                </FormGroup>
                                <FormGroup className="mt-3">
                                    <Label for="lastName">Last Name</Label>
                                    <Input type="text" name="last_name" id="lastName" placeholder="Please Enter Your Last Name" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup className="mt-3">
                                    <Label for="adress">Adress</Label>
                                    <Input type="text" name="adress" id="adress" placeholder="Please Enter Your Adress" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup className="mt-3">
                                    <Label for="phone">Phone</Label>
                                    <Input type="text" name="phone" id="phone" placeholder="Please Enter Your Phone" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup className="mt-3">
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Please Enter Your Email" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup className="mt-3">
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Please Enter Your Password" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup className="mt-3">
                                    <Label for="exampleSelect">Role</Label>
                                    <Input type="select" name="role" id="exampleSelect" onChange={handleChange}>
                                    <option> </option>
                                    <option>User</option>
                                    <option>Admin</option>
                                    </Input>
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

export default Register
