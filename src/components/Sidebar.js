import React from 'react'

const Sidebar = () => {
  return (
    <div className='aside'>
        <div className="list">
        <ul>
          <li>
            <a href="#intro">HOME</a>
          </li>
          <br/>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <br/>
          <li>
            <a href="#work">PORTFOLIO</a>
          </li>
          <br/>
          <li>
            <a href="#clients">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar