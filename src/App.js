import React, { useState } from 'react'


// App Component Function
const App = () => {

  // useState -> State & Actions
  const [count, setCount] = useState(0)

  // Methods -> JS
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  // Methods -> Function
  const increment2 = () => setCount(prev => prev + 1)
  const decrement2 = () => setCount(prev => prev - 1)
  // Method -> Const
  const reset = () => setCount(0)
  // Methods -> Function
  const double = () => setCount(prev => prev * 2)
  const oneThird = () => setCount(prev => prev % 3 === 0 ? prev / 3 : prev)

  // App Component
  return (
    <>
      <div>
        count: { count }
      </div>
      <div>
        <button onClick={ increment }>+1</button>
        <button onClick={ decrement }>-1</button>
      </div>
      <div>
        <button onClick={ increment2 }>+1</button>
        <button onClick={ decrement2 }>-1</button>
      </div>
      <div>
        <button onClick={ reset }>Reset</button>
        <button onClick={ double }>x2</button>
        <button onClick={ oneThird }>/3</button>
      </div>
    </>
  )
}


export default App
