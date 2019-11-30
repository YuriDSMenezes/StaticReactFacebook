import React from 'react';
import './index.css';
function PostHeader({ author, date, content }) {
  return (
    <div className="post-header">
      <div className="header-avatar">
        <img src={author.avatar}></img>
        <div className="header-author">
          <p>{author.name}</p>
          <small>{date}</small>
        </div>
      </div>
      <div className="header-content">
        <p>{content}</p>
      </div>
      </div>
  )
}

function PostComments({comment}) {
  return (
    <div className="post-content">
      {comment.map(c => (
        <div className="content-main" key={c.id}>
          <img src={c.author.avatar}></img>
          <p>{c.content}</p>
        </div>
      ))}
    </div>
  )
}

function PostItem({ author, date, content,comment }) {
  return (
    <div className='post-item'>
      <PostHeader author={author} date={date} content={content} />
      <PostComments comment={comment} />
    </div>
  )

}

export default PostItem;