var React = require('react')
var ReactDOM = require('react-dom')
const root = document.querySelector('#root')

const newElement = React.createElement(
  'h1',
  null,
  'Hello, React!'
)

ReactDOM.render(newElement, root)
