import React from 'react'
import { useNavigate } from 'react-router'

const Info = () => {
  
  const navigate = useNavigate();
  
  return (
    <>
      <button onClick={() => navigate('/')}>Go to previous page </button>
      {/*<div>{data && data.results.map((item, index) => {
        return(
          <p>{item.episode_id}</p>
        )
      })}</div>*/}
    </>
    
  )
}

export default Info