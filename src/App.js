import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import About from './sections/About'

const App = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 2xl:px-32 py-6 md:py-8">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
    </div>
  )
}

export default App