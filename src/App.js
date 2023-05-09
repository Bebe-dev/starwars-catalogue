import { Route, Routes } from 'react-router-dom'
import './style/card.css'
import Header from './header'
import Card from './card'
import Info from './info'


function App() {
  return (
    <div className="big-container">
      <Header/>
      
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/moreInfo' element={<Info/>}/> 
      </Routes>
    </div>
  );
}

export default App;
