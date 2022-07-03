import useEmblaCarousel from 'embla-carousel-react'
import FeedbackSlide from '../components/FeedbackSlide'
import SliderControl from '../components/SliderControl'

const feedbacks = [{
  author: 'Adam Morph',
  company: 'CEO Alfatech',
  content: 'We just wanted to thank you for this fantastic website! We are so grateful for being able to advertise our Petite cabin and receive feedback from people from all over the U.S. and even further.'
}, {
  author: 'Sam Hollis',
  company: 'CEO Democrain',
  content: 'We can\'t understand how we\'ve been living without Archmove. Really good. Absolutely wonderful! Archmove has got everything I need.'
}, {
  author: 'John Morris',
  company: 'CEO Johndale',
  content: 'Archmove should be nominated for service of the year. It\'s exactly what I\'ve been looking for. I\'d be lost without Archmove. Archmove is both attractive and highly adaptable.'
}]

const Feedback = () => {
  const [ viewportRef, embla ] = useEmblaCarousel({ align: 'start' })

  return (
    <section className="bg-neutral-50 py-6 md:py-8 lg:py-12">
      <div className="container mx-auto px-6 md:px-12 2xl:px-32">
        <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-black font-serif font-extralarge leading-tight">Sound Too Good <br className="hidden md:block" /> To Be True?</h2>
        <div className="relative grid grid-cols-1 md:grid-cols-3 md:gap-x-8 lg:gap-x-14">
          <div></div>
          <div className="col-span-2 overflow-hidden mt-6 md:mt-10 md:-ml-24" ref={ viewportRef }>
            <div className="flex flex-row gap-10 cursor-ew-resize">
              { feedbacks.map((feedback, i) => (
                <FeedbackSlide key={ i } content={ feedback.content } author={ feedback.author } company={ feedback.company } />
              )) }
            </div>
          </div>
          <SliderControl embla={ embla } className="md:absolute flex items-center gap-2 mt-6 md:mt-0 bottom-0 right-0 z-20" />
        </div>
      </div>
    </section>
  )
}

export default Feedback