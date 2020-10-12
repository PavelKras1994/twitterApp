import React from 'react';

import './UserPage.scss';
import MyPosts from './MyPosts/MyPosts';

const UserPage = ( {myPostHandler, addPost, newPost, myPosts, delMyPost, changeMyPost, editMyPost, updateMyPost, createComment, addComment,
    myCommentsSeeHandler }) => {
    return (
        <>
        <div className="userPage">
            <input 
            className="userPage__input"
            placeholder="Write something..."
            value={newPost.content}
            onChange={myPostHandler} 
            >
            
            </input>
            <button onClick={addPost} className="userPage__button"> Add </button>
            {myPosts.length !== 0 ? (<div className="userPage__myPosts"> My posts: </div>) : null}
            <MyPosts 
                myPosts={myPosts}
                delMyPost={delMyPost}
                changeMyPost={changeMyPost}
                editMyPost={editMyPost}
                updateMyPost={updateMyPost}
                createComment={createComment}
                addComment={addComment}
                myCommentsSeeHandler={myCommentsSeeHandler}
            /> 
        </div>
        </>
    );
};

export default UserPage;
