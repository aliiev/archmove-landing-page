import Logo from '../resources/Logo.svg'

const Footer = () => (
  <footer className="py-6 md:py-8 lg:py-12">
    <div className="container flex flex-col md:flex-row justify-between items-center mx-auto px-6 md:px-12 2xl:px-32">
      <ul className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-x-12 gap-y-3 md:gap-y-0 order-last md:order-none mt-6 md:mt-0">
        { [ 'About Us', 'How it Works', 'FAQ', 'Contact Us', 'Privacy Policy' ].map((link, i) => (
          <li key={ i } className="">
            <a className="text-sm md:text-xs 2xl:text-sm text-neutral-600 hover:text-black font-semibold" href="/">{ link }</a>
          </li>
        )) }
      </ul>
      <img className="h-7" src={ Logo } alt="Archmove" />
    </div>
  </footer>
)

export default Footer