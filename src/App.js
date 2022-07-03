import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import About from './sections/About'
import Feedback from './sections/Feedback'
import Consultation from './sections/Consultation'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Feedback />
      <Consultation />
    </div>
  )
}

export default App