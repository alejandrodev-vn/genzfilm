import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Aside from 'components/Aside';
import Breadcrumb from 'components/Breadcrumb';
import Item from 'components/Item';
import Loading from 'components/Loading';
import { FilmsContext } from 'contexts//FilmsContext';

const Film = () => {
    const { listFilms, isLoading } = useContext(FilmsContext)
    const [ pageNumber, setPageNumber ] = useState(0)
    const filmsPerPage = 20
    const pagesVisited = pageNumber * filmsPerPage
    const displayFilms = listFilms
      .slice(pagesVisited, pagesVisited + filmsPerPage)
      .map(film => {
        return(
          <Item 
            film={film} 
            key={film.id}             
          />
        )
      })
    const pageCount = Math.ceil(listFilms.length / filmsPerPage)
    const handleChangePage = ({selected}) => {
      setPageNumber(selected)
    }
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
                  {displayFilms}
                  <ReactPaginate 
                    previousLabel={`Previous`}
                    nextLabel={`Next`}
                    pageCount={pageCount}
                    onPageChange={handleChangePage}
                    containerClassName={`pagination-wrapper`}
                    previousLinkClassName={`previousBtn`}
                    nextLinkClassName={`nextBtn`}
                    disabledClassName={`paginationDisabled`}
                    activeClassName={`paginationActive`}
                  />
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