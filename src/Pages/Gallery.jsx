import "../Pages/Gallery.css"
import { Link } from 'react-router-dom'
import Example1 from "../../src/content/img/Gallery/Example1.jpg"
import Albert1 from "../content/img/Albert_Birshtadt/Albert-Bierstadt.png"
import Frederick from "../content/img/Frederick_Church/Frederic_Church.jpg"
import Thomas from "../content/img/Thomas_Cole/thomas-cole.png"


const Gallery = () => {
    return ( 
    <>
    <div className="Gallery__main">  
        <div className="Title__Photo">
            <img src={Example1} alt="Title"/>   
        </div>    
        <div className="Gallery__firstTitle">Hudson River 
            <span>School</span>
          
        </div>  
            <div className="Artist__column">
                <Link to="/Albert.jsx">   
                <div className="Artist_Bierstadt">
                    <img src={Albert1} alt="Albert Bierstadt" width="400px" height="500px" />
                    <span>Albert Bierstadt</span>
                </div>
                </Link>
                <Link to="/Frederick.jsx">  
                <div className="Artist_Frederick">
                    <img src={Frederick} alt="Frederick_Church" width="400px" height="500px" />
                    <span>Frederick Church</span>
                </div>
                </Link>
                <Link to="/Thomas.jsx">  
                <div className="Artist_Thomas">
                    <img src={Thomas} alt="Thomas_Cole" width="400px" height="500px"/>
                    <span>Thomas Cole</span>
                </div>
                </Link>
            </div>    
    </div>
    </>
    )
}


export default Gallery
