import React from 'react'
import {useNavigate} from 'react-router-dom'
import withLayout from './withLayout'
function Home() {
    const navigate=useNavigate()
  return (
    <div>
      <div className='banner'>
      <h1>welcome to my webpage</h1>
      <p>Ths is wesite about myself. i love programming</p>
      
      
      <div className="action-wrap">
      
      <button className='btn-outline'onClick={()=>navigate("./about")}> About me</button>
      <button className='btn-outline'onClick={()=>navigate("./blog")}>read blog</button>

      </div>
      
      </div>
    </div>
  )
}

export default withLayout(Home)
