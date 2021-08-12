import React, { createContext, useState } from 'react'

export const CommentsContext = createContext()

export const CommentsProvider = ({children}) => {
    const [ listComments, setListComments ] = useState([])
    console.log(listComments)
    const addComment = (comment) => {
        const listTemp = [...listComments, comment]
        setListComments(listTemp)
    }
    return (
        <CommentsContext.Provider value={{ listComments, addComment }}>
            {children}
        </CommentsContext.Provider>
    )
}
