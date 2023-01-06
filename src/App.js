import './Css/App.css';
import MainPage from './Pages/MainPage.jsx';
import ScrollBar from './Coponents/ScrollBar';

import React ,{ useState } from 'react';

function App() {
  
  const [procent, setProcent] = useState(0)

  const PagesInfo = [
    {title:'Name',},
    {title:'School',},
    {title:'Courses',},
    {title:'Experience',},
    {title:'Activities',},
  ]

  const Pages = PagesInfo.map(page=>(<MainPage title={page.title}/>))

  return (
    <div className="App" style={{right: `${procent}%`}}>

      {Pages}

      <ScrollBar procent={procent} setProcent={setProcent}/>

    </div>
  );
}

export default App;
