import React from 'react';

import './Posts.scss';
import Post from '../Post/Post';

const Posts = ({ posts, getComments, comments, isShown, shownHandler, randomPosts, getFilteredComments, filteredComments }) => {
    return (
        <div className="posts">
            <h3> Users random posts </h3>
            <div className="posts__wrapper">
            {randomPosts.map((post) => (
                <Post 
                    key={Math.random()}
                    user={post.userId}
                    content={post.body} 
                    getComments={getComments}
                    id={post.id}
                    comments={comments}
                    isShown={isShown}
                    shownHandler={shownHandler}
                    getFilteredComments={getFilteredComments}
                    filteredComments={filteredComments}
                    />
            )
            )}
            </div>
          
        </div>
    );
};

export default Posts;
