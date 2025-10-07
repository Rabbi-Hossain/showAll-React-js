
import { Suspense } from 'react'
import './App.css'
import Players from './Component/Players/Players'
function App() {

  const playersPromise = fetch('/players.json').then(res=>res.json())



  return (
    <>
      
      <h1>Simple React show project</h1>
      <Suspense fallback={<p>Players data is Loading......</p>}>
      <Players playersPromise={playersPromise}></Players>
      </Suspense>
      
    </>
  )
}

export default App
