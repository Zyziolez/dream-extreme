import { lazy, Suspense } from "react";
import { Route, useLocation, Switch} from 'react-router-dom'
import Loading from "./components/Loading";
import Menu from "./components/Menu";

const Main = lazy( () => import('./components/Main'))
const Oferta = lazy( () => import('./components/Oferta'))
const OFirmie = lazy( () => import('./components/OFirmie'))
const Kontakt = lazy( () => import('./components/Kontakt'))
const InfoProdukt = lazy( () => import('./components/InfoProdukt'))
const NieZnaleziono = lazy( () => import('./components/NieZnaleziono'))

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;


  return (
    <Suspense fallback='loading' >
      <Menu/>
      <div className='page' >
        <Switch location={location || background} >
          <Route exact path='/' children={ <Main/> } />
          <Route path='/oferta' children={ <Oferta/> } />
          <Route path='/o-firmie' children={ <OFirmie/> } />
          <Route path='/kontakt' children={ <Kontakt/> } />
          <Route path='/produkt/*' children={ <InfoProdukt/> } />
          <Route path='*' children={ <NieZnaleziono/> } />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
