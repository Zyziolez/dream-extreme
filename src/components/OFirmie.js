import React from 'react'
import img from './../images/glowna/quad-wykadrowany.jpg'
import medalIcon from './../images/icons/medal.svg'
import ecoIcon from './../images/icons/eco.svg'
import fastIcon from './../images/icons/fast.svg'

class Card {
    constructor( icon, title, text ){
        this.icon = icon;
        this.title = title;
        this.text = text;
    }
}

export default function OFirmie() {
    const arr = [
        new Card( medalIcon, 'Title long boi', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ),
        new Card( ecoIcon, 'Title long boi ', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ),
        new Card( fastIcon, 'Title long boi', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' )
    ]
    return (
        <div id='about' >
           
            <div id='smaller-about' > 
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  */}
            </div>
        <section>
            {/* <h1> Some longer presenting title </h1>
            <div id='about-mapper' >
                { arr.map( (ele, i ) => 
                <div className='about-card' key={i} >
                    <img src={ ele.icon } />
                    <h3> {ele.title} </h3>
                    <p> {ele.text} </p>
                </div>
                ) }
            </div> */}
            <div id='napisy' >
            <h1> Tytul </h1>
            <p>
            With closeOnBeforeunload set to true, all browsers will have the same behavior (no disconnect event when reloading the page). But this might cause issues if you use the beforeunload event in your application.
            With closeOnBeforeunload set to true, all browsers will have the same behavior (no disconnect event when reloading the page). But this might cause issues if you use the beforeunload event in your application.
            With closeOnBeforeunload set to true, all browsers will have the same behavior (no disconnect event when reloading the page). But this might cause issues if you use the beforeunload event in your application.
            </p>
            </div>
            </section>
            <img src={ img } id='back-img' />
        
        </div>
    )
}
