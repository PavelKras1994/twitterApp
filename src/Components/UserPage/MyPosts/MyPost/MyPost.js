import React from 'react';

import './MyPost.scss';
import Comments from './Comments/Comments';

const MyPost = ({ post, delMyPost, changeMyPost, editMyPost, updateMyPost, createComment, addComment, myCommentsSeeHandler }) => {
    return (
        <div className="myPost">
            <div className="myPost__content">
                {post.content}
            </div>
            <div className="myPost__footer">
            <div onClick={() => myCommentsSeeHandler(post.id)} className="comments__text">
                {post.comments.seeComments ? 'Hide comments' : 'See comments'}
            </div>
            <div className="myPost__ui">
                <div onClick={() => delMyPost(post.id)} className="material-icons myPost__delete ">
                    delete
                </div>
                <div onClick={() => updateMyPost(post.id)} className="material-icons myPost__editPost">
                    create
                </div>
            </div>
            </div>
            {post.isUpdating ?
                (
                    <div className="myPost__edit">
                        <textarea
                            className="myPost__input"
                            name={[post.id]}
                            onChange={editMyPost}
                            value={post.edit}>


                        </textarea>
                        <div
                            onClick={() => changeMyPost(post.id)}
                            className="material-icons myPost__icon"
                        >
                            check
                        </div>
                    </div>
                )
                : null}



                    <Comments
                        post={post}
                        createComment={createComment}
                        addComment={addComment}
                        myCommentsSeeHandler={myCommentsSeeHandler}
                    />



        </div>
    );
};

export default MyPost;
