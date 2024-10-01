import React, { useState, useEffect } from 'react';
import './ImageCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const ImageCard = ({ images, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  useEffect(() => {
    // Load likes and comments from local storage
    const savedLikes = localStorage.getItem('likes');
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];

    if (savedLikes) {
      setLikes(Number(savedLikes));
      setLiked(Number(savedLikes) > 0); // Check if liked based on saved likes
    }
    setComments(savedComments);
  }, []);

  useEffect(() => {
    // Save likes and comments to local storage whenever they change
    localStorage.setItem('likes', likes);
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [likes, comments]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const toggleFullscreen = (e) => {
    const imgElement = e.currentTarget;
    if (!isFullscreen) {
      if (imgElement.requestFullscreen) {
        imgElement.requestFullscreen();
      } else if (imgElement.mozRequestFullScreen) {
        imgElement.mozRequestFullScreen();
      } else if (imgElement.webkitRequestFullscreen) {
        imgElement.webkitRequestFullscreen();
      } else if (imgElement.msRequestFullscreen) {
        imgElement.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const handleCommentInputChange = (e) => {
    setCommentInput(e.target.value);
  };

  const addComment = () => {
    if (commentInput.trim() !== '') {
      setComments((prevComments) => [...prevComments, commentInput.trim()]);
      setCommentInput(''); // Clear input after submitting
    }
  };

  return (
    <div className="image-card">
      <img
        src={images[currentIndex]} 
        alt={`Image ${currentIndex + 1}`} 
        className="image-card-img"
        onClick={toggleFullscreen}
      />
      <div className="image-card-content">
        <h3 className="image-card-title">{title}</h3>
        <p className="image-card-description">{description}</p>
      </div>
      <div className="like-container">
        <button className="like-button" onClick={toggleLike}>
          <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} className="heart-icon" />
        </button>
        <span className="like-count">{likes > 0 ? likes : ''}</span>
      </div>
      <button className="next-button" onClick={nextImage}>
        &#x3e; {/* Angle bracket icon */}
      </button>

      {/* Comment Input Section */}
      <div className="comment-container">
        <input
          type="text"
          value={commentInput}
          onChange={handleCommentInputChange}
          placeholder="Add a comment..."
          className="comment-input"
        />
        <button onClick={addComment} className="comment-button">Submit</button>
      </div>

      {/* Display Comments */}
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">{comment}</div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
 