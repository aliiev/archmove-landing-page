import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import About from './sections/About'
import Feedback from './sections/Feedback'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Feedback />
    </div>
  )
}

export default App