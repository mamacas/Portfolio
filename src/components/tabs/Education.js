import React from 'react'

import '../../styling/tabs/Education.scss'

function Education() {
  return (
    <section className="Tabs" id="education">
      <h2 className="section-title"> EDUCATION</h2>

      <h4 id="bc-name">Code Fellows || Seattle, WA</h4>
      <h4 id="bc-dates">October 2019 - October 2020</h4>
      <h5 id="bc-cert">Certificate: Advanced Software Development in JavaScript</h5>
      <p id="bc-description">Program Description</p>

      <h4 id="uni-name">Saint Norbert College || Green Bay, WI</h4>
      <h4 id="uni-dates">August 2010 - May 2014</h4>
      <h5 id="uni-cert">Bachelor of Arts in Psychology</h5>
      <p id="uni-description">Program Description</p>
    </section>
  )
}

export default Education
