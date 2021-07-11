import React from 'react'
import { Link } from 'react-router-dom'
import { Fade} from 'react-slideshow-image';

export default function SlideShow({zdjecia}) {
    // const [kolej, setKolej] = useState( 0 )
    // const [styl, setStyl] = useState('none')

    // useEffect(() => {
    //     setTimeout(() => {
    //         if(kolej + 1 >= zdjecia.length){
    //             setKolej(0)
    //         }else{
    //             setKolej(kolej +1)
    //         }
    //     }, 5000)
    // }, [kolej])

    return (
        <div className='huhi' >

            {/* { zdjecia.map( (zdj, i) => 
                <div className='ua' key={i} >
                    <img src={zdj.zdjecie} key={i} />
                     <div className='text-rog' >
                        <h1>DREAM E<span>X</span>TREME</h1>
                        <p> lorem ipsum text na dole </p>
                        <Link to={`/oferta/${zdj.link}`} ><button> Zobacz Ofertę</button></Link>
                    </div>
                </div>
             )} */}
                <Fade arrows={false} duration={5000} pauseOnHover={false} scale={1.025} >
                    { zdjecia.map( (zdj, i) => 
                        <div className='ua' key={i} >
                          <div className='img-wrapper' >
                          <img src={zdj.zdjecie} key={i} style={{zIndex: '-10'}} alt=''  />
                          </div>
                            <div className='text-rog' >
                                <h1>DREAM E<span>X</span>TREME</h1>
                                <p> Kochasz adrenalinę? Pragniesz emocji? <br/>
                                     Dream-extreme spełni Twoje pragnienia… </p>
                                <Link to={`/oferta/${zdj.link}`} ><button> Zobacz Ofertę</button></Link>
                            </div>
                        </div>
                    )}
                {/* <div className='ua' >
                    <img src={zdjecia[0].zdjecie}  />
                     <div className='text-rog' >
                        <h1>DREAM E<span>X</span>TREME</h1>
                        <p> lorem ipsum text na dole </p>
                        <Link to={`/oferta/${zdjecia[0].link}`} ><button> Zobacz Ofertę</button></Link>
                    </div>
                </div>
                <div className='ua'  >
                    <img src={zdjecia[1].zdjecie}  />
                     <div className='text-rog' >
                        <h1>DREAM E<span>X</span>TREME</h1>
                        <p> lorem ipsum text na dole </p>
                        <Link to={`/oferta/${zdjecia[1].link}`} ><button> Zobacz Ofertę</button></Link>
                    </div>
                </div>
                <div className='ua'  >
                    <img src={zdjecia[2].zdjecie}  />
                     <div className='text-rog' >
                        <h1>DREAM E<span>X</span>TREME</h1>
                        <p> lorem ipsum text na dole </p>
                        <Link to={`/oferta/${zdjecia[2].link}`} ><button> Zobacz Ofertę</button></Link>
                    </div>
                </div> */}
                </Fade>
        </div>
    )
}
