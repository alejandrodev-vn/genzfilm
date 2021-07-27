import React, { useContext } from 'react';
import Aside from '../components/Aside';
import Breadcrumb from '../components/Breadcrumb';
import Item from '../components/Item';
import Loading from '../components/Loading';
import { FilmsContext } from '../contexts//FilmsContext';

const Film = () => {
    const { listFilms, isLoading } = useContext(FilmsContext)
    const listBreadcrumb = [
      {
        title: 'Trang chủ',
        link:'',
        isActive: false
      },
      {
        title: 'Tất cả film',
        link:'film',
        isActive: true
      }
    ]
    if(isLoading){
        return (
          <Loading />
        )
    }
    return (
        <div className="container pt-3">
            <div className="row">
                <Breadcrumb listBreadcrumb={listBreadcrumb} />
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