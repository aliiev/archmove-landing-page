import { useState } from 'react'
import { Hero, Gallery, About, Feedback, Consultation, Partners } from '../sections'
import { Alert } from '../components'

const Home = () => {
  const [ modal, setModal ] = useState(false)

  return (
    <>
      <Alert isOpen={ modal } closeModal={ () => setModal(false) } />
      <Hero showModal={ () => setModal(true) } />
      <Gallery />
      <About showModal={ () => setModal(true) } />
      <Feedback />
      <Consultation showModal={ () => setModal(true) } />
      <Partners />
    </>
  )
}

export default Home