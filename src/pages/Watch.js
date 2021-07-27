/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Aside from '../components/Aside'
const Watch = ({match}) => {
    const params = new URLSearchParams(location.search)
    let url = params.get('episode')

    const [ film, setFilm ] = useState({})
    const [ allEpisodes, setAllEpisodes ] = useState([])
    const [ currentEpisode, setCurrentEpisode ] = useState({})
   
    useEffect(()=>{
        const getFilmDetail = async () =>{
            const res = await fetch(`http://localhost:4000/films/${match.params.id}`)
            const data = await res.json()
            setFilm(data)
            setAllEpisodes(data.episode)
            getCurrentEpisode(data.episode)
        }
        getFilmDetail()
        const getCurrentEpisode = async (allEpisode) => {
            if(allEpisode){
                const result = allEpisode.filter(episode=> episode.url === url)
                setCurrentEpisode(result[0])
            }
        }
    },[params.get('episode')])
    
if(!currentEpisode){
    return (
        <>
            <div className="container">
            <div className="row">
                <div className="col-md-12 pt-3">
                    <h2 className="title text-md-center">Không tìm thấy</h2>
                </div>
                </div>
            </div>
        </>
    )
}
    return ( 
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12 pt-3">
                    <div className="watch-wrapper">
                        <div className="genZ-film">
                            <iframe className="iframe" src={currentEpisode.url}></iframe>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 pt-3">
                    <h2 className="title">{film.title}{(currentEpisode.episode) ? ` - Tập ${currentEpisode.episode}` : ''}</h2>
                    <div className="episodes-wrapper">
                        <h3 className="episode-title me-3" style={
                            (currentEpisode.episode) ? {display:"block"} : {display:"none"}
                        }>Tập: </h3>
                        {allEpisodes.map((episode, key)=>{
                            if(currentEpisode.episode){
                                if(episode.episode === currentEpisode.episode){
                                    return (
                                        <Link key={key} to={`${film.id}?episode=${episode.url}`} className="episode active">{episode.episode}</Link>
                                    )
                                }
                                return (
                                    <Link key={key} to={`${film.id}?episode=${episode.url}`} className="episode">{episode.episode}</Link>
                                )
                            }
                        })}
                       
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
Watch.propTypes = {
    
}
export default Watch;