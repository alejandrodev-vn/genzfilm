/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Aside from '../components/Aside'
import '../css/film-detail.css'
import { getNameCategory } from '../utils/getNameCategory'
const FilmDetail = ({match}) => {
    const [ film, setFilm ] = useState({})
    const [ type, setType ] = useState({})
    const [ listCategories, setListCategories ] = useState([])
    useEffect(()=>{
        const getType = async (typeId) =>{
            const res = await fetch(`http://localhost:4000/types/${typeId}`)
            const data = await res.json()
            setType(data)
        }
        const getAllCategories = async () =>{
            const res = await fetch(`http://localhost:4000/categories`)
            const data = await res.json()
            setListCategories(data)
        }
        getAllCategories()
        const getFilmDetail = async () =>{
            const res = await fetch(`http://localhost:4000/films/${match.params.id}`)
            const data = await res.json()
            data.episodeLength = data.episode.length
            setFilm(data)
            getType(data.typeId)
        }
        getFilmDetail()
    },[match.params.id])
    const loopCat =  (cats) => {
        const temp = [];
       cats.map((cat,i) => {
            if(cat[0]){
                temp.push(cat[0].name)
            }
        })
        const result = temp.join(", ")
        return result
    }
    const getCategories = (film, listCategories) => {
        const listName =  getNameCategory(film.categories , listCategories);
        if(listName){
            return loopCat(listName)
        }
    }
   
    return ( 
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-9 pt-3">
                    <div className="info-wrapper">
                        <div className="info-title">
                            <h2 className="title text-md-center">{film.title}</h2>
                        </div>
                        <div className="info-main">
                            <div className="info-main__left">
                                <img src={film.imageUrl} />
                            </div>
                            <div className="info-main__right">
                                <div className="film-info">
                                    <p className="film-info__left">Kiểu phim: </p>
                                    <p className="film-info__right">{type.name}</p>
                                </div>
                                <div className="film-info">
                                    <p className="film-info__left">Thể loại: </p>
                                    <p className="film-info__right">{getCategories(film, listCategories)}</p>
                                    <p></p>
                                </div>
                                <div className="film-info">
                                    <p className="film-info__left">Số tập: </p>
                                    <p className="film-info__right">{film.episodeLength}</p>
                                </div>
                                <div className="film-info">
                                    <p className="film-info__left">Lượt xem: </p>
                                    <p className="film-info__right">235 <i  className="far fa-eye"></i></p>
                                </div>
                                <Link to={`/watch/${film.id}?episode=1`} className="btn btn-danger" style={{marginTop:"10px",marginBottom:"5px"}}>Xem phim</Link>
                                <div className="film-description">
                                    <h6 className="film-description__title">Tóm tắt nội dung</h6>
                                    <p className="film-description__content">{film.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pt-3">
                    <Aside />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default FilmDetail;