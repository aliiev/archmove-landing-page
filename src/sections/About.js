import Button from '../components/Button'
import AboutItem from '../components/AboutItem'

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

const About = ({ showModal }) => (
  <section className="py-6 md:py-8 lg:py-12">
    <div className="container mx-auto px-6 md:px-12 2xl:px-32">
      <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-black font-serif font-extralarge leading-tight">Build your needs <br className="hidden md:block" /> with Archmove</h2>
      <div className="flex flex-col md:flex-row justify-between md:items-stretch lg:items-center gap-6 md:gap-10 lg:gap-20 2xl:gap-40 mt-4 md:mt-6 lg:mt-10">
        <div className="w-full">
          <img className="w-full h-full object-cover rounded" src={ AboutImg } alt="About" />
        </div>
        <div className="flex flex-col items-center md:items-start gap-8 md:gap-6 lg:gap-8 2xl:gap-12 w-full">
          { list.map((item, i) => (
            <AboutItem key={ i } title={ item.title } content={ item.content } icon={ item.icon } />
          )) }
          <Button text="Free Consultation" className="uppercase mx-auto" onClick={ showModal } />
        </div>
      </div>
    </div>
  </section>
)

export default About