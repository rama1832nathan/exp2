import { useState } from 'react'
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome to the React App!</h2>
      <Welcome user = "rama"/>
      <Welcome user = ""/>
      <Welcome user = "ravi"/>
    </>
  )
}

export default App
