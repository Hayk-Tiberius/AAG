import React, {useEffect} from "react";
import Frederick15 from "../../content/img/Frederick_Church/Frederick15.jpg"
import Frederick2 from "../../content/img/Frederick_Church/Frederick2.jpg"
import Frederick3 from "../../content/img/Frederick_Church/Frederick3.jpg"
import Frederick4 from "../../content/img/Frederick_Church/Frederick4.jpg"
import Frederick5 from "../../content/img/Frederick_Church/Frederick5.jpg"
import Frederick6 from "../../content/img/Frederick_Church/Frederick6.jpg"
import Frederick7 from "../../content/img/Frederick_Church/Frederick7.webp"
import Frederick8 from "../../content/img/Frederick_Church/Frederick8.webp"
import Frederick9 from "../../content/img/Frederick_Church/Frederick9.jpg"
import Frederick10 from "../../content/img/Frederick_Church/Frederick10.jpg"
import Frederick11 from "../../content/img/Frederick_Church/Frederick11.jpg"
import Frederick12 from "../../content/img/Frederick_Church/Frederick12.jpg"
import Frederick13 from "../../content/img/Frederick_Church/Frederick13.jpg"
import Frederick14 from "../../content/img/Frederick_Church/Frederick14.jpg"



const Frederick = () => {
    useEffect(() => {
        let zSpacing = -1000;
        let lastPos = zSpacing / 5;
        let $frames = document.getElementsByClassName('frame');
        let frames = Array.from($frames);
        let zVals = [];

        const handleScroll = () => {
            let top = document.documentElement.scrollTop;
            let delta = lastPos - top;

            lastPos = top;

            frames.forEach(function (frame, i) {
                zVals.push((i * zSpacing) + zSpacing);
                zVals[i] += delta * -5;
                let transform = `translateZ(${zVals[i]}px)`;
                let opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0;
                frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity};`);
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []); 

    
    useEffect(() => {
        window.scrollTo(0, 1);
    }, []); 
    return (
        <div className='Albert_Gallery'>
        <div className='Albert_container'>
            <section className='Albert_pictures'>
                <div className='frame frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_left'>
                            <img src={Frederick15} alt="ure"/>    
                            <div className='picture_Title'>
                                <h3>Frederick Church</h3>
                                New England Scenery
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className='frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_right'>
                            <div className='picture_Title'>
                            <h3>Frederick Church</h3>
                            Haying Near New Haven, West Rock Painting
                            </div>
                            <img src={Frederick2} alt="ure"/>    
                                                  
                        </div>
                    </div>
                </div>
                <div className='frame frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_left'>
                            <img src={Frederick3} alt="ure"/>    
                            <div className='picture_Title'>
                                <h3>Frederick Church</h3>
                                Cotopaxi
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className='frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_right'>
                            <div className='picture_Title'>
                            <h3>Frederick Church</h3>
                            The Cordilleras, Sunrise
                            </div>
                            <img src={Frederick4} alt="ure"/>    
                                                  
                        </div>
                    </div>
                </div>
                <div className='frame frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_left'>
                            <img src={Frederick5} alt="ure"/>    
                            <div className='picture_Title'>
                                <h3>Frederick Church</h3>
                                Cayambe
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className='frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_right'>
                            <div className='picture_Title'>
                            <h3>Frederick Church</h3>
                            Mt. Ktaadn
                            </div>
                            <img src={Frederick7} alt="ure"/>    
                                                  
                        </div>
                    </div>
                </div>
                <div className='frame frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_left'>
                            <img src={Frederick6} alt="ure"/>    
                            <div className='picture_Title'>
                                <h3>Frederick Church</h3>
                                Niagara Falls from the American side
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className='frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_right'>
                            <div className='picture_Title'>
                            <h3>Frederick Church</h3>
                            Grand Manan Island, Bay of Fundy
                            </div>
                            <img src={Frederick8} alt="ure"/>    
                                                  
                        </div>
                    </div>
                </div>
                <div className='frame frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_left'>
                            <img src={Frederick9} alt="ure"/>    
                            <div className='picture_Title'>
                                <h3>Frederick Church</h3>
                                Cotopaxi
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className='frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_right'>
                            <div className='picture_Title'>
                            <h3>Frederick Church</h3>
                            The Present
                            </div>
                            <img src={Frederick10} alt="ure"/>    
                                                  
                        </div>
                    </div>
                </div>
                <div className='frame frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_left'>
                            <img src={Frederick11} alt="ure"/>    
                            <div className='picture_Title'>
                                <h3>Frederick Church</h3>
                                The Heart of the Andes
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className='frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_right'>
                            <div className='picture_Title'>
                            <h3>Frederick Church</h3>
                            Niagara
                            </div>
                            <img src={Frederick12} alt="ure"/>    
                                                  
                        </div>
                    </div>
                </div>
                <div className='frame frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_left'>
                            <img src={Frederick13} alt="ure"/>    
                            <div className='picture_Title'>
                                <h3>Frederick Church</h3>
                                Twilight in the Wilderness
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className='frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_right'>
                            <div className='picture_Title'>
                            <h3>Frederick Church</h3>
                            View of Cotopaxi
                            </div>
                            <img src={Frederick14} alt="ure"/>    
                                                  
                        </div>
                    </div>
                </div>
             
                <div className='frame frame'>
                    <div className=' frame__content'>
                               
                            <div className='picture_Title'>
                                <h1>Thanks for watching</h1>
                                Made by Prus
                            </div>                         
                       
                    </div>
                </div>
                
         
            </section>
        </div>
    </div> 
    )
}

export default Frederick