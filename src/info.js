import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router'
import './style/card.css'

const Info = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const [data, setData] = useState("")
  const {id} = useParams()
  
  useEffect(() => {
    const data = location.state.data.results.find(item => item.episode_id===Number(id))
    if(data){
      setData(data)
    }
  }, [id])
  
  
  
  return (
    <div className="info-container">
      <div>
        <button className="back" onClick={() => navigate('/')}>Go to previous page </button>
        <div className="middle-men">
          <h1>{data.title}</h1>
          <p>Director: {data.director}</p>
          <p>Producer: {data.producer}</p>
        </div>
        <h2>Description</h2>
        <p className="info-crawl">{data.opening_crawl}</p>
      </div>
      <div>
        <h2>Characters</h2>
        <ul>
          
          {/*data.planets.map(item => {
            return(<li>{item}</li>) 
          })*/}
        </ul>
      </div>
    </div>
    
  )
}

export default Info