import React from 'react';

import './Comments.scss';

const Comments = ({ post, createComment, addComment, myCommentsSeeHandler }) => {
    return (
        <div className="comments">
            {
            post.comments.seeComments ?
            <>
            <div className="comments__content">
                {post.comments.map((comment) => {
                    return (
                        <div className="comments__comment">
                            <div className="comments__author"> {comment.author} </div>
                            <div className="comments__content"> {comment.content} </div>
                        </div>
                    )
                })}
            </div>
            <div className="myPost__edit">
                <textarea
                    className="myPost__input"
                    name={[post.id]}
                    onChange={createComment}
                    value={post.commentEdit}>
                </textarea>
                <div
                    onClick={() => addComment(post.id)}
                    className="material-icons myPost__icon"
                >
                    add
                </div>
            </div>
            </> : null
}

        </div>
    );
};

export default Comments;
