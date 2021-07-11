import React, {  useEffect, useState } from 'react'
import { findProdukt } from '../info/produkty'

export default function InfoProdukt() {
    const link = window.location.href.split('/')[4]
    const info = findProdukt( link )
    const [background, setBackground] = useState('transparent')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if( window.scrollY > 50){
                setBackground('#161616')
            }else if(window.scrollY < 50){
                setBackground('transparent')
            }
        })
    }, [])

    return (
        <div className='product-info' >
            { info !== undefined ? 
            <div className='product-success' >
                <img src={ info.imgs[1] } alt={ info.nazwa } className='background-pic' />
                <div className='shadow-menu' style={{ background: background }} ></div>
                <section className='product-spec' >
                    <h1> {info.nazwa} </h1>
                    <img src={ info.imgs[0] } alt={info.nazwa} className='small-pic' />
                    <p className='prod-desc' > {info.opis} </p>
                    <div className='product-map' >
                        { info.specyfikacja.map( ( prod, i ) => 
                            <section key={i} >
                                <img src={ prod.ico } alt='product icon' className='prod-icons' />
                                <h3> { prod.title }: {prod.value} </h3>
                            </section>
                        ) }
                    </div>
                </section>
            </div>
            :
            <h2 style={{textAlign: 'center', marginTop: 'calc(50vh - 6.8rem)'}} > Nie odnaleziono produktu </h2>
        }
        </div>
    )
}
