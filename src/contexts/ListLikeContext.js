import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const ListLikeContext = createContext()

export const ListLikeProvider = ({children}) => {
    const [ listLike, setListLike ] = useLocalStorage("listLike",localStorage.getItem('listLike') || [])
    const onLikeItem = (id) => {
        const listTemp = [...listLike]
        const findItem = listTemp.find(item=> item === id)
        if(findItem){
          const index = listTemp.findIndex(item=> item === id)
          listTemp.splice(index, 1)
        }else{
          listTemp.push(id)
        }
        setListLike(listTemp)
        
    }
    return (
        <ListLikeContext.Provider value={{ listLike, onLikeItem }}>
            {children}
        </ListLikeContext.Provider>
    )
}
