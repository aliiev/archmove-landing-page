import AboutImg from '../resources/images/about.jpg'
import ShieldIcon from '../resources/icons/shield.svg'
import FeesIcon from '../resources/icons/fees.svg'
import EscortIcon from '../resources/icons/escort.svg'

const list = [{
  title: '100% guaranteed project completion',
  content: 'Build safe, comfortable and transparent with a project management application with a joint account.',
  icon: ShieldIcon
}, {
  title: 'No additional fees',
  content: 'There are no hidden costs. The value of the offer you get is the value you paid.',
  icon: FeesIcon
}, {
  title: 'Get escort from the Team',
  content: 'Monitor reports from the Arsitag team who check directly in the field.',
  icon: EscortIcon
}]

const About = () => (
  <section className="py-6 md:py-8 lg:py-12">
    <div className="container mx-auto px-6 md:px-12 2xl:px-32">
      <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-black font-serif font-extralarge leading-tight">Build your needs <br className="hidden md:block" /> with Archmove</h2>
      <div className="flex flex-col md:flex-row justify-between md:items-stretch lg:items-center gap-6 md:gap-10 lg:gap-20 2xl:gap-40 mt-4 md:mt-6 lg:mt-10">
        <div className="w-full">
          <img className="w-full h-full object-cover rounded" src={ AboutImg } alt="About" />
        </div>
        <div className="flex flex-col items-center md:items-start gap-8 md:gap-6 lg:gap-8 2xl:gap-12 w-full">
          { list.map((item, i) => (
            <div key={ i } className="flex flex-col md:flex-row justify-between items-center md:items-start gap-3 md:gap-6 2xl:gap-9">
              <img className="w-10 md:w-8 2xl:w-12" src={ item.icon } alt="*" />
              <div className="text-center md:text-left">
                <h4 className="text-base 2xl:text-lg text-black font-bold">{ item.title }</h4>
                <p className="text-sm md:text-base md:text-sm 2xl:text-lg mt-0 md:mt-2">{ item.content }</p>
              </div>
            </div>
          )) }
          <button className="bg-primary hover:bg-primary-400 rounded text-sm 2xl:text-base text-white font-semibold uppercase w-full lg:w-auto mx-auto lg:mt-3 2xl:mt-8 px-8 py-5">
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default About