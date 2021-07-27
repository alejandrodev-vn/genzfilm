/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
const Banner = (props) => {
    return (
        <div className="banner">
            <Link to="/genzfilm/film/13"
                className="banner__item">  
                <img width="100%" height="350px" 
                className="banner__item-img"
                src={props.imageUrl} alt="banner" />
            </Link>
          
        </div>
    )
}
Banner.propTypes = {
    
}
export default Banner;