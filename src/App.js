import { useState } from 'react'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import About from './sections/About'
import Feedback from './sections/Feedback'
import Consultation from './sections/Consultation'
import Partners from './sections/Partners'
import Footer from './sections/Footer'

const App = () => {
  const [ modal, setModal ] = useState(false)

  return (
    <div>
      <Navbar />
      <Alert isOpen={ modal } closeModal={ () => setModal(false) } />
      <Hero showModal={ () => setModal(true) } />
      <Gallery />
      <About showModal={ () => setModal(true) } />
      <Feedback />
      <Consultation showModal={ () => setModal(true) } />
      <Partners />
      <Footer />
    </div>
  )
}

export default App