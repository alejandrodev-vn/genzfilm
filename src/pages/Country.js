import Aside from 'components/Aside';
import Breadcrumb from 'components/Breadcrumb';
import { CountriesContext } from 'contexts/CountriesContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
const Country = ({match}) => {
    const { listCountries } = useContext(CountriesContext)
    const listBreadcrumb = [
        {
          title: 'Trang chủ',
          link:'',
          isActive: false
        },
        {
          title: 'Quốc gia',
          link:'country',
          isActive: true
        }
        
      ]
    return (
        <div className="container pt-3">
            <div className="row">
            <Breadcrumb listBreadcrumb={listBreadcrumb} />
            <h1 className="title">Quốc gia</h1>
                <div className="col-md-9 pt-3 genres-wrapper">
                    {listCountries.map((country,key)=>{
                        return (
                            <div className="genre" key={key}>
                                <img 
                                    src={`${country.cover}`} 
                                    width="100%" height="100px"
                                    className="card-img-top" 
                                    alt={country.name} 
                                 />
                                <Link className="genre-body"  to={`${match.path}/${country.id}`}>
                                    <span 
                                        className="btn-genre"
                                       
                                    >
                                        {country.name}
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
Country.propTypes = {
    
}; 
export default Country;