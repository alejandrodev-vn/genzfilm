/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import ItemRating from './ItemRating'
function Aside(){
 
    let listBanner = [
        {id:1,name:"Dẫu biết", nameEnglish: "Nevertheless", link: "#", imageUrl:"https://media.voocdn.com/media/image/id/60d3ec2e0df938e92e608545"},
        {id:2,name:"Vua hải tặc", nameEnglish: "One Piece", link: "#", imageUrl:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8254d2be-461b-4f09-a664-cf161192e0b7/d60prj8-c99adb56-3a25-40a8-9388-59f4018982dd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyNTRkMmJlLTQ2MWItNGYwOS1hNjY0LWNmMTYxMTkyZTBiN1wvZDYwcHJqOC1jOTlhZGI1Ni0zYTI1LTQwYTgtOTM4OC01OWY0MDE4OTgyZGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZXqiD3SjRYmRnnNtqIqGMmBQT5rT-OGSdxmXjyYT2W8"},
        {id:3,name:"Mật vụ K2", nameEnglish: "The K2", link: "#", imageUrl:"https://assets.glxplay.io/static/mat-danh-k2-poster_banner_landscape_21x9_2048x878_3x.jpg"},
        {id:4,name:"Ký ức kẻ sát nhân", nameEnglish: "GapDong", link: "#", imageUrl:"https://static.fptplay.net/static/img/share/video/08_09_2020/ky-uc-sat-nhan-thuyet-minh-fpt-play-banner08-09-2020_16g37-23.jpg"},
        {id:5,name:"Yêu không kiểm soát", nameEnglish: "Uncontrollably Fond", link: "#",imageUrl:"https://2cdrama.com/wp-content/uploads/2020/09/Uncontrollably-Fond-Review.jpg"},
        {id:6,name:"Hậu duệ mặt trời", nameEnglish: "Nevertheless", link: "#", imageUrl:"http://anhnendep.net/wp-content/uploads/2016/03/hinh-nen-phim-hau-due-mat-troi-Descendants-of-the-Sun-01.jpg"},
        {id:7,name:"Hồi ức", nameEnglish: "Nevertheless", link: "#", imageUrl:"https://static2.yan.vn/YanNews/2167221/202003/thong-tin-dan-dien-vien-phim-memorist-hoi-uc-yoo-seung-ho-f9c4a899.jpg"},
        {id:8,name:"Thám tử lừng danh Conan", nameEnglish: "Conan", link: "#",imageUrl :"https://khenphim.com/wp-content/uploads/2018/08/Conan-2018-Zero.the_.Enforcer-4-banner.jpg"},
      ]
      return (
        <aside className="aside data_full_widthpt-3 col-md-3">
            <h2 style={{fontWeight: 'bold'}}>Top lượt xem</h2>
            <ul className="aside-title">
                <li className="aside-title__item">128 Phim bộ</li>
                <li className="aside-title__item">39 Phim lẻ</li>
                <li className="aside-title__item">7 Hoạt hình</li>
            </ul>
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
export default Aside;
