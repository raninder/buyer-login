import React from 'react'
import "./AgentsFirstComp.css"
import AgentsMain from "../../../assets/images/AgentsMain.png";
export default function AgentsFirstComp() {
  return (
    <div className='agent-first-main'>
      <img src={AgentsMain} className='agents-first-image'/>
       <div className='agent-first-btn'>
          <span>Let's Talk</span>
       </div>
    </div>
  )
}