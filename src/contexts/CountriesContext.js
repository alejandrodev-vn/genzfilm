/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react'

export const CountriesContext = createContext()

export const CountriesProvider = ({children}) => {
    const [ listCountries, setListCountries ] = useState([])
    const domain = process.env.REACT_APP_DOMAIN
    useEffect(() =>{
        const getCountries = async () => {
            try{
              const res = await fetch(`${domain}/countries`)
              const data = await res.json()        
              setListCountries(data) 
            }catch(err){
              console.log(err)
            }
          }
          getCountries()
    },[])
    return (
        <CountriesContext.Provider value={{ listCountries, setListCountries }}>
            {children}
        </CountriesContext.Provider>
    )
}
