import React from 'react';

function Modal({ post, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <img src={post.thumbnail.large} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        {post.author.map(author => (
        <div class="row">
            <div class="col-4">
            <img src={author.avatar} alt={author.title} />
            </div>
            <div class="col-4">
            <h2>{author.name}</h2>
              <p>{author.role}</p>
              </div>
            
        </div>
        ))}
      </div>
    </div>
  );
}

export default Modal;
