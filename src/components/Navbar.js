import { useState } from 'react'
import Logo from '../resources/Logo.svg'
import MenuIcon from '../resources/icons/Menu.svg'

const Navbar = () => {
  const [ isOpen, setOpen ] = useState(true)

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
      <div className="flex justify-between items-center w-full md:w-auto mr-0 md:mr-16">
        <a className="shrink-0" href="/">
          <img className="h-7" src={ Logo } alt="Archmove" />
        </a>
        <button className="block md:hidden p-2" onClick={ () => setOpen(!isOpen) }>
          <img src={ MenuIcon } alt="Toggle menu" />
        </button>
      </div>
      <ul className={ `${ isOpen ? 'flex' : 'hidden' } flex-col md:flex md:flex-row items-center md:gap-6 lg:gap-12 w-full` }>
        { [ 'Design Gallery', 'List of Architect', 'Articles', 'How it Works' ].map((link, i) => (
          <li key={ i } className="border-b md:border-none text-xs lg:text-sm text-center text-neutral-600 hover:text-black w-full md:w-auto py-3 md:py-0">
            <a className="" href="/">{ link }</a>
          </li>
        )) }
      </ul>
      <div className={ `${ isOpen ? 'flex' : 'hidden' } md:flex justify-between items-center gap-4 shrink-0 w-full md:w-auto` }>
        <a className="bg-transparent rounded text-xs lg:text-sm text-center text-neutral-600 hover:text-black font-semibold w-full md:w-auto md:px-4 lg:px-6 py-3 md:py-3 lg:py-4" href="/">Sign In</a>
        <a className="bg-primary hover:bg-primary-400 rounded text-xs lg:text-sm text-center text-white font-semibold w-full md:w-auto md:px-4 lg:px-6 py-3 md:py-3 lg:py-4" href="/">Sign Up</a>
      </div>
    </nav>
  )
}

export default Navbar