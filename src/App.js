import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import About from './sections/About'
import Feedback from './sections/Feedback'
import Consultation from './sections/Consultation'
import Partners from './sections/Partners'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Feedback />
      <Consultation />
      <Partners />
    </div>
  )
}

export default App