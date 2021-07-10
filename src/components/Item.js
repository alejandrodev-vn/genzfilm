/* eslint-disable array-callback-return */
import { getNameCategory } from '../utils/getNameCategory';
import { Link } from 'react-router-dom'
const Item = ({film, listCategories}) => {
    const loopCat =  (cats) => {
        let html = null;
        const temp = [];
       cats.map((cat,i) => {
            if(cat[0]){
                temp.push(cat[0].name)
            }
        })
        const result = temp.join(", ")
        html = (
            <p className="name-small">{result}</p>
        )
        return html;
    }
   const getCategories =  () => {
        const listName =  getNameCategory(film.categories , listCategories);
        return loopCat(listName)
    }
    return ( 
        <Link className="carousel-item" to={`film/${film.id}`} title={film.title}>
        <img src={film.imageUrl} alt={film.title} width="100%" height="300px" />
        <p className="name">{film.title}</p>
            {getCategories()}
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