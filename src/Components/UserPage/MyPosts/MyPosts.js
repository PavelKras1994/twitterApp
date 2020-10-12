import React from 'react';

import './MyPosts.scss';
import MyPost from './MyPost/MyPost';

const MyPosts = ({ myPosts, delMyPost, changeMyPost, editMyPost, updateMyPost, createComment, addComment, myCommentsSeeHandler }) => {
    return (
        
        <div className="myPosts">
            {
            myPosts.map((post) => {
                return (
                    <MyPost 
                        post={post}
                        delMyPost={delMyPost}
                        changeMyPost={changeMyPost}
                        editMyPost={editMyPost}
                        updateMyPost={updateMyPost}
                        createComment={createComment}
                        addComment={addComment}
                        myCommentsSeeHandler={myCommentsSeeHandler}
                    />
            )


            })
            }
        </div>
    );
};

export default MyPosts;
