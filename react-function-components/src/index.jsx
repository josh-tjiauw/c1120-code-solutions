import React from 'react'
import ReactDOM from 'react-dom'

function CustomButton(props) {
  return <button>Click {props.name}!</button>
}

const element = <CustomButton name="me" />
ReactDOM.render(element, document.getElementById('root'))
