
import { Suspense } from 'react'
import './App.css'
// import DaisyNav from './Components/DaisyNav/daisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'

const pricingPromise = fetch("PricingData.json")
  .then(response => response.json())

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

      </main>

    </>
  )
}

export default App
