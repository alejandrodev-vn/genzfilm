/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react'

export const FilmsContext = createContext()

export const FilmsProvider = ({children}) => {
    const [ listFilms, setListFilms ] = useState([])
    const [ listNewFilms, setListNewFilms ] = useState([])
    const [ listHotFilms, setListHotFilms ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true) 
    const domain = process.env.REACT_APP_DOMAIN
    useEffect(() =>{
          const getFilms = async () => {
            try{
              const res = await fetch(`${domain}/films`)
              const data = await res.json()        
              setListFilms(data) 
              setIsLoading(false)
            }catch(err){
              console.log(err)
            }
          }
          getFilms()
          const getListNewFilms = async () => {
            try{
              const res = await fetch(`${domain}/films`)
              const data = await res.json()
              let result = []
              for(let i=data.length-1; i > data.length-9;i--){
                result.push(data[i])
              }
              setListNewFilms(result) 
              setIsLoading(false)

            }catch(err){
              console.log(err)
            }
            
          }
          getListNewFilms()
          const getListHotFilms = async () => {
            try{
              const res = await fetch(`${domain}/hot-films`)
              const data = await res.json()
              setListHotFilms(data) 
              setIsLoading(false)

            }catch(err){
              console.log(err)
            }
            
          }
          getListHotFilms()
    },[])
    return (
        <FilmsContext.Provider value={{
            listFilms, setListFilms, 
            listNewFilms, setListNewFilms, 
            listHotFilms, setListHotFilms,
            isLoading, setIsLoading
        }}
        >
            {children}
        </FilmsContext.Provider>
    )
}
