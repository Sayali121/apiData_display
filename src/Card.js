import React from 'react';

function Card({ post, onLearnMoreClick }) {
  return (
    <div className="card" onClick={() => onLearnMoreClick(post)}>
      <img src={post.thumbnail.small} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button>Learn More</button>
    </div>
  );
}

export default Card;







