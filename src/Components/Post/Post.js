import React from 'react';

import './Post.scss';

const Post = ({
    user,
    content,
    id,
    comments,
    isShown,
    getFilteredComments,
    filteredComments }) => {


    return (
        <div className="post">

            <div className="post__author">User name: {user}</div>
            <div className="post__content">{content}</div>
            <div onClick={() => getFilteredComments(id, comments)} className="post__comment">
                {isShown['post' + id] ? 'Hide comments' : 'See comments'}
            </div>
            {isShown['post' + id] ?
                    filteredComments.map((com) => {
                        return (
                            <>
                        <div className="post__email"> {com.email} </div>
                        <div className="post__body"> {com.body} </div>
                            </>
                        )
                    })
                : null}
        </div>
    );
};

export default Post;
