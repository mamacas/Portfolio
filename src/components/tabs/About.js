import React from 'react'

import '../../styling/tabs/About.scss'

function About() {
  return (
    <section className="Tabs" id="About">
      <h1 id="name">Qasira <span id="surname">Ibrahim</span></h1>
      <ul id="contact-list">
        <li id="location">Seattle, Washington</li>
        <li id="phone">206.825.1008</li>
        <li><a id="email" href="/">qasiraibrahim@gmail.com</a></li>
      </ul>
      {/* <p id="personal-bio">Personal Mission Statement placeholder</p>
      <section className="social-buttons">
      
      </section> */}
    </section>
  )
}

export default About
