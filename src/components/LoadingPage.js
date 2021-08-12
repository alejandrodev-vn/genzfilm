import React from 'react';

LoadingPage.propTypes = {
    
};

function LoadingPage(props) {
    return (
        <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-inner position-relative">
                    <div className="preloader__circle"></div>
                    <div className="preloader__img pere-text">
                        <img src="/genzfilm/logo.png" alt="loading..." />
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default LoadingPage;