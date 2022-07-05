import { useRef } from 'react'
import { Link } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Input, Checkbox, Button, SignInSlide } from '../components'
import { SignInImg1, SignInImg2, SignInImg3, SignInImg4 } from '../resources/images'

const slides = [{
  text: 'Build safe, comfortable and transparent with a project management application with a joint account',
  image: SignInImg1
}, {
  text: 'There are no hidden costs. The value of the offer you get is the value you paid',
  image: SignInImg2
}, {
  text: 'Monitor reports from the Arsitag team who check directly in the field',
  image: SignInImg3
}, {
  text: 'Realize your dream with Archmove',
  image: SignInImg4
}]

const SignIn = () => {
  const autoplay = useRef(
    Autoplay(
      { delay: 5000, stopOnInteraction: false },
      emblaRoot => emblaRoot.parentElement
    )
  )

  const [ viewportRef ] = useEmblaCarousel({ loop: true, draggable: false }, [ autoplay.current ])

  return (
    <section className="py-6 md:py-8 lg:py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 lg:gap-20 2xl:gap-40 container mx-auto px-6 md:px-12 2xl:px-32">
        <div className="shrink-0 w-full md:w-1/2 lg:w-2/5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-black font-serif font-extralarge leading-tight">Log in</h2>
          <p className="text-base 2xl:text-lg text-black font-medium mt-2 md:mt-3">Enter your credentials to access your account.</p>
          <div className="flex flex-col gap-4 lg:gap-6 w-full mt-4 md:mt-6 lg:mt-10">
            <Input id="email" type="email" title="Your Email" placeholder="Email" />
            <Input id="password" type="password" title="Your Password" placeholder="Password" />
            <div className="flex justify-between items-center">
              <Checkbox id="remember" title="Remember me" checked={ false } />
              <Link className="text-sm text-primary font-medium ml-2" to="/sign-in">Forgot password</Link>
            </div>
            <Button text="Login" />
            <div className="text-sm text-center">
              <span className="text-black">Don't have an account? </span>
              <Link className="text-primary font-medium" to="/sign-up">Sign up for free</Link>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden" ref={ viewportRef }>
          <div className="flex justify-start items-center gap-6 md:gap-6 lg:gap-10 h-80 md:h-full lg:h-[75vh]">
            { slides.map((slide, i) => (
              <SignInSlide key={ i } text={ slide.text } image={ slide.image } />
            )) }
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn