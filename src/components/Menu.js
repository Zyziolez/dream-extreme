import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import logo from './../images/logo.svg'

export default function Menu() {
    const [width, setWidth] = useState( window.innerWidth )
    const [meni, setMeni] = useState('transparent')
    const [showMenu, setShowMenu] = useState(false)
    const [styl, setStyl] = useState('ham-aktywny')
    const [anim, setAnim] = useState( 'wejscie' )

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
        window.addEventListener('scroll', () => {
            if( window.scrollY > 350){
                setMeni('#161616')
            }else if(window.scrollY < 350){
                    setMeni('transparent')
            }
        })
        return() => {
            setWidth(window.innerWidth)
        }
    }, [])
    return (
        
  <div className='menu' style={{ background:  meni, transition: '0.5s'}}   >
  <Link to='/' className='top-logo' onClick={() => {
      if(  width <=  600 && showMenu == true ){
        setStyl('ham-aktywny')
        setAnim('wyjscie')
        setTimeout( () =>{
            setShowMenu(false)
        }, 1000 )
      }

  }}  > <img src={logo} /> <h2>DREAM E<span>X</span>TREME</h2> </Link>
        { width <=  600 ? 
        <div className="center" onClick={() => {
            if( styl === 'ham-aktywny' ){
                setStyl('ham-nieaktywny')
                setAnim('wejscie')
                setShowMenu(true)
            }else{
                setStyl('ham-aktywny')
                setAnim('wyjscie')
                setTimeout( () =>{
                    setShowMenu(false)
                }, 1000 )
            }
        }} >
            
            <div className={styl}  >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
        :
            <div >
                <div className='right' >
                    <li> <Link to='/o-firmie' >O firmie </Link></li>
                    <li>Oferta
                        <ul>
                            <li><Link to='/oferta/samochody' > Samochody </Link></li>
                            <li><Link to='/oferta/rowery' >Rowery  </Link></li>
                            <li><Link to='/oferta/skutery-wodne' >  Skutery wodne </Link></li>
                            <li><Link to='/oferta/quady-atv' >  Quady atv </Link></li>
                            <li><Link to='/oferta/trojkolowce' > Trójkołowce </Link></li>
                            <li><Link to='/oferta/dodatkowe-atrakcje' > Dodatkowe atrakcje </Link></li>
                        </ul>
                    </li>
                    <li><Link to='/kontakt' >Kontakt</Link></li>
                </div>
        </div> 
        }
        {showMenu ? <div className='smol-menu' style={{animationName: anim}} onClick={() => {
             setStyl('ham-aktywny')
             setAnim('wyjscie')
             setTimeout( () =>{
                 setShowMenu(false)
             }, 1000 )
         
        }} >
                        <div className='sect' >
                        <li> <Link to='/o-firmie' >O firmie </Link></li>
                            <li><Link to='/oferta' >Oferta</Link></li>
                            <ul >
                                <li><Link to='/oferta/samochody' > Samochody </Link></li>
                                <li><Link to='/oferta/rowery' >Rowery  </Link></li>
                                <li><Link to='/oferta/skutery-wodne' >  Skutery wodne </Link></li>
                                <li><Link to='/oferta/quady-atv' >  Quady atv </Link></li>
                                <li><Link to='/oferta/trojkolowce' > Trójkołowce </Link></li>
                                <li><Link to='/oferta/dodatkowe-atrakcje' > Dodatkowe atrakcje </Link></li>
                            </ul>
                            <li><Link to='/kontakt' >Kontakt</Link></li>
                        </div>
                    </div> : null}
  </div>
    )
}
