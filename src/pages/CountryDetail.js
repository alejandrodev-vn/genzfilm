/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Aside from 'components/Aside';
import Breadcrumb from 'components/Breadcrumb';
import Item from 'components/Item';
import Loading from 'components/Loading';
const CountryDetail = ({match}) => {
    const [ country, setCountry ] = useState({})
    const [ listFilms, setListFilms ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const domain = process.env.REACT_APP_DOMAIN
    const { id } = match.params
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
          title: 'Quốc gia',
          link:'country',
          isActive: false
        },
        {
          title: country.name,
          link:country.id,
          isActive: true
        },
      ]
    useEffect(() =>{
        const getListFilm = async () => {
            try {
               const res = await fetch(`${domain}/films`) 
               const data = await res.json()
               let result = []
               for(let i = 0; i < data.length; i++){
                    if(data[i].country === parseInt(id)){
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
        const getCountry = async () => {
            try {
               const res = await fetch(`${domain}/countries/${id}`) 
               const data = await res.json()
               setCountry(data)
            } catch (error) {
                console.log(error)
            }
        }
        getCountry()
        return () => {
            setListFilms([])
            setCountry({})
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
                    <h1 className="title">Thể loại: {country.name}</h1>
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

        <h1 className="title">Quốc gia: {country.name}</h1>
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
CountryDetail.propTypes = {
    
};

export default CountryDetail;