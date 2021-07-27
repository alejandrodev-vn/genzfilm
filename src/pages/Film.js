import React, { useContext } from 'react';
import Aside from '../components/Aside';
import Item from '../components/Item';
import Loading from '../components/Loading';
import { FilmsContext } from '../contexts//FilmsContext';

const Film = () => {
    const { listFilms, isLoading } = useContext(FilmsContext)
    if(isLoading){
        return (
          <Loading />
        )
    }
    return (
        <div className="container">
            <div className="row">
                <h1 className="title">Tất cả Film</h1>
                <main className="col-md-9 pt-3 film-wrapper">
                    {listFilms.map((film,key) => {
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
Film.propTypes = {
    
};

export default Film;