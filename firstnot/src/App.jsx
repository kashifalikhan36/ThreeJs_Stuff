import React, { useState } from 'react'
import Products from './Products';

function App() {
  var [a,b]=useState(69);
  return (
    <div>
      <h1>{a}</h1>
      <Products naam="value"/>
    </div>
  )
}

export default App