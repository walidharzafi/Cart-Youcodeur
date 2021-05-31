import React, {useState, useEffect} from 'react'
import { Table } from 'reactstrap';
import axios from 'axios'

const Dashboard = () => {
    const [carts, setCarts] = useState([])
    const [searchUser, setSearchUser] = useState({ date : '', email : '' })
    // get all users
    const getCarts = async () => {
        try {
            const data = await axios.get('http://localhost:8000/api/users')
            if(data){
                setCarts(data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCarts()
    })

    const handleChange = (e) => {
        setSearchUser({
            ...searchUser,
            [e.target.name] : e.target.value
        })
    } 
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
           const data = await axios.post('http://localhost:8000/api/search', searchUser)
           if(data){
               console.log(data, 'carts');
               
               console.log(data.data);
               setCarts(data.data)
           } 
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="row g-3 align-items-center container">
                    <div className="col-auto">
                        <label htmlFor="date"> Date </label>
                        <input type="date" className="form-control col-auto mb-5" id='date' name="date" onChange={handleChange}  />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="email"> Email </label>
                        <input type="emai" className="form-control col-auto mb-5" id='email' name="email" onChange={handleChange} />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-success mb-4" type="submit">Search</button>
                    </div>
                </div>
            </form>
            <Table striped>
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Adress</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Is Active</th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((cart, index) => {
                        return <tr key={index}>
                        <td>{cart.first_name}</td>
                        <td>{cart.last_name}</td>
                        <td>{cart.email}</td>
                        <td>{cart.adress}</td>
                        <td>{cart.phone}</td>
                        <td>{cart.role}</td>
                        <td>{cart.active}</td>
                        </tr>
                    })} 
                </tbody>
            </Table>
        </ div>
    )
}

export default Dashboard
