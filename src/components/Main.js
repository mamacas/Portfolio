import React from 'react'

// import { When } from 'react-if'

// import { connect } from 'react-redux'
// import { navigate } from '../store/menuchoice.js'

import '../styling/Main.scss'

import Menu from './Menu.js'
import About from './tabs/About.js'
// import Projects from './tabs/Projects.js'
// import Skills from './tabs/Skills.js'
import Education from './tabs/Education.js'
// import Experience from './tabs/Experience.js'
// import Interests from './tabs/Interests.js'

function Main() {
  return (
    <section className="Main">
      <Menu />

      {/* show about by default */}
      {/* <About /> */}

      {/* show others depending on scroll/links clicked */}

      {/* <Projects /> */}
      {/* <Skills /> */}
      <Education />
      {/* <Experience /> */}
      {/* <Interests /> */}
    </section>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     activeTab: state.menuchoice.activeTab
//   }
// }

// const mapDispatchToProps = {
//   navigate,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Main)

export default Main
