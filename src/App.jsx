
import { Suspense } from 'react'
import './App.css'
// import DaisyNav from './Components/DaisyNav/daisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsChart from './Components/ResultsChart/ResultsChart'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'

const pricingPromise = fetch("PricingData.json")
  .then(response => response.json());

const marksPromise = axios.get("MarksData.json");



function App() {

  return (
    <>

      <header>

        <NavBar></NavBar>

        {/* <DaisyNav></DaisyNav> */}

      </header>

      <main>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultsChart></ResultsChart>

      </main>

    </>
  )
}

export default App
