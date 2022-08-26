//import React, { Component } from 'react';
//import Navbar from "./components/layout/Navbar";

import React from 'react';
import ReactDOM from 'react-dom/client';

//CSS
import helpCSS from './Help.module.css';
//Images
import phonepic from './helppics/phone.png';
import emailpic from './helppics/email.png';
import addresspic from './helppics/address.png';


function HelpPage(){
    return (
        <section className={helpCSS.Green}>
            <div className={helpCSS.Grey}>
                <h1>Help</h1>
                <h2>FAQ: </h2>

                {/* Accordion FAQ  */}
                <div className={helpCSS.AccordContainer}>
                    <AccordionFAQ/>
                </div>

                {/* Comment form  */}
                <div>
                    <askQuestion/>
                </div>


                <div className={helpCSS.contacts}>
                    <div>
                        <img src={phonepic} alt="phone"/><p>+65 9754 2258/ +65 6339 4578</p>
                    </div>
                    <div>
                        <img src={emailpic} alt="email"/><p> support.takeout@gmail.com</p>
                    </div>
                    <div>
                        <img src={addresspic} alt="address"/><p>229 Rochor Road, Singapore: 188 452</p>
                    </div>
                    
                </div>

            </div>
        </section>

    );
}

//Accordion Function
function AccordionFAQ() {
    return (
        <section>
            <button className={helpCSS.accordion}>How do I make payment?</button>
            <div className={helpCSS.panel}> 
                <p>You may add the cards you would like to pay with here> ****</p>
            </div>

            <button className={helpCSS.accordion}>I cannot find the food that I like.</button>
            <div className={helpCSS.panel}> 
                <p>Thank you for your patience and continuous support. We will continue to work hard and have more cuisines added to the list.</p>
            </div>

            <button className={helpCSS.accordion}>My food has not arrived!</button>
            <div className={helpCSS.panel}> 
                <p>Do go to our track order page to check if your food is arriving. *Link* </p>
            </div>

            <button className={helpCSS.accordion}>Add more FAQ 1</button>
            <div className={helpCSS.panel}> 
                <p>Lorem ipsum... </p>
            </div>

            <button className={helpCSS.accordion}>Add more FAQ 2</button>
            <div className={helpCSS.panel}> 
                <p>Lorem ipsum... </p>
            </div>

        </section> 
    );
}


// Accordion Javascript
var acc = document.getElementsByClassName(helpCSS.accordion);
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function askQuestion() {
    return (
      <form>
        <label>Enter your name:
          <input type="text" />
        </label>
        <label>Enter your comment:
          <input type="text" />
        </label>
      </form>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<askQuestion />);

export default HelpPage;