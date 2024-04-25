import React, { useEffect } from 'react';
import "../Gallery/Albert.css"
import Albert1 from "../../content/img/Albert_Birshtadt/Albert1.jpg"
import Albert2 from "../../content/img/Albert_Birshtadt/Albert2.jpg"
import Albert3 from "../../content/img/Albert_Birshtadt/Albert3.jpg"
import Albert4 from "../../content/img/Albert_Birshtadt/Albert4.jpg"
import Albert5 from "../../content/img/Albert_Birshtadt/Albert5.jpg"
import Albert6 from "../../content/img/Albert_Birshtadt/Albert6.jpg"
import Albert7 from "../../content/img/Albert_Birshtadt/Albert7.jpg"
import Albert8 from "../../content/img/Albert_Birshtadt/Albert8.jpg"
import Albert9 from "../../content/img/Albert_Birshtadt/Albert9.jpg"
import Albert10 from "../../content/img/Albert_Birshtadt/Albert10.jpg"
import Albert11 from "../../content/img/Albert_Birshtadt/Albert11.jpg"
import Albert12 from "../../content/img/Albert_Birshtadt/Albert12.jpg"
import Albert13 from "../../content/img/Albert_Birshtadt/Albert13.jpg"
import Albert14 from "../../content/img/Albert_Birshtadt/Albert14.jpg"

const Albert = () => {
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
                            <img src={Albert1} alt="ure"/>    
                            <div className='picture_Title'>
                                <h3>Albert Bierstadt</h3>
                                American landscape
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className='frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_right'>
                            <div className='picture_Title'>
                            <h3>Albert Bierstadt</h3>
                            The Rocky Mountains, Lander's Peak
                            </div>
                            <img src={Albert2} alt="ure"/>    
                                                  
                        </div>
                    </div>
                </div>
                <div className='frame frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_left'>
                            <img src={Albert3} alt="ure"/>    
                            <div className='picture_Title'>
                                <h3>Albert Bierstadt</h3>
                                Mountain landscape
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className='frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_right'>
                            <div className='picture_Title'>
                            <h3>Albert Bierstadt</h3>
                            In the Sierras
                            </div>
                            <img src={Albert4} alt="ure"/>    
                                                  
                        </div>
                    </div>
                </div>
                <div className='frame frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_left'>
                            <img src={Albert5} alt="ure"/>    
                            <div className='picture_Title'>
                                <h3>Albert Bierstadt</h3>
                                Mount Corcoran
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className='frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_right'>
                            <div className='picture_Title'>
                            <h3>Albert Bierstadt</h3>
                            Indian fishing with harpoons
                            </div>
                            <img src={Albert7} alt="ure"/>    
                                                  
                        </div>
                    </div>
                </div>
                <div className='frame frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_left'>
                            <img src={Albert6} alt="ure"/>    
                            <div className='picture_Title'>
                                <h3>Albert Bierstadt</h3>
                                Beauty of Sierra Nevada
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className='frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_right'>
                            <div className='picture_Title'>
                            <h3>Albert Bierstadt</h3>
                            The Rocky Mountains, Lander's Peak
                            </div>
                            <img src={Albert8} alt="ure"/>    
                                                  
                        </div>
                    </div>
                </div>
                <div className='frame frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_left'>
                            <img src={Albert9} alt="ure"/>    
                            <div className='picture_Title'>
                                <h3>Albert Bierstadt</h3>
                                The Greatness of the Mountains
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className='frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_right'>
                            <div className='picture_Title'>
                            <h3>Albert Bierstadt</h3>
                           Merced River, Yosemite Valley
                            </div>
                            <img src={Albert10} alt="ure"/>    
                                                  
                        </div>
                    </div>
                </div>
                <div className='frame frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_left'>
                            <img src={Albert11} alt="ure"/>    
                            <div className='picture_Title'>
                                <h3>Albert Bierstadt</h3>
                                Rocky Mountains
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className='frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_right'>
                            <div className='picture_Title'>
                            <h3>Albert Bierstadt</h3>
                            Among the mountains, Sierra Nevada
                            </div>
                            <img src={Albert12} alt="ure"/>    
                                                  
                        </div>
                    </div>
                </div>
                <div className='frame frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_left'>
                            <img src={Albert13} alt="ure"/>    
                            <div className='picture_Title'>
                                <h3>Albert Bierstadt</h3>
                                A Storm in the Rocky Mountains
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className='frame'>
                    <div className=' frame__content'>
                        <div className='frame-media frame-media_right'>
                            <div className='picture_Title'>
                            <h3>Albert Bierstadt</h3>
                            Departure of an Indian War Party
                            </div>
                            <img src={Albert14} alt="ure"/>    
                                                  
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

export default Albert