import React from 'react'
import { Link } from 'react-router-dom'


const Button = () => {
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

export default Button 