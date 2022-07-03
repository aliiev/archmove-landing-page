import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import About from './sections/About'
import Feedback from './sections/Feedback'
import Consultation from './sections/Consultation'
import Partners from './sections/Partners'
import Footer from './sections/Footer'

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
      <Footer />
    </div>
  )
}

export default App