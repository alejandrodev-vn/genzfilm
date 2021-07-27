import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import Aside from '../components/Aside'
const Genre = ({match}) => {
    const [ listCategories, setListCategories ] = useState([])
    useEffect(() =>{
        const getCategories = async () => {
            try{
              const res = await fetch('http://localhost:4000/categories')
              const data = await res.json()        
              setListCategories(data) 
            }catch(err){
              console.log(err)
            }
          }
          getCategories()
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9 pt-3 genres-wrapper">
                    {listCategories.map((category,key)=>{
                        return (
                            <div className="genre" key={key}>
                                <img 
                                    src={`/genzfilm/genres/${category.cover}`} 
                                    width="100%" height="100px"
                                    className="card-img-top" 
                                    alt={category.name} 
                                 />
                                <Link className="genre-body"  to={`${match.path}/${category.id}`}>
                                    <span 
                                        className="btn-genre"
                                       
                                    >
                                        {category.name}
                                    </span>                                
                                </Link>
                            </div>
                           
                        )
                    })}
                
                </div>
                <div className="col-md-3 pt-3">
                    <Aside />
                </div>
          
            </div>
        </div>  
    );
}
Genre.propTypes = {
    
};
export default Genre;