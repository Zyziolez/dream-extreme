import {exports} from './../components/MainToImport'
// class Produkt  {
//     constructor( kategoria,  duzeZdj, maleZdj, opis, model){
//         this.kategoria = kategoria,
//         this.model = model
//     }
// }

class Kategorie {
    constructor(nazwa, opis, duzeZdj, maleZdj, link, produkty){
        this.nazwa = nazwa;
        this.opis = opis;
        this.duzeZdj = duzeZdj;
        this.maleZdj = maleZdj;
        this.link = link;
        this.produkty = produkty;
    }
}

export const kategori = [
    new Kategorie( 'Rowery', 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    exports.rower,
    exports.m_rower,
    'rowery',
    ['model1', 'model2']
    ),
    new Kategorie( "Samochody",
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    exports.auto,
    exports.m_auto,
    'samochody',
    ['model1', 'model2']
     ),
     new Kategorie( "Quady-atv",
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
     exports.quad,
     exports.m_quad,
     'quady-atv',
     ['model1', 'model2']
     ),
     new Kategorie("Skutery wodne",
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
     exports.skuter,
     exports.m_skuter,
     'skutery-wodne',
     ['model1', 'model2']
     ),
     new Kategorie("Trójkołowce",
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
     exports.trojkolowiec,
     exports.m_trojkolowiec,
     'trojkolowce',
     ['model1', 'model2']
     ),
     new Kategorie( "Dodatkowe atrakcje",
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
     exports.dodatkowe,
     exports.m_dodatkowe,
     'dodatkowe-atrakcje',
     ['model1', 'model2']
     )
]
class Produkt  {
    constructor(nazwa, link, opis, kategoria, specyfikacja, imgs){
        this.nazwa = nazwa;
        this.link = link;
        this.opis = opis;
        this.kategoria = kategoria;
        this.specyfikacja = specyfikacja;
        this.imgs = imgs;
    }
}

class Spec {
    constructor( ico, title, value ){
        this.ico = ico;
        this.title = title;
        this.value = value;
    }
}

export const produkty = [
    new Produkt( 'rower-x', 
    'rower-x',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'rowery',
    [ new Spec( exports.naped_ico, 'Napęd', '300km' ), new Spec( exports.power_ico, 'Moc', '350km' ), new Spec( exports.miejsca_ico, 'Liczba miejsc', 3 ), new Spec( exports.weight_ico, 'Waga', '420kg' ) ],
    [exports.m_rower, exports.rower] ),
    new Produkt( 'rower-y', 
    'rower-y',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'rowery',
    [ new Spec( exports.naped_ico, 'Napęd', '300km' ), new Spec( exports.power_ico, 'Moc', '350km' ), new Spec( exports.miejsca_ico, 'Liczba miejsc', 3 ), new Spec( exports.weight_ico, 'Waga', '420kg' ) ],
    [exports.m_auto, exports.auto] ),
]

export const findCategory = (link) => {
    const znaleziony = kategori.findIndex(e => e.link === link);
    return kategori[znaleziony]
}
export const findProd = (kat) => {
    let znalezione = []

    produkty.map( (prod) => {
        if( prod.kategoria === kat ){
            znalezione.push( prod )
        }
    } )

    return znalezione
}
export const findProdukt = (naz) => {
    let znalezione ;

    produkty.map( (prod) => {
        if( prod.nazwa === naz ){
            znalezione = prod
        }
    } )

    return znalezione
}

