import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Logo from '../resources/Logo.svg'
import { MenuIcon } from '../resources/icons'

const links = [{
  title: 'Design Gallery',
  url: '/#gallery'
}, {
  title: 'Our Features',
  url: '/#features'
}, {
  title: 'Feedback',
  url: '/#feedback'
}, {
  title: 'Consultation',
  url: '/#consultation'
}]

const Navbar = () => {
  const [ isOpen, setOpen ] = useState(false)

  return (
    <nav className="relative bg-white pt-6 md:pt-8 lg:pt-12">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 mx-auto px-6 md:px-12 2xl:px-32">
        <div className="flex justify-between items-center w-full md:w-auto mr-0 md:mr-8 lg:mr-16">
          <Link className="shrink-0" to="/" onClick={ () => setOpen(false) }>
            <img className="h-7" src={ Logo } alt="Archmove" />
          </Link>
          <button className="block md:hidden p-2" onClick={ () => setOpen(!isOpen) }>
            <MenuIcon />
          </button>
        </div>
        <div className={ `absolute md:relative ${ isOpen ? 'visible opacity-100' : 'invisible opacity-0' } flex flex-col md:flex-row justify-between items-center gap-3 bg-white border-b md:border-none w-full md:visible md:opacity-100 top-full pb-3 md:py-0 transition-all` }>
          <ul className="md:flex flex-col md:flex-row items-center md:gap-3 lg:gap-12 w-full">
            { links.map((link, i) => (
              <li key={ i } className="w-full md:w-auto">
                <HashLink className="block md:inline border-b md:border-none text-sm text-center text-neutral-600 hover:text-black py-3 md:py-0 transition-colors" to={ link.url } onClick={ () => setOpen(false) } smooth>{ link.title }</HashLink>
              </li>
            )) }
          </ul>
          <div className="flex justify-between items-center gap-4 shrink-0 w-full md:w-auto px-6 md:px-0">
            <Link className="bg-transparent rounded text-sm text-center text-neutral-600 hover:text-black font-semibold w-full md:w-auto md:px-4 lg:px-6 py-3 md:py-3 lg:py-3.5" to="/sign-in" onClick={ () => setOpen(false) }>Sign In</Link>
            <Link className="bg-primary hover:bg-primary-400 rounded text-sm text-center text-white font-semibold w-full md:w-auto md:px-4 lg:px-6 py-3 md:py-3 lg:py-3.5" to="/sign-up" onClick={ () => setOpen(false) }>Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar