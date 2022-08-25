//import React, { Component } from 'react';
//import Navbar from "./components/layout/Navbar";

//CSS
import helpCSS from './Help.module.css';


function HelpPage(){
    return (
        <section className={helpCSS.Green}>
            <div className={helpCSS.Grey}>
                <h1>Help</h1>
                <h2>FAQ: </h2>

                {/* Accordion FAQ  */}
                <div>
                    <AccordionFAQ/>
                </div>

            </div>
        </section>

    );
}

//Accordion Function
function AccordionFAQ() {
    return (
        <section>
            <button className={helpCSS.accordion}>Section 1</button>
            <div className={helpCSS.panel}> 
                <p>Lorem ipsum... </p>
            </div>

            <button className={helpCSS.accordion}>Section 2</button>
            <div className={helpCSS.panel}> 
                <p>Lorem ipsum... </p>
            </div>

            <button className={helpCSS.accordion}>Section 3</button>
            <div className={helpCSS.panel}> 
                <p>Lorem ipsum... </p>
            </div>

            <button className={helpCSS.accordion}>Section 4</button>
            <div className={helpCSS.panel}> 
                <p>Lorem ipsum... </p>
            </div>

            <button className={helpCSS.accordion}>Section 5</button>
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
    this.classList.toggle(helpCSS.active);
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

export default HelpPage;