import React from 'react'
import img from './../images/glowna/quad-wykadrowany.jpg'

class Card {
    constructor( icon, title, text ){
        this.icon = icon;
        this.title = title;
        this.text = text;
    }
}

export default function OFirmie() {
    return (
        <div id='about' >
           
            <div id='smaller-about' > 
            </div>
        <section>
            <div id='napisy' >
            <h1> O nas </h1>
            <p>
            Dream-extreme to firma, która powstała dla tych co lubią żyć na krawędzi i nie boja mocnych doznań.

            Jesteśmy dynamicznie rozwijającą się firmą oferującą między innymi sportowe samochody, rowery … i skutery wodne. Posiadamy sprzęt, dzięki któremu możesz doświadczyć świetnej zabawy i mega emocji zarówno na lądzie jak i na wodzie.
            Ponieważ dbamy o bezpieczeństwo naszych klientów nasz sprzęt jest nowy i niezawodny.
            Naszą działalność prowadzimy na terenie całego województwa zatem gdziekolwiek jesteś, my jesteśmy w stanie odpowiedzieć na Twoje potrzeby.
            Żeby odpowiedzieć na Wasze oczekiwania, wychodzimy  na przeciw i spełniamy również indywidualne potrzeby.
            Oferujemy krótko i długo terminowy najem sprzętu znajdującego się w naszej ofercie. W związku z coraz większym zainteresowaniem, wsłuchując się w Wasze potrzeby i oczekiwania, cały czas powiększamy naszą ofertę.
            Już niebawem będziesz mógł również kupić u Nas sprzęt, z którego korzystałeś.
            Dla naszych stałych klientów oferujemy specjalne rabaty.
            <br/>
            Team Dream-Extreme
            </p>
            </div>
            </section>
            <div className='back-wrapper' >
            <img src={ img } id='back-img' alt='background' />
            </div>
        
        </div>
    )
}
