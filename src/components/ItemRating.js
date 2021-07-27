/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
const ItemRating = ({item}) => {
    return ( 
        <Link className="aside-list__item" to={`/genzfilm/film/${item.id}`} style={{marginBottom: "15px"}}>
            <img src={item.imageUrl} alt="chart-item" width="100%" height="120px"/>
            <span className="aside-list__item-title">{item.name}</span>
        </Link>
     );
}

ItemRating.propTypes = {

}

export default ItemRating;