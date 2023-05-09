import React from 'react'
import { useNavigate } from 'react-router'

const Info = () => {
  
  const navigate = useNavigate();
  
  return (
    <>
      <a onClick={() => navigate('/')}>Go to previous page </a>
      {/*<div>{data && data.results.map((item, index) => {
        return(
          <p>{item.episode_id}</p>
        )
      })}</div>*/}
    </>
    
  )
}

export default Info