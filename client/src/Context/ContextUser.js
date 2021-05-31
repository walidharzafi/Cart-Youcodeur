import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {
    const [authe, setAuthe] = useState({isAuth : false, role : ''})
    const getData = async () => {
        try {
            const {data} = await axios.get('http://localhost:8000')
            if(data){
                console.log("message", data);
                setAuthe(data);
            }
        } catch (error) {
            console.log(error)
        }
       
    }
    useEffect(() => {
        getData()
    }, [])
    return(
        <UserContext.Provider value = {{ authe, setAuthe }}>
            {children}
        </UserContext.Provider>
    )
}