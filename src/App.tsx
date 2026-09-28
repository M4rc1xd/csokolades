import Fejlec from './components/fejlec.tsx'
import Lablec from './components/lablec.tsx'
import ChocolateCard from './components/ChocolateCard.tsx'
import './App.css'

function App() {

  return (
    <>
    <Fejlec/>
    <ChocolateCard
        name="Étcsoki 70%"
        brand="Lindt"
        isDark={true}
        cocoaPercentage={70}
        ingredients={["kakaomassza", "cukor", "kakaovaj"]}
        />
        <ChocolateCard
        name="Tejcsoki mogyoróval"
        brand="Milka"
        isDark={false}
        cocoaPercentage={30}
        ingredients={["cukor", "tejpor", "kakaovaj", "mogyoro"]}
        />
        <ChocolateCard
        name="Fehercsoki epres"
        brand="Nestle"
        isDark={false}
        cocoaPercentage={25}
        ingredients={["cukor", "tejpor", "kakaovaj", "eperdarabok"]}
        />
        <Lablec/>
    </>
    
  )
}

export default App