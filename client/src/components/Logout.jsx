import React, {useEffect, useContext} from 'react'
import { Redirect} from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../Context/ContextUser'

const Logout = () => {
    const { setAuthe } = useContext(UserContext);
    useEffect(() => {
        axios.get('http://localhost:8000/api/logout')
        .then((response) => {
            setAuthe(response.data)
        })
    })
    return (
        <>
            <Redirect to= '/' />
        </>
    )
}

export default Logout
