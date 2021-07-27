/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CategoriesContext } from '../contexts/CategoriesContext';
import { CountriesContext } from '../contexts/CountriesContext';
const Header = () => {
    const [ listCategories ] = useContext(CategoriesContext)
    const [ listCountries ] = useContext(CountriesContext)
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-4 pe-4">
                <Link className="navbar-brand" to="/genzfilm">
                    <img width="70px" style={{
                        borderRadius:'50%',marginRight:'10px'
                        }} alt="logo" src="/genzfilm/logo.png"/>GenZ Film</Link>
                <button className="navbar-toggler" type="button" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/genzfilm/film">Tất cả</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to={`/genzfilm/genre`}>Thể loại<i className="fas fa-sort-down"></i></NavLink>
                            <ul className="nav-item__sublist">
                                {listCategories.map((category, key)=>{
                                    return (
                                        <li className="nav-item__sublist-item" key={key}>
                                            <NavLink
                                                to={`/genzfilm/genre/${category.id}`}
                                            >{category.name}</NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/genzfilm/film-hot">Hot</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to={`/genzfilm/country`}>Quốc gia<i className="fas fa-sort-down"></i></NavLink>
                            <ul className="nav-item__sublist">
                                {listCountries.map((country, key)=>{
                                    return (
                                        <li className="nav-item__sublist-item" key={key}>
                                            <NavLink
                                                to={`/genzfilm/country/${country.id}`}
                                            >{country.name}</NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/genzfilm/theater">Phim chiếu rạp</NavLink>
                        </li>
                
                    </ul>
                </div>
                <div className="search-wrapper">
                    <form action="search">
                        <div className="search-bar">
                            <input type="text" className="form-control" placeholder="Tìm kiếm phim..."/>
                            <button type="submit"><i className="fas fa-search"></i></button>
                        </div>
                      
                    </form>
                </div>
            </nav>
        </header>
    )
}
Header.propsTypes = {

}
export default Header;
