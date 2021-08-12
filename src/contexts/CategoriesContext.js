/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react'

export const CategoriesContext = createContext()

export const CategoriesProvider = ({children}) => {
    const [ listCategories, setListCategories ] = useState([])
    const domain = process.env.REACT_APP_DOMAIN
    useEffect(() =>{
        const getCategories = async () => {
            try{
              const res = await fetch(`${domain}/categories`)
              const data = await res.json()        
              setListCategories(data) 
            }catch(err){
              console.log(err)
            }
          }
          getCategories()
    },[])
    return (
        <CategoriesContext.Provider value={{listCategories, setListCategories}}>
            {children}
        </CategoriesContext.Provider>
    )
}
