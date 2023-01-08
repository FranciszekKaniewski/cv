import React, {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faThList, faComputer, faLeftLong } from '@fortawesome/free-solid-svg-icons'


function FinPage({setEnd,animationStart}) {

    const [anim,setAnim] = useState('')

    const wait = () =>{
        function end(){
            setEnd(false)
            setAnim('')
            setTimeout(animationStart('.5s ease reverse toTop'),500)
        }
        setAnim('.56s ease moveToRight') 
        setTimeout(end,500)
        setTimeout(()=>animationStart(''),1000)
    }

  return (
    <div className="fin-page" style={{animation: anim}}>
        <div className="back" onClick={(e)=>wait()}><FontAwesomeIcon icon={faLeftLong} /></div>
        <h1>
            Dziękuje za obejrzenie mojego CV <br /> <br />
            zapraszam do kontaktu
        </h1>
        <div className="btns">
            <button>fkaniewski.web@gmail.com <FontAwesomeIcon icon={faMailBulk} /></button>
            <button>GitHub <FontAwesomeIcon icon={faComputer} /></button>
            <button>Pobierz CV <FontAwesomeIcon icon={faThList} /></button>
        </div>
        <p>Do zobaczenia, Franciszek Kaniewski 😉</p>
    </div>
  )
}

export default FinPage