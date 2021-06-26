import React, { useEffect, useRef, useState } from 'react'
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

const arr = [ new Autko( 'samochody', exports.auto ), new Autko( 'quady-atv', exports.quad ), new Autko('skutery-wodne', exports.skuter), new Autko('rowery', exports.rower) ]

const ponizej = [ new Autko( 'samochody', exports.m_auto, 'SAMOCHODY' ), new Autko( 'quady-atv', exports.m_quad, 'QUADY-ATV' ), new Autko('skutery-wodne', exports.m_skuter, 'SKUTERY WODNE'), new Autko('rowery', exports.m_rower, 'ROWERY'), new Autko('trojkolowce', exports.m_trojkolowiec, 'TRÓJOKOŁOWCE' ), new Autko( 'dodatkowe', exports.m_dodatkowe, 'DODATKOWE ATRAKCJE' ) ]

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
                    <Link to={`/oferta/${ele.nazwa.toLowerCase()}`} >
                    <img src={ele.maleZdj} />
                     <p>{ele.nazwa.toUpperCase()}</p> </Link>
                </div>
                ) }
                </div>
                <div className='o-firmie' >
                    <img src={exports.skuter} />
                    <div id='textt' >
                        <h1> O firmie </h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
