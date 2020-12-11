import React from 'react'
import '../styling/Main.scss'

import Menu from './Menu.js'
import Intro from './Intro.js'

function Main() {
  return (
    <section className="Main">
      <Menu />
      <Intro />
    </section>
  )
}

export default Main
