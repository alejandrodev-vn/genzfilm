import { CommentsContext } from 'contexts/CommentsContext';
import React, { useContext, useEffect, useState } from 'react';
import FormAddComment from './FormAddComment';
import ItemComment from './ItemComment';
 
Comment.propTypes = {
    
};

function Comment(props) {
    const { idFilm } = props
    const [ isShowComment, setIsShowComment ] = useState(true)
    const { listComments, addComment } = useContext(CommentsContext)
    const [ comments, setComments ] = useState([])
    const handleClickToDisplayComment = () => {
        setIsShowComment(!isShowComment)
    }
    useEffect(() =>{
        const getCommentByIdFilm = () => {
            const filterComments = listComments.filter(comment => comment.idFilm === idFilm)
            setComments(filterComments)
        }
        if(idFilm && listComments.length){
            getCommentByIdFilm()
        }
    },[idFilm, listComments])
    const onSubmitComment = (values) => {
        addComment({
            ...values, 
            idFilm
        })
    }
    return (
        <div className="row d-flex justify-content-center mt-5 mb-5">
            <div className="col-md-10">
                <div className="headings d-flex justify-content-between align-items-center mb-3">
                    <h3 className="title">Bình luận ({comments.length})</h3>
                    <div className="buttons"> 
                        <span className="badge bg-white d-flex flex-row align-items-center"> 
                            <label className="text-primary flex align-items-center">Hiển thị Bình luận
                                <div className="form-check form-switch"> 
                                    <input 
                                        className="form-check-input" 
                                        onClick={handleClickToDisplayComment} 
                                        type="checkbox" 
                                        defaultChecked={isShowComment}
                                        id="flexSwitchCheckChecked"  
                                    /> 
                                </div>
                            </label>
                        </span> 
                    </div>
                </div>
                <div style={(isShowComment) ? {display:"block"} : {display: "none"}}>
                    {comments.map((comment,index)=>{
                        return(
                           <ItemComment comment={comment} key={index} />
                        )
                    })}
                    <div className="comment p-3 mt-3">
                        <h6 style={{fontWeight: 'bold'}}>Thêm bình luận</h6>
                        <FormAddComment onSubmitComment={onSubmitComment} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;