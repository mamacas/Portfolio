import React from 'react'

import '../styling/Intro.scss'

function Intro() {
  return (
    <section className="Intro">
      <h1 id="name">Qasira <span id="surname">Ibrahim</span></h1>
      <ul id="contact-list">
        <li id="location">Seattle, Washington</li>
        <li id="phone">206.825.1008</li>
        <li><a id="email" href="/">qasiraibrahim@gmail.com</a></li>
      </ul>
    </section>
  )
}

export default Intro
