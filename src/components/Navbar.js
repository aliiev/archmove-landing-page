import { useState } from 'react'
import Logo from '../resources/Logo.svg'

const Navbar = () => {
  const [ isOpen, setOpen ] = useState(false)

  return (
    <nav className="relative bg-white pt-6 md:pt-8 lg:pt-12">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 mx-auto px-6 md:px-12 2xl:px-32">
        <div className="flex justify-between items-center w-full md:w-auto mr-0 md:mr-8 lg:mr-16">
          <a className="shrink-0" href="/">
            <img className="h-7" src={ Logo } alt="Archmove" />
          </a>
          <button className="block md:hidden p-2" onClick={ () => setOpen(!isOpen) }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path id="primary" d="M9,18H21M3,12H21M3,6H15" style={{ fill: 'none', stroke: '#525252', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></path>
            </svg>
          </button>
        </div>
        <div className={ `absolute md:relative ${ isOpen ? 'flex' : 'hidden' } md:flex flex-col md:flex-row justify-between items-center gap-3 bg-white border-b md:border-none w-full top-full pb-6 md:py-0` }>
          <ul className="md:flex flex-col md:flex-row items-center md:gap-3 lg:gap-12 w-full">
            { [ 'Design Gallery', 'List of Architect', 'Articles', 'How it Works' ].map((link, i) => (
              <li key={ i } className="w-full md:w-auto">
                <a className="block md:inline border-b md:border-none text-sm text-center text-neutral-600 hover:text-black py-3 md:py-0" href="/">{ link }</a>
              </li>
            )) }
          </ul>
          <div className="flex justify-between items-center gap-4 shrink-0 w-full md:w-auto">
            <a className="bg-transparent rounded text-sm text-center text-neutral-600 hover:text-black font-semibold w-full md:w-auto md:px-4 lg:px-6 py-3 md:py-3 lg:py-3.5" href="/">Sign In</a>
            <a className="bg-primary hover:bg-primary-400 rounded text-sm text-center text-white font-semibold w-full md:w-auto md:px-4 lg:px-6 py-3 md:py-3 lg:py-3.5" href="/">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar