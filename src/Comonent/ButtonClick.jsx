import React from 'react'
import HocComponent from './HocComponent'

const ButtonClick = (props) => {
    const {Counter,UpdateCounter}=props
  return (
    <div>
        {Counter}
        <br/>
        <button onClick={UpdateCounter}>Click here</button>
    </div>
  )
}

export default HocComponent(ButtonClick)