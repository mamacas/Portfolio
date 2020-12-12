import React from 'react'

import '../styling/Menu.scss'

function Menu() {

  return (
    <header className="Menu">
      <div className="Image">
        <img alt="Qasira Ibrahim" id="avatar" src="https://avatars1.githubusercontent.com/u/52191774?s=460&u=a90bb85d3c8911c33710c5eedebe9678abece745&v=4"/>
      </div>
      <a href="/" className="Link">ABOUT</a>
      <a href="/" className="Link">PROJECTS</a>
      <a href="/" className="Link">SKILLS</a>
      <a href="/" className="Link">EDUCATION</a>
      <a href="/" className="Link">EXPERIENCE</a>
    </header>
  )
}

export default Menu
