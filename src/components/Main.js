import React, {  useRef } from 'react'
import { exports } from './MainToImport'
import { Link } from 'react-router-dom'
import SlideShow from './Inne/SlideShow';
import {kategori} from './../info/produkty'

class Autko {
    constructor( link, zdjecie, text ){
        this.link= link;
        this.zdjecie= zdjecie;
        this.text = text;
    }
}

const arr = [ new Autko('rowery', exports.rower), new Autko( 'samochody', exports.auto ),new Autko('skutery-wodne', exports.skuter), new Autko( 'quady-atv', exports.quad ) ]

// const ponizej = [ new Autko( 'samochody', exports.m_auto, 'SAMOCHODY' ), new Autko( 'quady-atv', exports.m_quad, 'QUADY-ATV' ), new Autko('skutery-wodne', exports.m_skuter, 'SKUTERY WODNE'), new Autko('rowery', exports.m_rower, 'ROWERY'), new Autko('trojkolowce', exports.m_trojkolowiec, 'TRÓJOKOŁOWCE' ), new Autko( 'dodatkowe', exports.m_dodatkowe, 'DODATKOWE ATRAKCJE' ) ]

export default function Main() {
    const wys = useRef(null)
    const data = new Date();

    return (
            <div className='main' >
            <div className='aaa' >
                {/* <img src={arr[kolej].zdjecie}   /> */}
                <SlideShow zdjecia={arr} />
            </div>
           
            {/* <div className='img' style={{ backgroundImage: `url(${arr[kolej].zdjecie})` }} ></div> */}
            <div className='reszta' ref={wys} >

                <div className='section' >
                { kategori.map( ( ele, i ) => 
                <div className='border-image' key={i} >
                    <Link to={`/oferta/${ele.link}`} >
                    <img src={ele.maleZdj} alt='product' />
                     <p>{ele.nazwa.toUpperCase()}</p> </Link>
                </div>
                ) }
                </div>
                <div className='o-firmie' >
                    <div style={{width: '100vw', overflow: 'hidden', zIndex:'3'}} className='wrapp' >
                    <img src={exports.skuter} alt='o-firmie' className='about-img' style={{ overflow: 'hidden'}} />
                    </div>
                    <div id='textt' >
                        <h1> O firmie </h1>
                        Dream-extreme to firma, która powstała dla tych co lubią żyć na krawędzi i nie boja mocnych doznań.
                            Jesteśmy dynamicznie rozwijającą się firmą oferującą między innymi sportowe samochody, rowery i skutery wodne. Posiadamy sprzęt, dzięki któremu możesz doświadczyć świetnej zabawy i mega emocji zarówno na lądzie jak i na wodzie.
                            Ponieważ dbamy o bezpieczeństwo naszych klientów nasz sprzęt jest nowy i niezawodny.
                            Naszą działalność prowadzimy na terenie całego województwa zatem gdziekolwiek jesteś, my jesteśmy w stanie odpowiedzieć na Twoje potrzeby.
                    </div>
                </div>
                <footer>
                    <h2> DREAM EXTREME </h2> <br/>

                  <section>
                  <ul>
                            <li>Kontakt</li>
                            <li>Regulamin</li>
                            <li>Autor</li>
                            <li>Oferta</li>
                    </ul>
                  </section>

                   
                    <p> DREAM EXTREME {data.getFullYear()} </p>
                </footer>
            </div>
        </div>
      
    )
}
