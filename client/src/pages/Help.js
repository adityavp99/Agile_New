//FontAwesome Icons for Contact Info
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

//CSS
import helpCSS from "./Help.module.css";

function HelpPage() {
  return (
    <div className={helpCSS.wrapper}>
      <div className={helpCSS.mainContainer}>
        <h1 className={helpCSS.title}>Help </h1>
        <h2 className={helpCSS.faqTitle}>FAQ </h2>

        {/*FAQ Container  */}
        <div className={helpCSS.faqContainer}>
          <div>
            {/* Individual Question */}
            <details className={helpCSS.faqSegment}>
              <summary className={helpCSS.faqQuestion}>
                How do I make a payment?
              </summary>
              <p className={helpCSS.faqAnswer}>
                You can pay using either credit card or cash.You may add the
                cards you would like to pay with in the <b>Edit Profile Page</b>
                .
              </p>
            </details>
            <details className={helpCSS.faqSegment}>
              <summary className={helpCSS.faqQuestion}>
                I cannot find the food or restaurant that I like
              </summary>
              <p className={helpCSS.faqAnswer}>
                Thank you for your patience and continuous support. We will
                continue to work hard and add more cuisines and restaurants
                soon! You can also email us the details of the restaurant that
                you would like to add on our platfrom.
              </p>
            </details>
            <details className={helpCSS.faqSegment}>
              <summary className={helpCSS.faqQuestion}>
                What are your delivery fees?
              </summary>
              <p className={helpCSS.faqAnswer}>
                Our delivery fees are calculated based on distance between the
                pick-up and drop-off locations and the respective delivery
                partner that you choose for the selected order.
              </p>
            </details>
            <details className={helpCSS.faqSegment}>
              <summary className={helpCSS.faqQuestion}>
                How do I check where my order is?
              </summary>
              <p className={helpCSS.faqAnswer}>
                You can check the status of your order on the <b>Track Order</b>{" "}
                page. If you face any issues with the delivery, kindly contact
                our customer support team via any of the options provided below
                in the <b> Contact Us</b> section.
              </p>
            </details>
            <details className={helpCSS.faqSegment}>
              <summary className={helpCSS.faqQuestion}>
                What will happen if I have an outstanding query or complaint?
              </summary>
              <p className={helpCSS.faqAnswer}>
                Our customer care team is on hand to support our customers with
                any outstanding queries or complaints. We are experiencing high
                demand but all outstanding queries and complaints will be dealt
                with promptly.
              </p>
            </details>
          </div>
        </div>

        {/* Enuiry/ Feedback Form  */}
        <form>
          <div className={helpCSS.email}>
            <h2 className={helpCSS.emailHeader}>Enter your email</h2>
            <input type="text" className={helpCSS.userEmail} />
          </div>
          <div className={helpCSS.feedback}>
            <h2 className={helpCSS.feedbackHeader}>Feedback</h2>
            <input type="text" className={helpCSS.feedbackArea} />
            <button type="reset" className={helpCSS.submit}>
              Submit
            </button>
          </div>
        </form>
        
        {/* Contact Us Section */}
        <div className={helpCSS.contactUs}>
          <div className={helpCSS.phone}>
            <FontAwesomeIcon
              icon={faPhone}
              size="2x"
              className={helpCSS.faIcon}
            />
            <p className={helpCSS.phoneText}>+65 9754 2258, +65 6339 4578</p>
          </div>
          <div className={helpCSS.envelope}>
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className={helpCSS.faIcon}
            />
            <p className={helpCSS.emailText}> support.takeout@gmail.com</p>
          </div>
          <div className={helpCSS.location}>
            <FontAwesomeIcon
              icon={faLocationDot}
              size="2x"
              className={helpCSS.faIcon}
            />
            <p className={helpCSS.locationText}>
              229 Rochor Road, Singapore: 188 452
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;
