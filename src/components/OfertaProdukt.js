import React, { useEffect } from 'react'
import {findCategory, findProd} from './../info/produkty'
import {Link} from 'react-router-dom'

export default function OfertaProdukt() {
    const link = window.location.href.split( '/' )[4]
    const prod = findCategory( link )
    const products = findProd(link)

    return (
        <div className='oferta-kat' >
            <section id='sec1' >
                 <h1> {prod.nazwa} </h1>
                <p> {prod.opis} </p>
                <div id='products' >
                    {products.length > 0 ? 
                        products.map((pro, i) => 
                        <Link key={i} to={`/produkt/${pro.link}`} >
                            <div className='prod'  >
                                <img src={pro.imgs[0]} />
                                <h2> {pro.nazwa} </h2>
                            </div>  
                        </Link>
                        ) :
                        <h2> nie odnaleziono produktów! </h2>
                    }
                </div>
            </section>
            <img src={ prod.duzeZdj } id='img' />
            <section id='sec2' >
          
            </section>
        </div>
    )
}
