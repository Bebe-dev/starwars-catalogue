import React from 'react'
import { useEffect, useState } from 'react'
import logo from './images/Star_Wars_Logo.svg.png'
import './style/card.css'
import background from './background'

const Card = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  
  useEffect(() => {
  fetch(`https://swapi.dev/api/films`)
  .then((response) => {
    if(!response.ok) {
      throw new Error(`This is an Error: ${response.status}`)
    }
    return response.json()
  })
  .then((actualData) => {
    setData(actualData)
    setError(null)
  })
  .catch((error) => {
    setError(error)
    setData(null)
  })
  .finally(() => {
    setLoading(false)
  })
  })
  
  
  return(
    <div className="big-container">
      <img src={logo}  alt="star_wars"/>
      {loading && <div>Data is loading. Please wait...</div>}
      {error && <div>{`There was a problem fetching your data - ${error}`}</div>}
      <div className="card-container">
        {data && data.results.map((item, index) => {
          //const date = new Date({item.release_date})
              return(
                <div className="card" key={item.episode_id} style={{ backgroundImage: `linear-gradient(0deg, rgba(36,36,36,0.9), rgba(36,36,36,0.9)), url(${background[index]})` }}>
                  <h3>{item.title}</h3>
                  <span>{item.release_date}</span>
                  <p className="opening-crawl">{item.opening_crawl}</p>
                  <a href="#">More info</a>
            </div>
            
          )
            
        })}
      </div>

    </div>
  )
  
}

export default Card;