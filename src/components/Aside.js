/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import ItemRating from './ItemRating'
const Aside = () =>{
    const [ listBanner, setListBanner ] = useState([])
    const url = 'http://localhost:4000/banners'
    useEffect(() =>{
        const getListBanner = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json()
                setListBanner(data)
            } catch (error) {
                console.log(error)
            }
        }
        getListBanner()
        return () => {
            setListBanner([])
        }
    },[])
      return (
        <aside className="aside data_full_widthpt-3 col-md-3">
            <h2 style={{fontWeight: 'bold'}}>Top lượt xem</h2>
            {/* <ul className="aside-title">
                <li className="aside-title__item">128 Phim bộ</li>
                <li className="aside-title__item">39 Phim lẻ</li>
                <li className="aside-title__item">7 Hoạt hình</li>
            </ul> */}
            <div className="aside-list">
                {listBanner.map((item, key)=>{
                    return (
                        <ItemRating item={item} key={key} />
                    )
                })}
            </div>

        </aside>
    )
    
}
Aside.propTypes = {
    
}

export default Aside;
