import './Css/App.css';
import SamplePage from './Pages/SamplePage.jsx';
import ScrollBar from './Coponents/ScrollBar';

import React ,{ useState } from 'react';
import NamePage from './Pages/NamePage';

function App() {
  
  const [procent, setProcent] = useState(0)

  const SamplePagesInfo = [
    {title:'Wykształcenie',dc:'Franciszek Kaniewski',},
    {title:'Courses',dc:'Franciszek Kaniewski',},
    {title:'Experience',dc:'Franciszek Kaniewski',},
    {title:'Activities',dc:'Franciszek Kaniewski',},
  ]

  const SamplePages = SamplePagesInfo.map(page=>(
    <SamplePage 
      key={page.title} 
      title={page.title}
      dc={page.dc}/>
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
