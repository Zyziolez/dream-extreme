import React, { useState} from 'react'
import Alert from './Inne/Alert'
import axios from 'axios'
import { mailerServer } from './Inne/vars'

export default function Kontakt() {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [text, setText] = useState('')
    const [ accept, setAccept ] = useState(false) 
    const [ alertHidden, setAlertHidden ] = useState('none') 
    const [alertText, setAlertText] = useState('')

    const sendMessage = () => {
        if( accept && name.trim().length >0 && text.trim().length >0 ){
            axios.post( `${mailerServer}/dream-mail`, { name: name, mail: mail, text: text } )
            .then(res => {
                setAlertHidden( 'block' )
                setAlertText( 'Wysłano maila! dziękujemy za kontakt' )
                setTimeout(() => {
                    setAlertHidden( 'none' )
                    setAlertText( '' )
                    setName('')
                    setMail('')
                    setText('')
                    setAccept(false)
                }, 3000)
            })
            .catch( err => console.log(err) )
           
        }else{
            setAlertHidden( 'block' )
            setAlertText( 'Prosimy o poprawne uzupełnienie formularza!' )
            setTimeout(() => {
                setAlertHidden( 'none' )
                setAlertText( '' )
            }, 3000)
        }
    }

    
        return (
            <div className='kontakt' >
             <section className='left' >
                 <h1> Skontaktuj się z nami! </h1>
                 <div>
                    <input type='text' id='name' value={ name } onChange={e => setName(e.target.value) } />
                    <label for='name' > Imię i nazwisko </label>
                 </div>
                <div>
                <input type='text' id='mail' value={mail} onChange={e => setMail(e.target.value)} />
                  <label for='mail' > Mail kontaktowy </label>
                </div>
                 <input type='checkbox' id='check' checked={accept} onChange={e =>setAccept(!accept) } />
                 <lablel for='check' > Zapoznałem się z regulaminem </lablel><br/>
             </section>
             <section className='right' >
                    <div>
                        <textarea type='text' id='text'  value={text} onChange={e => setText(e.target.value)}  />
                        <label for='text'> Wiadomość </label>
                    </div>
                <button onClick={ sendMessage } > Wyślij wiadomość </button>
             </section>
             <Alert text={alertText} display={ alertHidden } />
            </div>
        )
    
}
