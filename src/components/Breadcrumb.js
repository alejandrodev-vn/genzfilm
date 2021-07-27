import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    const { listBreadcrumb } = props
    console.log(listBreadcrumb)
    const processBreadcrumb = () => {
        let html = <ol className="breadcrumb">
            {listBreadcrumb.map((breadcrumb, index) => {
                return (<li 
                            className={`breadcrumb-item ${breadcrumb.isActive ? 'active' : ''}`} 
                            key={index}
                        >
                            <Link to={`/genzfilm/${breadcrumb.link}`}>{breadcrumb.title}</Link>
                        </li>
                    )  
            })}
        </ol>
        return html
    }
    return (
        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
                {processBreadcrumb()}
        </nav>
    );
}
Breadcrumb.propTypes = {
    
};
export default Breadcrumb;