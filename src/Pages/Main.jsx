import "../Pages/Main.css"
import Video1 from '../content/video/mainVideo.webm'
import Video2 from '../content/video/mainVideo.mp4'
import { Link } from 'react-router-dom'

const Main = () => {
 
  return (
    <div className = "Main_content">
      <div className = "Main_menu">
        <Link to="/">Main</Link>
        <Link to="/Gallery.jsx">Gallery</Link>
        <Link to="/Artists">Artists</Link>
        <Link to="/LogIn">Log in</Link>
      </div>
      <div className = "Main_video">
        <div className="Main_video_text">
          <div className="Main_video_text_title">American Art</div>
          <div className="Main_video_text_text">Gallery</div>
        </div>
        <div className="Main_video_video">
          <video autoplay="autoplay" muted loop preload="auto" class="video__item"   >
            <source src={Video1} type="video/webm" />   
            <source src={Video2} type="video/mp4" />    
          </video>
        </div>
      </div>
    </div>
      
           
  )
  
}



export default Main;