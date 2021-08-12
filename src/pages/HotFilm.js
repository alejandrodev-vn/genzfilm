import React, { useContext } from 'react';
import Aside from 'components/Aside';
import Breadcrumb from 'components/Breadcrumb';
import Item from 'components/Item';
import Loading from 'components/Loading';
import { FilmsContext } from 'contexts/FilmsContext';


const HotFilm = () => {
    const { listHotFilms, isLoading } = useContext(FilmsContext)
    const listBreadcrumb = [
      {
        title: 'Trang chủ',
        link:'',
        isActive: false
      },
      {
        title: 'Quốc gia',
        link:'country',
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
                <h1 className="title">Film HOT</h1>
                <main className="col-md-9 pt-3 film-wrapper">
                    {listHotFilms.map((film,key) => {
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
HotFilm.propTypes = {
    
};

export default HotFilm;