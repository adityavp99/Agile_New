import React from "react";
import { Link } from "react-router-dom";

//Importing CSS for track order page
import trackOrderCSS from "./Trackorder.module.css";

//Importing order progress pics
import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p4 from "./p4.png";
import p5 from "./p5.png";
import p6 from "./p6.png";

//Track order page function containing JSX code
function TrackOrderPage() {
  return (
    //Page Wrapper (Green area)
    <section className={trackOrderCSS.Green}>
      {/* Wrapper containing page contents(grey area) */}
      <div className={trackOrderCSS.Yellow}>
        {/* header*/}
        <div className={trackOrderCSS.Header}>
          <div className={trackOrderCSS.SmallLine}></div>
          <h1 className={trackOrderCSS.text}>Order No.</h1>
          <h1 className={trackOrderCSS.text}>#Number</h1>
          <div className={trackOrderCSS.LongLine}></div>
        </div>

        {/* Circles to show progress*/}
        <div className={trackOrderCSS.progress}>
          <div className={trackOrderCSS.progLine}>
            <div className={trackOrderCSS.circle1}></div>
            <img src={p1} alt="take order" className={trackOrderCSS.images} />
          </div>

          <div>
            <div className={trackOrderCSS.circle2}></div>
            <img src={p2} alt="order confirmed" className={trackOrderCSS.images}/>
          </div>

          <div>
            <div className={trackOrderCSS.circle3}></div>
            <img src={p3} alt="order in process" className={trackOrderCSS.images} />
          </div>

          <div className={trackOrderCSS.progLine}>
            <div className={trackOrderCSS.circle4}></div>
            <img
              src={p4}
              alt="order waiting collected"
              className={trackOrderCSS.images}
            />
          </div>

          <div>
            <div className={trackOrderCSS.circle5}></div>
            <img src={p5} alt="order on the way" className={trackOrderCSS.images} />
          </div>

          <div>
            <div className={trackOrderCSS.circle6}></div>
            <img src={p6} alt="order delivered" className={trackOrderCSS.images} />
          </div>
        </div>

        {/* Estimated Time label*/}
        <div div className={trackOrderCSS.Header}>
          <div className={trackOrderCSS.LongLine2}></div>
          <h1 className={trackOrderCSS.text}>Estimated Time: </h1>
          <h1 className={trackOrderCSS.text}> 00:00:00</h1>
          <div className={trackOrderCSS.SmallLine}></div>
        </div>

        {/* End notes text*/}
        <div className={trackOrderCSS.footer}>
          <div className={trackOrderCSS.footer1}>
            <p className={trackOrderCSS.thanks}>
              Thank you for ordering with <b>TakeOut!</b>
            </p>
          </div>
          <div className={trackOrderCSS.footer2}>
            <p>Your receipt has been sent to your email.</p>
            <Link to="/orderhistory" className={trackOrderCSS.link}>
              <h4 className={trackOrderCSS.orderHist}>Order History</h4>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrackOrderPage;
