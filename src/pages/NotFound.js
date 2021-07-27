import React from 'react';
import { Link } from 'react-router-dom'
NotFound.propTypes = {
    
};

function NotFound() {
    return (
        <div className="container">
            <div className="row pt-3">
                <h3 className="text-md-center">404 Error, File Not Found !</h3>
                <Link to="/genzfilm" className="text-md-center">
                    <i className="fad fa-arrow-left"></i> Quay lại
                </Link>
            </div>
        </div>
    );
}

export default NotFound;