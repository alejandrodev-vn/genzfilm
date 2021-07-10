/* eslint-disable jsx-a11y/anchor-is-valid */
const ItemRating = ({item}) => {
    return ( 
        <a className="aside-list__item" href="#" style={{marginBottom: "15px"}}>
            <img src={item.imageUrl} alt="chart-item" width="100%" height="120px"/>
            <span className="aside-list__item-title">{item.name}</span>
        </a>
     );
}
 
export default ItemRating;