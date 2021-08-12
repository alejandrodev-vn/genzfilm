/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Aside from 'components/Aside';
import Breadcrumb from 'components/Breadcrumb';
import Item from 'components/Item';
import Loading from 'components/Loading';
const GenreDetail = ({match}) => {
    const [ listFilms, setListFilms ] = useState([])
    const [ category, setCategory ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
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
          title: 'Thể loại',
          link:'genre',
          isActive: false
        },
        {
          title: category.name,
          link:category.id,
          isActive: true
        },
      ]
    const domain = process.env.REACT_APP_DOMAIN
    const { id } = match.params
    useEffect(() =>{
        const getListFilm = async () => {
            try {
               const res = await fetch(`${domain}/films`) 
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
        const getCategoryDetail = async () => {
            try {
               const res = await fetch(`${domain}/categories/${id}`) 
               const data = await res.json()
               setCategory(data)
            } catch (error) {
                console.log(error)
            }
        }
        getCategoryDetail()

        //cleanup before unmount
        return () => {
            setListFilms([])
            setCategory({})
        }
    },[id])
     

   if(isLoading) {
       return (
            <Loading />
        );
    }
    if(!listFilms.length){
        return(
            <div className="container">
                <div className="row">
                    <h1 className="title">Thể loại: {category.name}</h1>
                    <h3>Không có kết quả</h3>
                    <Link to="/genzfilm/genre">
                        <i className="fad fa-arrow-left"></i> Hãy tìm thế loại khác
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div className="container pt-3">
        <div className="row">
        <Breadcrumb listBreadcrumb={listBreadcrumb} />

        <h1 className="title">Thể loại: {category.name}</h1>
            <main className="col-md-9 pt-3 flex film-wrapper">
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
    )
}
GenreDetail.propTypes = {
    
};

export default GenreDetail;