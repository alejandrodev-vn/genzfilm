/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import Aside from 'components/Aside';
import Breadcrumb from 'components/Breadcrumb';
import Item from 'components/Item';
import Loading from 'components/Loading';
import { FilmsContext } from 'contexts/FilmsContext';


const FilmTheater = () => {
    const { listFilms } = useContext(FilmsContext)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ listFilmsTheater, setListFilmsTheater ] = useState([]) 
    const listBreadcrumb = [
        {
          title: 'Trang chủ',
          link:'',
          isActive: false
        },
        {
          title: 'Phim chiếu rạp',
          link:'film-theater',
          isActive: true
        }
        
      ]
    useEffect(() =>{
        const getFilmsTheater = () => {
            let result = []
            if(listFilms.length !== 0){
                listFilms.forEach(film => {
                    if(film.typeId === 3) result.push(film)
                });
            }
            setListFilmsTheater(result)
            setIsLoading(false)
        }
        getFilmsTheater()
    },[listFilms])
    
    if(isLoading){
        return (
          <Loading />
        )
    }
    return (
        <div className="container pt-3">
            <div className="row">
            <Breadcrumb listBreadcrumb={listBreadcrumb} />
                <h1 className="title">Film chiếu rạp</h1>
                <main className="col-md-9 pt-3 film-wrapper">
                    {listFilmsTheater.map((film,key) => {
                          return(
                            <Item
                              film={film} 
                              key={key}             
                            />
                          )
                        })}
                </main>
                <div className="col-md-3 pt-3">
                    <Aside />
                </div>
            </div>
        </div>
    );
}
FilmTheater.propTypes = {
    
};

export default FilmTheater;