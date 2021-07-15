/* eslint-disable array-callback-return */
import useGetNameCategory from '../hooks/useGetNameCategory';
import { Link } from 'react-router-dom'
const Item = (props) => {
    const  categoriesString  = useGetNameCategory(props.film, props.listCategories)
    return ( 
        <Link className="item" to={`/film/${props.film.id}`} title={props.film.title}>
        <img src={props.film.imageUrl} alt={props.film.title} width="100%" height="300px" />
        <p className="name">{props.film.title}</p>
        <p className="name-small">{categoriesString}</p>

        </Link>
     );
  
}
Item.defaultProps = {
    film: {
        id:1,name:"Dẫu biết",
        nameEnglish: "Nevertheless", 
        imageUrl:"https://ss-images.saostar.vn/wp700/pc/1622629999364/saostar-aqx5m2w0fyfgk9ro.jpeg"
    }
}
export default Item;