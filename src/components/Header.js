/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CategoriesContext } from '../contexts/CategoriesContext';
import { CountriesContext } from '../contexts/CountriesContext';
import { ListLikeContext } from '../contexts/ListLikeContext';
import { AuthContext } from '../contexts/AuthContext';
const Header = () => {
    const { listCategories } = useContext(CategoriesContext)
    const { listCountries } = useContext(CountriesContext)
    const { listLike } = useContext(ListLikeContext)
    const { userInfo, isLogged, handleLogout } = useContext(AuthContext)
    const handleClickLogout = (e) => {
        e.preventDefault()
        handleLogout()
    }
    let buttonLogin
    if(isLogged) {
        buttonLogin =<>
                        <p className="nav-link" style={{paddingRight: 15, color:'#abb7c4'}}>{userInfo.fullname}</p>
                        <Link className="nav-link" onClick={handleClickLogout} style={{paddingRight: 15, color:'#abb7c4'}} to="/genzfilm">
                            Đăng xuất
                        </Link>
                    </>
    }else {
        buttonLogin = <NavLink className="nav-link"  style={{paddingRight: 15, color:'#abb7c4'}} to="/genzfilm/login">
                        Đăng nhập
                    </NavLink>
    }
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
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{paddingRight: 15}} to="/genzfilm/favourite">
                                Phim yêu thích 
                                <span 
                                    style={{color: 'tomato', position: 'absolute', top: 0, right: 3}}
                                > {listLike.length}</span>
                            </NavLink>
                        </li>
                
                    </ul>
                </div>
                <NavLink className="nav-link" style={{paddingRight: 15, color:'#abb7c4'}} to="/genzfilm/baocao">
                    Báo cáo
                </NavLink>
                {buttonLogin}
                {/* <div className="search-wrapper">
                    <form action="search">
                        <div className="search-bar">
                            <input type="text" className="form-control" placeholder="Tìm kiếm phim..."/>
                            <button type="submit"><i className="fas fa-search"></i></button>
                        </div>
                      
                    </form>
                </div> */}
            </nav>
        </header>
    )
}
Header.propsTypes = {

}
export default Header;
