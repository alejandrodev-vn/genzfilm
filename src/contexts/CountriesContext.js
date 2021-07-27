import React, { createContext, useState, useEffect } from 'react'

export const CountriesContext = createContext()

export const CountriesProvider = ({children}) => {
    const [ listCountries, setListCountries ] = useState([])
    useEffect(() =>{
        const getCountries = async () => {
            try{
              const res = await fetch('http://localhost:4000/countries')
              const data = await res.json()        
              setListCountries(data) 
            }catch(err){
              console.log(err)
            }
          }
          getCountries()
    },[])
    return (
        <CountriesContext.Provider value={[ listCountries, setListCountries ]}>
            {children}
        </CountriesContext.Provider>
    )
}
