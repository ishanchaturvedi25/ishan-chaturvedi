import { useState } from 'react'

function App() {
  function sayHello() {
    console.log('Hello, World!');
  }
  return (
    <>
      <h1 onClick={sayHello}>Hello</h1>
    </>
  )
}

export default App