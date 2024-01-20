import { Route, Routes } from 'react-router-dom'
import './style/app.css'
import Header from './header'
import Card from './card'
import Info from './info'


function App() {
  
    return (
      <div className="big-container">
        <Header/>
        
        <Routes>
          <Route path='/' element={<Card/>} />
          <Route path='/:id' element={<Info/>}/> 
        </Routes>
      </div>
    );
  
}

export default App;
