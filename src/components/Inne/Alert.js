import React from 'react'

export default function Alert({text, display}) {
    return (
        <div className='alert' style={{ display: display }} >
           <div className='small-alert' >
           <p> {text} </p>
           </div>
        </div>
    )
}
