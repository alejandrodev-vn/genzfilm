/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { PropTypes } from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CategoriesContext } from '../contexts/CategoriesContext';
import { ListLikeContext } from '../contexts/ListLikeContext';
import useGetNameCategory from '../hooks/useGetNameCategory';
const Item = (props) => {
    const { film } = props
    const { listCategories } = useContext(CategoriesContext)
    const { listLike , onLikeItem } = useContext(ListLikeContext)
    const [ like, setLike ] = useState(false)
    const categoriesString  = useGetNameCategory(props.film, listCategories)

    useEffect(()=>{
        const checkLike = () => {
            if(listLike.length!==0){
                const find = listLike.find(item => parseInt(item) === props.film.id)
                if(find){
                    setLike(true)
                }
            } 
        }
        checkLike()    
    },[])
    const handleLike = (e) => {
        e.preventDefault()
        setLike(!like)
        if(!onLikeItem) return
        onLikeItem(e.target.dataset.id)
    }
    const isLike = () => {
        if(!like) return {color: "#eee"}
        return {color:"deeppink"}
    }
    return ( 
        <Link className="item" to={`/genzfilm/film/${film.id}`} title={film.title}>
            <img src={film.imageUrl} alt={film.title} width="100%" height="300px" />
            <p className="name">{film.title}</p>
            <p className="name-small">Thể loại: {categoriesString}</p>
            <div className="btn-like" style={isLike()}>
                <i className="fal fa-heart-circle" data-id={film.id} onClick={handleLike}></i>
            </div>
        </Link>
    );
}
Item.propTypes = {
    onLikeItem: PropTypes.func,
}
Item.defaultProps = {
    film: {
        id:1,
        title:"Dẫu biết",
        categories: [{idCategory: 1}], 
        imageUrl:"https://ss-images.saostar.vn/wp700/pc/1622629999364/saostar-aqx5m2w0fyfgk9ro.jpeg"
    }
}
export default Item;