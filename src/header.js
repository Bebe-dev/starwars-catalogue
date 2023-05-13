import logo from './images/Star_Wars_Logo.svg.png'
import './style/card.css'

const Header = () => {
  return(
    <div className="image-div">
      <img src={logo}  alt="star_wars"/>
    </div>  
  )

}

export default Header