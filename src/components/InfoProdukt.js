import React from 'react'
import { findProdukt } from '../info/produkty'

export default function InfoProdukt() {
    const link = window.location.href.split('/')[4]
    const info = findProdukt( link )
    return (
        <div>
            { info !== undefined ? 
            <div>
                {info.nazwa}
            </div>
            :
            <h2> Przepraszamy wystąpił błąd! </h2>
        }
        </div>
    )
}
