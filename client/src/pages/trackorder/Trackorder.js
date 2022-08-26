import React from 'react';

import trackOrderCSS from './Trackorder.module.css';

//import pics
import p1 from './p1.png';
import p2 from './p2.png';
import p3 from './p3.png';
import p4 from './p4.png';
import p5 from './p5.png';
import p6 from './p6.png';


function TrackOrderPage(){
    return (
        <section className={trackOrderCSS.Green}>
            <div className={trackOrderCSS.Yellow}>

                {/* header*/}
                <div className={trackOrderCSS.Header}>
                    <div className={trackOrderCSS.SmallLine}></div>
                    <h1>Order No.</h1><h1>#Number</h1>
                    <div className={trackOrderCSS.LongLine}></div>
                </div>

                {/* Progress*/}
                <div>
                    <div className={trackOrderCSS.Circle1}></div>
                    <div className={trackOrderCSS.Line1}></div>
                </div>

                {/* Icons*/}
                <div classname={trackOrderCSS.processImages}>
                    <img classname={trackOrderCSS.processImages}src={p1}/>
                </div>
            </div>
        </section>
    );
}


export default TrackOrderPage;







