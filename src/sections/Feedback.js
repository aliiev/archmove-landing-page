import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import BlockquoteIcon from '../resources/icons/blockquote.svg'

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
  const [ prevBtnEnabled, setPrevBtnEnabled ] = useState(false)
  const [ nextBtnEnabled, setNextBtnEnabled ] = useState(false)
  const [ viewportRef, embla ] = useEmblaCarousel({ align: 'start' })

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [ embla ])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [ embla ])

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [ embla ])

  useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on('select', onSelect)
  }, [ embla, onSelect ])

  return (
    <section className="bg-neutral-50 py-6 md:py-8 lg:py-12">
      <div className="container mx-auto px-6 md:px-12 2xl:px-32">
        <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-black font-serif font-extralarge leading-tight">Sound Too Good <br className="hidden md:block" /> To Be True?</h2>
        <div className="relative grid grid-cols-1 md:grid-cols-3 md:gap-x-8 lg:gap-x-14">
          <div></div>
          <div className="col-span-2 overflow-hidden mt-6 md:mt-10 md:-ml-24" ref={ viewportRef }>
            <div className="flex flex-row gap-10">
              
              { feedbacks.map((feedback, i) => (
                <div key={ i } className="relative flex flex-col md:flex-row items-start gap-3 md:gap-12 w-full shrink-0">
                  <img className="w-8 md:w-12" src={ BlockquoteIcon } alt="Blockquote" />
                  <div>
                    <p className="md:text-xl lg:text-3xl 2xl:text-4xl text-black font-light leading-snug">{ feedback.content }</p>
                    <div className="text-sm md:text-base 2xl:text-lg text-black mt-4 md:mt-8 lg:mt-14">
                      <span className="font-bold">{ feedback.author } </span>
                      <span>— { feedback.company }</span>
                    </div>
                  </div>
                </div>
              )) }
            </div>
          </div>
          <div className="md:absolute flex items-center gap-2 mt-6 md:mt-0 bottom-0 right-0 z-20">
            <button className={ `${ prevBtnEnabled ? 'bg-neutral-100 hover:bg-neutral-50' : 'bg-none' } rounded p-2 md:p-3 lg:p-3.5` } onClick={ scrollPrev } disabled={ !prevBtnEnabled }>
              <svg className={ prevBtnEnabled ? 'stroke-primary' : 'stroke-neutral-600' } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <polyline points="10 19 3 12 10 5" style={{ fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></polyline>
                <line data-name="primary" x1="3" y1="12" x2="21" y2="12" style={{ fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></line>
              </svg>
            </button>
            <button className={ `${ nextBtnEnabled ? 'bg-neutral-100 hover:bg-neutral-50' : 'bg-none' } rounded p-2 md:p-3 lg:p-3.5` } onClick={ scrollNext } disabled={ !nextBtnEnabled }>
              <svg className={ nextBtnEnabled ? 'stroke-primary' : 'stroke-neutral-600' } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <polyline points="14 5 21 12 14 19" style={{ fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></polyline>
                <line data-name="primary" x1="21" y1="12" x2="3" y2="12" style={{ fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback