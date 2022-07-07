import { Link } from 'react-router-dom'
import { Input, Checkbox, Button, AutoCarousel, SignInSlide } from '../components'
import { signinData } from '../data'

const SignIn = () => {
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
        <AutoCarousel slide={ SignInSlide } data={ signinData } />
      </div>
    </section>
  )
}

export default SignIn