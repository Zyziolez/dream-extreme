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
    }
}

export const kategori = [
    new Kategorie( 'Rowery', 
    'Uwielbiasz ryzyko, ale czujesz, że rozsądniej byłoby go unikać. Wiesz, jak ważne jest bezpieczeństwo, choć tak naprawdę wydaje Ci się nudne. Rozumiesz, że są sprawy istotniejsze od wyglądu, a jednak lubisz mieć na czym zawiesić oko. Czy to wszystko naprawdę musi się wykluczać? Nie. Udowadniają to nasze rowery. Niespotykane dotąd właściwości jezdne zapewnią Ci szalone emocje. Nowoczesny design zaspokoi Twoje estetyczne potrzeby. Długa i bezawaryjna praca pozwoli Ci się tym wszystkim cieszyć w atmosferze relaksu i pewności.',
    exports.rower,
    exports.m_rower,
    'rowery'
    ),
    new Kategorie( "Samochody",
    'Piękne i szybkie samochody zwracają uwagę każdego. Liczy się aby były eleganckie i robiły wrażenie w każdej sytuacji. Spraw sobie przyjemność i zobacz zobacz jakie modele, oferujemy dla Ciebie.',
    exports.auto,
    exports.m_auto,
    'samochody'
     ),
     new Kategorie( "Quady-atv",
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
     exports.quad,
     exports.m_quad,
     'quady-atv'
     ),
     new Kategorie("Skutery wodne",
     'Morza szum, ptaków śpiew i nasz skuter musisz mieć! Dzięki naszym skuterom wodnym to lato będzie pełne wspaniałych przygód i doznań. Sprawdź co dla Ciebie mamy. ',
     exports.skuter,
     exports.m_skuter,
     'skutery-wodne'
     ),
     new Kategorie("Trójkołowce",
     'Trójkołowce to doskonałe rozwiązanie dla tych co pragną dobrej ale bezpiecznej zabawy. Nasza oferta  to rozwiązanie  między motocyklem a samochodem. Otwarta kabina pozwala poczuć wiatr we włosach z kolei  stabilna konstrukcja zapewnia równowagę jaką daje samochodów. Dbamy o potrzeby wszystkich, zatem Nasze trójkołowce to propozycja dla tych co cenią sobie dobrą zabawę i bezpieczeństwo. ',
     exports.trojkolowiec,
     exports.m_trojkolowiec,
     'trojkolowce'
     ),
     new Kategorie( "Dodatkowe atrakcje",
     'Jeśli chcesz uatrakcyjnić swoją imprezę My możemy Ci w tym pomóc. Z wykorzystaniem naszego  sprzętu zabawa będzie niezapomnianym doświadczeniem. Z naszej oferty korzystają nie tylko firmy ale i indywidualni klienci podczas wieczorów kawalerskich,  spotkań przyjaciół po latach czy na przyjęciach urodzinowych.',
     exports.dodatkowe,
     exports.m_dodatkowe,
     'dodatkowe-atrakcje'
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
    new Produkt( 'Surron Light Bee S', 
        'surron-light-bee-s',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'rowery',
        [new Spec( exports.weight_ico, 'Waga', '48 kg' ), new Spec(exports.power_ico, 'Moc', '2,9 kW'), new Spec( exports.load, 'Max obciązenie', '65 kg' ), new Spec( exports.speed, 'Max prędkość', '50 km/h' ) ],
        [exports.m_rower_surron, exports.rower_surron] ),
    new Produkt(
        'MOUNTSTER S80',
        'mounster-s80',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'rowery',
        [new Spec( exports.power_ico, 'Moc silnika', '6700 W' ), new Spec( exports.speed, 'Max prędkość', '90 km/h' ), new Spec( exports.naped_ico, 'Zasięg', '100 km' )],
        [exports.m_rower_mounster, exports.m_rower_mounster]
    ),
    new Produkt( 'STX 160LX 2021',
        'stx-160lx-2021',
        'Lorem ipsum krotki opis',
        'skutery-wodne', 
        [ new Spec( exports.weight_ico, 'Waga', '383 kg' ), new Spec( exports.power_ico, 'Moc', '112 kW (152 KM)' ), new Spec( exports.miejsca_ico, 'Liczba miejsc', 2 ), new Spec( exports.engine_ico, 'Silnik', 'Czterocylindrowy, chłodzony wodą' ) ],
        [exports.m_skuter_img, exports.skuter_img ] ),
    new Produkt(
        'Audi RSQ3 Sportback 2',
        'audi-rsq3',
        'Lorem ipsum krotki opis',
        'samochody',
        [ new Spec( exports.miejsca_ico, 'Liczba siedzeń', 5 ), new Spec( exports.power_ico, 'Moc', '400 KM' ), new Spec( exports.speed, 'Max prędkość', '250 km/h' ), new Spec( exports.naped_ico, 'Przyspieszenie 0-100km/h', '4.5 s' )],
        [ exports.m_samochod, exports.samochod ]
    )
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
        if( prod.link === naz ){
            znalezione = prod
        }
    } )

    return znalezione
}

