import './Css/App.css';
import SamplePage from './Pages/SamplePage.jsx';
import ScrollBar from './Coponents/ScrollBar';
import Dc from './Coponents/Dc';

import React ,{ useState } from 'react';
import NamePage from './Pages/NamePage';

import school from './Assets/school.png'
import course from './Assets/courses.png'
import experience from './Assets/experience.png'
import activities from './Assets/CityCoders.png'


function App() {
  
  const [procent, setProcent] = useState(0)

  const SamplePagesInfo = [
    {title:'Wykształcenie',
    dc:
      <Dc 
        content= {<>
          <p className="date">9.2019 - 4.2023</p>
          <h3>Technik Informatyk</h3>
          <h4>Zespół Szkół Technicznych nr. 3, Płock</h4>
          <p>Szkołę kończę w tym roku, w maju bieżącego roku zdaje egzamin maturalny oraz dostanę wynik drugiego egzaminu zawodowego który nada mi tytuł technika informatyki wtedy też mogę rozpocząć pracę. </p>
          <p>Wiedza szkolna to jedynie margines mojej wiedzy oraz doświadczenia ,ale wyciągnąłem z niej dość dobrą znajomość baz SQL-owych oraz obyłem się z Linuxem.</p>
          <p>Brałem udział w praktykach zawodowych pierwsze opierały się głównie na drukarkach natomiast w następnym semestrze zastępowałem nauczyciela w technikum TEB Edukacja w Płocku ucząc "dzieci"(często starsze ode mnie) JavaScripta lub SQL-a z resztom i w mojej szkole często rozwiązywałem problemy nauczycieli dotyczące egzaminów czy pomagałem kolegą zrozumieć dany temat. </p>
        </>}/>
    ,
    img: school,
  },
    {title:'Kursy',dc:      <Dc 
    content= {<>
      <p className="date">~ 10.2021</p>
      <h3>OD PODSTAW DO FRONT-END DEVELOPERA</h3>
      <p>Front-end średnio zaawansowany</p>
      <p className="date">~ 11.2021</p>
      <h3>OD PODSTAW DO FRONT-END DEVELOPERA</h3>
      <p>Podstawy programowania w JavaScript</p>
      <p className="date">~ 12.2021</p>
      <h3>OD PODSTAW DO FRONT-END DEVELOPERA</h3>
      <p>React od podstaw - teoria i praktyka</p>
      <p className="date">~ 02.2022</p>
      <h3>OD PODSTAW DO FRONT-END DEVELOPERA</h3>
      <p>Backend - Node.js, Express i MongoDB</p>
      <p className="date">10.2022-12.2023</p>
      <h3>MegaK v3</h3>
      <p>Obszerny kurs głównie backend-owy(ale zawierający JavaScript oraz React) trwający 14 mieś</p>
      <br />
      <p>Poza kursami rozwijałem zdobyte umiejętności pisząc strony czy programy związane z danym tematem przez co poszerzałem swoją wiedzę o zagraniczne fora czy filmy.</p>
    </>}/>,
    img: course,
  },
    {title:'Doświadczenie zawodowe',dc:<Dc content={<>
      <h3>Freelancer</h3>
      <p>Tworzyłem stronę internetową "po znajomości" 
        <br/> <br />
        w czystym html/css/js - primavet.pl <br /> <br />
        jak i w WordPress - ePrimavet.pl <br /><br />
        Strony były tworzone na wczesnym etapie mojej nauki i sam widzę w nich masę błędów na obecny moment.</p>
    </>}/>,
    img: experience,},
    {title:'Zajęcia dodatkowe',dc:<Dc content={<>
      <h3>Uczestnik III Hakatlonu CityCoders</h3>
      <p>Podczas III edycji poznałem wielu ludzi z branży jak i aspirujących programistów. Nauczyłem się podstaw css i html a co najważniejsze pracy w grupie.</p>
      <h3>Uczestnik V Hakatlonu CityCoders</h3>
      <p>Podczas V edycji lepiej poznałem Git-a oraz szlifowałem swoje umiejętności pracy w grupie, React, JS. <br /> Wiedząc już trochę rozmawiając z innymi uczestnikami czy też opiekunami poznałem wiele nowych framework-ów , metod jakie stosują czy też opini na różne tematy.</p>
    </>}/>,img: activities},
  ]

  const SamplePages = SamplePagesInfo.map(page=>(
    <SamplePage 
      key={page.title} 
      title={page.title}
      dc={page.dc}
      img={page.img}/>
  ))

  return (
    <div className="App" style={{right: `${procent}%`}}>

      <NamePage />
      {SamplePages}

      <ScrollBar procent={procent} setProcent={setProcent}/>

    </div>
  );
}

export default App;
