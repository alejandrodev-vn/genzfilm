import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Aside from 'components/Aside';
import Breadcrumb from 'components/Breadcrumb';
import { CategoriesContext } from 'contexts/CategoriesContext';
const Genre = ({match}) => {
    const { listCategories } = useContext(CategoriesContext)
    const listBreadcrumb = [
        {
          title: 'Trang chủ',
          link:'',
          isActive: false
        },
        {
          title: 'Thể loại',
          link:'genre',
          isActive: true
        }
        
      ]
    return (
        <div className="container pt-3">
            <div className="row">
            <Breadcrumb listBreadcrumb={listBreadcrumb} />
            <h1 className="title">Thể loại</h1>

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