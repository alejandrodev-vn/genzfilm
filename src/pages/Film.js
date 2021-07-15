import React, { useState, useEffect } from 'react';
import Item from '../components/Item'
import Aside from '../components/Aside'


const Film = () => {
    const [ listFilms, setListFilms ] = useState([])
    const [ listCategories, setListCategories ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    useEffect(() =>{
        const getCategories = async () => {
            try{
              const res = await fetch('http://localhost:4000/categories')
              const data = await res.json()        
              setListCategories(data) 
            }catch(err){
              console.log(err)
            }
          }
          getCategories()
          const getListFilms = async () => {
            try{
              const res = await fetch('http://localhost:4000/films')
              const data = await res.json()
              setListFilms(data) 
              setIsLoading(false)
            }catch(err){
              console.log(err)
            }
            
          }
          getListFilms()
    
    },[])
    if(isLoading){
        return (
            <div className="container">
                <div className="row">
                    <h2>Loading...</h2>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row">
                <h1 className="title">Tất cả Film</h1>
                <main className="col-md-9 pt-3 film-wrapper">
                    {listFilms.map((film,key) => {
                           return(<Item film={film} listCategories={listCategories} key={key} />)
                        })}
                </main>
                <div className="col-md-3 pt-3">
                    <Aside />
                </div>
            </div>
        </div>
    );
}
Film.propTypes = {
    
};

export default Film;