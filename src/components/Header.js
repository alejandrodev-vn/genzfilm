/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
function Header(){
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-4 pe-4">
                <Link className="navbar-brand" to="/">
                    <img width="70px" style={{
                        borderRadius:'50%',marginRight:'10px'
                        }} alt="logo" src="/logo.png"/>GenZ Film</Link>
                <button className="navbar-toggler" type="button" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/film">Tất cả</Link>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Thể loại<i className="fas fa-sort-down"></i></a>
                            <ul className="nav-item__sublist">
                                <li className="nav-item__sublist-item"><a href="#">Tình cảm</a></li>
                                <li className="nav-item__sublist-item"><a href="#">Hành động</a></li>
                                <li className="nav-item__sublist-item"><a href="#">Tâm lý</a></li>
                                <li className="nav-item__sublist-item"><a href="#">Khoa học viễn tưởng</a></li>
                                <li className="nav-item__sublist-item"><a href="#">Hài</a></li>
                                <li className="nav-item__sublist-item"><a href="#">Kinh dị</a></li>
                                <li className="nav-item__sublist-item"><a href="#">Phiêu lưu</a></li>
                                <li className="nav-item__sublist-item"><a href="#">Chiến tranh</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hot</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Quốc gia<i className="fas fa-sort-down"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Phim chiếu rạp</a>
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
export default Header;
