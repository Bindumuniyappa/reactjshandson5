import React from 'react'
import HocComponent from './HocComponent'

const MouseHover = (props) => {
    const {Counter,UpdateCounter}=props
  return (
    <div>{Counter}
    <br/>
        <button onMouseOver={UpdateCounter}>Hover here</button>
    </div>
  )
}

export default HocComponent(MouseHover)