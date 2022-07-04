import Button from '../components/Button'

const Hero = ({ showModal }) => (
  <section className="py-6 md:py-8 lg:py-12">
    <div className="container mx-auto px-6 md:px-12 2xl:px-32">
      <h1 className="text-4xl md:text-6xl lg:text-8xl 2xl:text-9xl font-serif font-extrabold mb-6 md:mb-8 lg:mb-12">Build Your <br className="hidden md:block" /> Dream <span className="text-primary">House</span></h1>
      <div className="grid md:grid-cols-3 grid-rows-2 md:grid-rows-1 lg:grid-rows-2 md:gap-x-8 lg:gap-x-14 gap-y-6 md:gap-y-0">
        <div className="order-last md:order-none">
          <p className="text-base 2xl:text-lg text-black font-medium md:mt-2 mb-6 lg:mb-12">The first and most trusted marketplace of design & build house in The World. 100% guaranteed Build safe, comfortable and transparent with a project management for the best result</p>
          <Button text="Free Consultation" onClick={ showModal } />
        </div>
        <div className="md:col-span-2 md:row-span-1 lg:row-span-2 bg-hero bg-cover bg-bottom rounded"></div>
      </div>
    </div>
  </section>
)

export default Hero