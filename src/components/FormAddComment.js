import React,{ useState, useContext } from 'react';
import PropTypes from 'prop-types'
import { AuthContext } from 'contexts/AuthContext';
const initalState = {
    id:0,
    user:'Unknown',
    content:'',
    like:0,
    createdAt:new Date()
}
const FormAddComment = (props) => {
    const { onSubmitComment } = props
    const [ comment, setComment ] = useState(initalState)
    const { userInfo } = useContext(AuthContext)
    const handleChangeValue = (e) => {
        const { name, value } = e.target
        const temp = {
            ...comment,
            [name]: value
        }
        setComment(temp)
    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        if(!onSubmitComment) return
        const newComment = {
            ...comment,
            user: userInfo.fullname || 'Unknown',
            id: Math.ceil(Math.random() * 1000000000),
            createdAt:new Date()
        }
        onSubmitComment(newComment)
        setComment(initalState)
    }
    return (
        <form onSubmit={handleSubmitForm}>
            <input 
                type="text" 
                name="content" 
                value={comment.content} 
                onChange={handleChangeValue} 
                placeholder="Nhập nội dung..." 
                style={{height: '40px', paddingLeft: '12px',borderRadius:999,outline:'none'}}
            />
        </form>
    );
}
FormAddComment.propTypes = {
    onSubmitComment: PropTypes.func
};
export default FormAddComment;