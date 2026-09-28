import { useState } from 'react'
import Fejlec from './components/fejlec.tsx'
import Lablec from './components/lablec.tsx'
import ChocolateCard from './components/ChocolateCard.tsx'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Fejlec/>
    <Lablec/>
    <ChocolateCard
        name="Csoki"
        brand="Márka"
        isDark={true}
        cocoaPercentage={70}
        ingredients={["cukor", "kakaóvaj", "kakaómassza", "tejpor"]}
    />
    </>
    
  )
}

export default App
