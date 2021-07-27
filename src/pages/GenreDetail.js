/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Aside from '../components/Aside';
import Item from '../components/Item';
import Loading from '../components/Loading';
import useLocalStorage from '../hooks/useLocalStorage';
const GenreDetail = ({match}) => {
    const [ listFilms, setListFilms ] = useState([])
    const [ listCategories, setListCategories ] = useState([])
    const [ categoryDetail, setCategoryDetail ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    const [ listLike, setListLike ] = useLocalStorage("listLike",localStorage.getItem('listLike') || [])
    const url = "http://localhost:4000/"
    const { id } = match.params
    useEffect(() =>{
        const getListFilm = async () => {
            try {
               const res = await fetch(`${url}films`) 
               const data = await res.json()
               let result = []
               for(let i = 0; i < data.length; i++){
                    let find = data[i].categories.find(category => category.idCategory === parseInt(id))
                    if(find){
                        result.push(data[i]);
                    } 
               }
               setListFilms(result)
               setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getListFilm()
        const getListCategories = async () => {
            try {
               const res = await fetch(`${url}categories`) 
               const data = await res.json()
               setListCategories(data)
            } catch (error) {
                console.log(error)
            }
        }
        getListCategories()
        const getCategoryDetail = async () => {
            try {
               const res = await fetch(`${url}categories/${id}`) 
               const data = await res.json()
               setCategoryDetail(data)
            } catch (error) {
                console.log(error)
            }
        }
        getCategoryDetail()
    },[id])
     
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
   if(isLoading) {
       return (
            <Loading />
        );
    }
    if(!listFilms.length){
        return(
            <div className="container">
                <div className="row">
                    <h1 className="title">Thể loại: {categoryDetail.name}</h1>
                    <h3>Không có kết quả</h3>
                    <Link to="/genzfilm/genre">
                        <i className="fad fa-arrow-left"></i> Hãy tìm thế loại khác
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
        <div className="row">
        <h1 className="title">Thể loại: {categoryDetail.name}</h1>
            <main className="col-md-9 pt-3 flex film-wrapper">
                {listFilms.map((film,key) => {
                      return(
                        <Item 
                          film={film} 
                          listCategories={listCategories} 
                          key={key} 
                          listLike={listLike}
                          onLikeItem={onLikeItem}
                        />
                      )
                    })}
            </main>
            <div className="col-md-3 pt-3">
                <Aside />
            </div>
        </div>
    </div>
    )
}
GenreDetail.propTypes = {
    
};

export default GenreDetail;