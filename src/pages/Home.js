import { useState, useEffect } from 'react';
import Aside from '../components/Aside';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
const Home = () => {
    const [listNewFilms, setListNewFilms] = useState([])
    const [listHotFilms, setListHotFilms] = useState([])
    const [listCategories, setListCategories] = useState([])
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
        const getListNewFilms = async () => {
          try{
            const res = await fetch('http://localhost:4000/films')
            const data = await res.json()
            let result = []
            for(let i=data.length-1; i > data.length-9;i--){
              result.push(data[i])
            }
            setListNewFilms(result) 
          }catch(err){
            console.log(err)
          }
          
        }
        getListNewFilms()
   
        const getListHotFilms = async () => {
          try{
            const res = await fetch('http://localhost:4000/hot-films')
            const data = await res.json()
            setListHotFilms(data) 
          }catch(err){
            console.log(err)
          }
          
        }
        getListHotFilms()
      },[])
   
   
    return ( 
    <>
        <Banner imageUrl="https://media.voocdn.com/media/image/id/60d3ec2e0df938e92e608545" />
        <div className="container" >
          <div className="row">
            <main className="col-md-9 pt-3">
                <Carousel 
                    title="Phim Hot trong tuần"
                    listFilms = {listHotFilms}
                    listCategories={listCategories}
                />
                <Carousel 
                    title="Phim mới"
                    listFilms = {listNewFilms}
                    listCategories={listCategories}
                />
                <Carousel 
                    title="Phim đề cử"
                    listFilms = {listNewFilms}
                    listCategories={listCategories}
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
 
export default Home;