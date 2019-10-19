import React, { useState } from 'react'


// App Component Function
const App = props => {

  // useState -> Props -> state, setState
  const [state, setState] = useState(props)
  // state.name, state.price -> name, price
  const { name, price } = state

  // App Component
  return (
    <>
      <p>現在の{ name }は、{ price }円です。</p>
      {/* Price Button */ }
      {/* onClick -> setState -> Update Price */ }
      <button onClick={ () => setState({ ...state, price: price + 1 }) }>+1</button>
      <button onClick={ () => setState({ ...state, price: price - 1 }) }>-1</button>
      <button onClick={ () => setState(props) }>Reset</button>
      {/* Name Input */ }
      <input
        // Value
        value={ name }
        // onChange -> setState -> Update Name
        onChange={ event => setState({ ...state, name: event.target.value }) }
      />
    </>
  )
}


App.defaultProps = {
  name: '???',
  price: 0
}


export default App
