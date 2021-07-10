/* eslint-disable jsx-a11y/anchor-is-valid */
import '../css/banner.css'
import { Link } from 'react-router-dom'
const Banner = (props) => {
    return (
        <div className="banner">
            <Link to="film/1"
                className="banner__item">  
                <img width="100%" height="350px" 
                className="banner__item-img"
                src={props.imageUrl} alt="banner" />
            </Link>
          
        </div>
    )
}
 
export default Banner;