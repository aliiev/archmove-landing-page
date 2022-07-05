import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, SignIn, SignUp } from './pages'
import { Navbar } from './components'
import { Footer } from './sections'

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/sign-in" element={ <SignIn /> } />
      <Route path="/sign-up" element={ <SignUp /> } />
    </Routes>
    <Footer />
  </Router>
)

export default App