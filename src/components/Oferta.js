import React, {lazy} from 'react'
import {Redirect, Route, useRouteMatch} from 'react-router-dom'
import OfertaOferta from '../info/produkty'

const OfertaProdukt = lazy( () => import('./OfertaProdukt'))

export default function Oferta() {
    let {path} = useRouteMatch()
    return (
        <div className='oferta' >
            <Route path={`${path}/:produkt`} children={<OfertaProdukt/>} />
            {/* <Redirect to={`${path}/info`} /> */}
        </div>
    )
}
