/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import Aside from 'components/Aside';
import Banner from 'components/Banner';
import Carousel from 'components/Carousel';
import { FilmsContext } from 'contexts/FilmsContext'
const Home = () => {
    const { listNewFilms, listHotFilms } = useContext(FilmsContext)
    const [ isLoading, setIsLoading ] = useState(true)
      useEffect(() =>{
        const wating = setTimeout(() => {
          setIsLoading(false)
        },300)
        return () =>{
          clearTimeout(wating)
        }
      },[])
    
   if(isLoading){
     return (
       <>
          <Banner imageUrl="https://media.voocdn.com/media/image/id/60d3ec2e0df938e92e608545" />
          <div className="container pt-3">
            <div className="row">...Loading</div>
          </div>
       

       </>
     )
   }
    return ( 
    <>
        <Banner imageUrl="https://media.voocdn.com/media/image/id/60d3ec2e0df938e92e608545" />
        <div className="container" >
          <div className="row">
            <main className="col-md-9 pt-3">
                <Carousel 
                    title="Phim Hot trong tuần"
                    listFilms = {listHotFilms}
          
                />
                <Carousel 
                    title="Phim mới"
                    listFilms = {listNewFilms}
                
                />
                <Carousel 
                    title="Phim đề cử"
                    listFilms = {listNewFilms}
                
                />  
       
            </main>
            <div className="col-md-3 pt-3">
              <Aside />
            </div>
          </div> 
        </div>
    </>
    );
}
Home.propTypes = {
  
}
export default Home;