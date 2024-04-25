import React, { useEffect } from 'react';
import "../Gallery/Albert.css"

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
                <div className='frame'>12</div>
                <div className='frame'>23</div>
                <div className='frame'>345555</div>
                <div className='frame'>466666666666</div>
                <div className='frame'>511</div>
                <div className='frame'>61</div>
            </section>
        </div>
    </div> 
        )
}

export default Albert