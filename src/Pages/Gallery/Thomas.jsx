import React, {useEffect} from "react";
import Thomas1 from "../../content/img/Thomas_Cole/Thomas1.jpg"
import Thomas2 from "../../content/img/Thomas_Cole/Thomas2.jpg"
import Thomas3 from "../../content/img/Thomas_Cole/Thomas3.jpg"
import Thomas4 from "../../content/img/Thomas_Cole/Thomas4.jpg"
import Thomas5 from "../../content/img/Thomas_Cole/Thomas5.jpg"
import Thomas6 from "../../content/img/Thomas_Cole/Thomas6.jpg"
import Thomas7 from "../../content/img/Thomas_Cole/Thomas7.jpg"
import Thomas8 from "../../content/img/Thomas_Cole/Thomas8.jpg"
import Thomas9 from "../../content/img/Thomas_Cole/Thomas9.jpg"
import Thomas10 from "../../content/img/Thomas_Cole/Thomas10.jpg"
import Thomas11 from "../../content/img/Thomas_Cole/Thomas11.jpg"
import Thomas12 from "../../content/img/Thomas_Cole/Thomas12.jpg"
import Thomas13 from "../../content/img/Thomas_Cole/Thomas13.jpg"
import Thomas14 from "../../content/img/Thomas_Cole/Thomas14.jpg"

const Thomas = () => {
    {
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
                                <img src={Thomas1} alt="ure"/>    
                                <div className='picture_Title'>
                                    <h3>Thomas Cole</h3>
                                    The Course of Empire - The Savage State
                                </div>                         
                            </div>
                        </div>
                    </div>
                    <div className='frame'>
                        <div className=' frame__content'>
                            <div className='frame-media frame-media_right'>
                                <div className='picture_Title'>
                                <h3>Thomas Cole</h3>
                                The Course of Empire - The Pastoral State 
                                </div>
                                <img src={Thomas2} alt="ure"/>    
                                                      
                            </div>
                        </div>
                    </div>
                    <div className='frame frame'>
                        <div className=' frame__content'>
                            <div className='frame-media frame-media_left'>
                                <img src={Thomas3} alt="ure"/>    
                                <div className='picture_Title'>
                                    <h3>Thomas Cole</h3>
                                    An Evening in Arcadia
                                </div>                         
                            </div>
                        </div>
                    </div>
                    <div className='frame'>
                        <div className=' frame__content'>
                            <div className='frame-media frame-media_right'>
                                <div className='picture_Title'>
                                <h3>Thomas Cole</h3>
                                The Course of Empire - Desolation
                                </div>
                                <img src={Thomas4} alt="ure"/>    
                                                      
                            </div>
                        </div>
                    </div>
                    <div className='frame frame'>
                        <div className=' frame__content'>
                            <div className='frame-media frame-media_left'>
                                <img src={Thomas5} alt="ure"/>    
                                <div className='picture_Title'>
                                    <h3>Thomas Cole</h3>
                                    View from Mount Holyoke, Northampton, Massachusetts, after a Thunderstorm
                                </div>                         
                            </div>
                        </div>
                    </div>
                    <div className='frame'>
                        <div className=' frame__content'>
                            <div className='frame-media frame-media_right'>
                                <div className='picture_Title'>
                                <h3>Thomas Cole</h3>
                                The Departure
                                </div>
                                <img src={Thomas7} alt="ure"/>    
                                                      
                            </div>
                        </div>
                    </div>
                    <div className='frame frame'>
                        <div className=' frame__content'>
                            <div className='frame-media frame-media_left'>
                                <img src={Thomas6} alt="ure"/>    
                                <div className='picture_Title'>
                                    <h3>Thomas Cole</h3>
                                    The Course of Empire - Destruction
                                </div>                         
                            </div>
                        </div>
                    </div>
                    <div className='frame'>
                        <div className=' frame__content'>
                            <div className='frame-media frame-media_right'>
                                <div className='picture_Title'>
                                <h3>Thomas Cole</h3>
                                Expulsion from the Garden of Eden
                                </div>
                                <img src={Thomas8} alt="ure"/>    
                                                      
                            </div>
                        </div>
                    </div>
                    <div className='frame frame'>
                        <div className=' frame__content'>
                            <div className='frame-media frame-media_left'>
                                <img src={Thomas9} alt="ure"/>    
                                <div className='picture_Title'>
                                    <h3>Thomas Cole</h3>
                                    Voyage of Life - Childhood
                                </div>                         
                            </div>
                        </div>
                    </div>
                    <div className='frame'>
                        <div className=' frame__content'>
                            <div className='frame-media frame-media_right'>
                                <div className='picture_Title'>
                                <h3>Thomas Cole</h3>
                                Voyage of Life - Youth
                                </div>
                                <img src={Thomas10} alt="ure"/>    
                                                      
                            </div>
                        </div>
                    </div>
                    <div className='frame frame'>
                        <div className=' frame__content'>
                            <div className='frame-media frame-media_left'>
                                <img src={Thomas11} alt="ure"/>    
                                <div className='picture_Title'>
                                    <h3>Thomas Cole</h3>
                                    A Wild Scene
                                </div>                         
                            </div>
                        </div>
                    </div>
                    <div className='frame'>
                        <div className=' frame__content'>
                            <div className='frame-media frame-media_right'>
                                <div className='picture_Title'>
                                <h3>Thomas Cole</h3>
                                Voyage of Life - Maturity
                                </div>
                                <img src={Thomas12} alt="ure"/>    
                                                      
                            </div>
                        </div>
                    </div>
                    <div className='frame frame'>
                        <div className=' frame__content'>
                            <div className='frame-media frame-media_left'>
                                <img src={Thomas13} alt="ure"/>    
                                <div className='picture_Title'>
                                    <h3>Thomas Cole</h3>
                                    Mount Etna from Taormina
                                </div>                         
                            </div>
                        </div>
                    </div>
                    <div className='frame'>
                        <div className=' frame__content'>
                            <div className='frame-media frame-media_right'>
                                <div className='picture_Title'>
                                <h3>Thomas Cole</h3>
                                Il Penseroso
                                </div>
                                <img src={Thomas14} alt="ure"/>    
                                                      
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
    
}

export default Thomas