import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import './index.css';

const Instagram = ({ name, image}) => {
  return (
    <div>
      <div className="cat-gifs-container">
        <div className="cat-gifs-box">
          <div className="username-box">
            <div className="username-info">
              <img className="user-img" src={image} alt="img"/>
              <div className="location">
                <div className='username'>{name}</div>
                <div className="user-location">Plovdiv, Bulgaria</div>
              </div>
            </div>
            <div className="more">...</div>
          </div>
          <div className="cat-gif-image-box">
            <img className="cat-gif" src={image} alt="img" />
          </div>
          <div className="icons">
            <div className="icons-box">
              <div><FavoriteBorderIcon style={{color: 'white', height: '23px'}} /></div>
              <div><ChatBubbleOutlineIcon  style={{color: 'white', height: '23px'}} /></div>
              <div><SendIcon style={{color: 'white', height: '20px'}} className="send" /></div>
            </div>
            <BookmarkBorderIcon style={{ color: 'white', height: '25px' }}/>
          </div>
          <div className="likes-box">
            <img className="small-cat-gif" src={image} alt="img"/>
            <div className="likes">23 likes</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instagram;
