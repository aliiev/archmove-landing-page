import { Link } from 'react-router-dom'
import { Input, Button, AutoCarousel, SignUpSlide } from '../components'
import { feedbackData } from '../data'

const SignUp = () => {
  return (
    <section className="py-6 md:py-8 lg:py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 lg:gap-20 2xl:gap-40 container mx-auto px-6 md:px-12 2xl:px-32">
        <div className="shrink-0 w-full md:w-1/2 lg:w-2/5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-black font-serif font-extralarge leading-tight">Sign Up</h2>
          <p className="text-base 2xl:text-lg text-black font-medium mt-2 md:mt-3">Become a member - you'll enjoy exclusive deals, offers, invites and rewards</p>
          <div className="flex flex-col gap-4 lg:gap-6 w-full mt-4 md:mt-6 lg:mt-10">
            <Input id="name" type="text" title="Your Name" placeholder="Name" />
            <Input id="email" type="email" title="Your Email" placeholder="Email" />
            <Input id="password" type="password" title="Your Password" placeholder="Password" helper="Must be at least 8 characters" />
            <Button text="Get started" />
            <div className="text-sm text-center">
              <span className="text-black">Already have an account? </span>
              <Link className="text-primary font-medium" to="/sign-in">Log in</Link>
            </div>
          </div>
        </div>
        <AutoCarousel slide={ SignUpSlide } data={ feedbackData } />
      </div>
    </section>
  )
}

export default SignUp