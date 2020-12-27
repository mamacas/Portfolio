import React from 'react'

import '../styling/Menu.scss'

import { connect } from 'react-redux'
import { navigate } from '../store/menuchoice.js'

function Menu(props) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header className="Menu">
      <div className="Image">
        <img alt="Qasira Ibrahim" id="avatar" src="https://avatars1.githubusercontent.com/u/52191774?s=460&u=a90bb85d3c8911c33710c5eedebe9678abece745&v=4"/>
      </div>
        <section className="Links"
          value={value}
          onChange={handleChange}
        >
        {props.sections.map((sec) => 
          <p className="Link" key={sec.name} onClick={() => props.navigate(sec.name)}>{sec.name}</p>
        )}
        </section>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    sections: state.menuchoice.sections
  }
}

const mapDispatchToProps = {
  navigate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
