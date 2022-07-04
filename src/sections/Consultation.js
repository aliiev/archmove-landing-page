import Button from '../components/Button'
import ConsultationImg from '../resources/images/consultation.png'

const Consultation = ({ showModal }) => (
  <section className="py-6 md:py-8 lg:py-12">
    <div className="container flex flex-col md:flex-row items-center gap-6 md:gap-16 lg:gap-32 mx-auto px-6 md:px-12 2xl:px-32">
      <div className="w-full md:w-2/5 shrink-0">
        <img className="w-full h-70 md:h-auto object-contain" src={ ConsultationImg } alt="Consultation" />
      </div>
      <div className="w-full">
        <h2 className="text-3xl lg:text-4xl 2xl:text-5xl text-black font-serif font-extralarge leading-normal">Realize your dream <br className="hidden md:block" /> with <span className="text-primary">Archmove</span></h2>
        <Button text="Free consultation" className="md:w-auto uppercase mt-4 md:mt-8 lg:mt-10 2xl:mt-16" onClick={ showModal } />
      </div>
    </div>
  </section>
)

export default Consultation