import Aside from 'components/Aside';
import Breadcrumb from 'components/Breadcrumb';
import Item from 'components/Item';
import { FilmsContext } from 'contexts/FilmsContext';
import { ListLikeContext } from 'contexts/ListLikeContext';
import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';


const Favourite = () => {
    const { listLike } = useContext(ListLikeContext)
    const { listFilms } = useContext(FilmsContext)
    const [ listFilmsFavourite, setListFilmsFavourite ] = useState([])
    useEffect(()=>{
        const getListFilmsFavourites = async () => {
            const filterArr = await listLike
            .map(item => {
                const findItem = listFilms.find(film=> parseInt(item) === film.id)
                return findItem
            })
            setListFilmsFavourite(filterArr)
        }
        if(listFilms.length){
          getListFilmsFavourites()
        }
    },[listFilms, listLike])
    const [ pageNumber, setPageNumber ] = useState(0)
    const filmsPerPage = 20
    const pagesVisited = pageNumber * filmsPerPage
    const displayFilms = listFilmsFavourite
      .slice(pagesVisited, pagesVisited + filmsPerPage)
      .map(film => {
        return(
          <Item 
            film={film} 
            key={film.id}             
          />
        )
      })
    const pageCount = Math.ceil(listFilmsFavourite.length / filmsPerPage)
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
        title: 'Film yêu thích',
        link:'favourite',
        isActive: true
      }
    ]
    return (
        <div className="container pt-3">
            <div className="row">
                <Breadcrumb listBreadcrumb={listBreadcrumb} />
                <h1 className="title">Film yêu thích ({listFilmsFavourite.length})</h1>
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
Favourite.propTypes = {
    
};
export default Favourite;