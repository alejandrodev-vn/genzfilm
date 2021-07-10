/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Item from './Item'
import '../css/carousel.css';

const Carousel = ({title, listFilms, listCategories}) => {
    const [ translate, setTranslate ] = useState({translateX:0})
    function prevSlide(){
        if(translate.translateX === 0){
            setTranslate({
                translateX:-245*3
            })
        }else  setTranslate({
            translateX:translate.translateX+245
        })
    }
    function nextSlide(){
        if(translate.translateX < -245*3){
            setTranslate({
                translateX:0
            })
        }else setTranslate({
            translateX:translate.translateX-245
        })
    }
    const processCarousel = () => {
        let html = <div className="carousel" style={{transform: `translateX(${translate.translateX}px)`}}>
                       {listFilms.map((film,key) => {
                           return(<Item film={film} listCategories={listCategories} key={key} />)
                        })}
                    
                    </div>
        return html
    }
    return (
        <section className="carousel-section">
            <div className="title-wrapper">
                <h2 className="title">{title}</h2>
                <a href="#">Xem tất cả <i className="fas fa-arrow-right"></i></a>
            </div>
            <div className="carousel-wrapper">
                <div className="previous" onClick={prevSlide}><i className="fas fa-arrow-left"></i></div>
                <div className="carousel-wrapper__slide">
                    {processCarousel()}
                </div>
               
                <div className="next" onClick={nextSlide}><i className="fas fa-arrow-right"></i></div>
        
            </div>  
        </section>
        
     );
   
}


export default Carousel;