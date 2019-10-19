import React, { useState } from 'react'


// App Component Function
const App = props => {

  // useState -> Name, Price
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  // Reset Method
  const reset = () => {
    // Set -> Default Props
    setPrice(props.price)
    setName(props.name)
  }

  // App Component
  return (
    <>
      {/* Display */ }
      <p>現在の{ name }は、{ price }円です。</p>
      {/* Price Button */ }
      <button onClick={ () => setPrice(price + 1) }>+1</button>
      <button onClick={ () => setPrice(price - 1) }>-1</button>
      <button onClick={ reset }>Reset</button>
      {/* Name Input */ }
      <input value={ name } onChange={ event => setName(event.target.value) } />
    </>
  )
}


// Default Props -> App Component
App.defaultProps = {
  name: '？？？',
  price: 0
}


export default App
