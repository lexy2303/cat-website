import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import './index.css';

const CatImages = ({ names }) => {

  const [catInfo, setCatInfo] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const response = await axios.get('https://cataas.com/api/cats?limit=10');
        const catInformation = response.data;
        const tags = [...new Set(response.data.flatMap(cat => cat.tags).sort())];

        setCatInfo(catInformation);
        setFilteredImages(catInformation);
        setAllTags(tags);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    if (selectedTag === '') {
      setFilteredImages(catInfo); // Reset to all images when no tag is selected
    } else {
      const filtered = catInfo.filter(cat =>
        cat.tags.map(tag => tag.toLowerCase()).includes(selectedTag.toLowerCase())
      );
      setFilteredImages(filtered);
    }
  }, [selectedTag, catInfo]);

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  return (
    <div className="main-cat-images-container">
      <div className="cat-images-box">
      <h1 className="cat-images-title">Looking to adopt?</h1>
      <div className="cat-images-subtitle">These furry friends are looking for a home</div>
      <select value={selectedTag} onChange={handleTagChange} className='select'>
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>{tag}</option>
          ))}
        </select>
        <div className="cats-container">
          {filteredImages.map((img, index) => (
            <div className="images-container">
            <div className="insta-container">
              <div className="username-container">
                <div className="username-info">
                  <img className="user-img" src={`https://cataas.com/cat/${img._id}`} alt="img"/>
                  <div className="location">
                    <div className='username'>{`adopt_${names[index]}`}</div>
                    <div className="user-location">Plovdiv, Bulgaria</div>
                  </div>
                </div>
                <div className="more">...</div>
              </div>
              <div className="cat-image-box">
                <img className="post" src={`https://cataas.com/cat/${img._id}`} alt="img" />
              </div>
              <div className="icons">
                <div className="icons-box">
                  <div><FavoriteBorderIcon style={{color: 'white', height: '23px'}} /></div>
                  <div><ChatBubbleOutlineIcon  style={{color: 'white', height: '23px'}} /></div>
                  <div><SendIcon style={{color: 'white', height: '20px'}} className="send" /></div>
                </div>
                <BookmarkBorderIcon style={{ color: 'white', height: '25px' }}/>
              </div>
              <div className="likes-container">
                <img className="users-img" src={`https://cataas.com/cat/${img._id}`} alt="img"/>
                <div className="likes">23 likes</div>
              </div>
              <div className="caption">
                <div className="users">{`adopt_${names[index]}`}</div>
                 <div className="description">
                 <div className="id">{`Id: ${img._id}`}</div>
                 <div className="size">{`Size: ${img.size}`} </div>
                 <div className="tags">{`Tags: ${img.tags}`} </div>
               </div>
              </div>
              <div className="view">View all 10 comments</div>
              <div className="comment">Add a comment...</div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatImages;
