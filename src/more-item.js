import React from 'react'
import { Link, useNavigate, Route, Routes } from 'react-router-dom'
import Info from './info'

const Button = () => {
  const navigate = useNavigate()
  return(
    <>
      <ul style={{listStyleType:'none'}} > 
        <li><button><Link to='/moreInfo'>More info</Link></button></li>
      </ul>
      {/*<Routes>
        <Route path='/more-info' element={<Info/>} />
      </Routes>*/}
    </>
  )
}
{/*onClick={() => navigate('moreInfo')} */}
export default Button 