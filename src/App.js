import React, { useEffect, useState } from 'react'


// App Component Function
const App = props => {

  // useState -> Props -> state, setState
  const [state, setState] = useState(props)
  // state -> name, price
  const { name, price } = state

  // useEffect
  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate.')
  })
  useEffect(() => {
    console.log('This is like componentDidMount.')
  }, [])
  useEffect(() => {
    console.log('This callback is for name only.')
  }, [name])

  // App Component
  return (
    <>
      <p>現在の{ name }は、{ price }円です。</p>
      <button onClick={ () => setState({ ...state, price: price + 1 }) }>+1</button>
      <button onClick={ () => setState({ ...state, price: price - 1 }) }>-1</button>
      <button onClick={ () => setState(props) }>Reset</button>
      <input
        value={ name }
        onChange={ event => setState({ ...state, name: event.target.value }) }
      />
    </>
  )
}


// Default Props -> App
App.defaultProps = {
  name: '',
  price: 1000
}


export default App