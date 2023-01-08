import React, {useState} from 'react'

import PDF from '../Assets/FranciszekKaniewskiCV.pdf'

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
            <a rel="noopener noreferrer" target='_blank' href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=VpCqJQvtSCRvSgsjbzvGhfgQwnQTQQDgSDzXxStQJTDRFhkWgBdsJPTlrgXjlVkmfSRDGgg"><button className='mail'>fkaniewski.web@gmail.com <FontAwesomeIcon icon={faMailBulk} /></button></a>
            <a href="https://github.com/FranciszekKaniewski/cv" target="_blank" rel="noopener noreferrer"><button className='git'>GitHub <FontAwesomeIcon icon={faComputer} /></button></a>
            <a href={PDF} target="_blank" rel="noopener noreferrer"><button className='cv-btn'>Pobierz CV <FontAwesomeIcon icon={faThList} /></button></a>
        </div>
        <p>Do zobaczenia, Franciszek Kaniewski 😉</p>
        <p className="data">Wyrażam zgodę na przetwarzanie moich danych osobowych w zakresie obecnych oraz przyszłych procesów
        rekrutacyjnych
        </p>
    </div>
  )
}

export default FinPage