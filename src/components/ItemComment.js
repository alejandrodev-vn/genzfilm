import React from 'react';

const ItemComment = (props) => {
    const { comment } = props
    return (
        <div className="comment p-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center"> 
                    <img src="https://i.imgur.com/hczKIze.jpg" width="30" className="user-img rounded-circle mr-2" alt="comment" /> 
                    <span className="comment__main">
                        <small className="user">{comment.user}</small> 
                        <small className="content">{comment.content}</small>
                    </span> 
                </div> 
                <small>{`${comment.createdAt.getDay()}/${comment.createdAt.getMonth()+1}/${comment.createdAt.getFullYear()}`}</small>
            </div>
            <div className="action d-flex justify-content-between mt-3 align-items-center">
                <div className="reply px-4"> <small>Like <i className="fal fa-thumbs-up"></i></small><span className="numbers-like">56</span></div>
                <div className="icons align-items-center"> <i className="fa fa-star text-warning"></i> <i className="fa fa-check-circle-o check-icon"></i> </div>
            </div>
        </div>
    );
}

ItemComment.propTypes = {
    
};

export default ItemComment;