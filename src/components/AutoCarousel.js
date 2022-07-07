import { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const AutoCarousel = ({ slide: Slide, data }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 5000, stopOnInteraction: false },
      emblaRoot => emblaRoot.parentElement
    )
  )

  const [ viewportRef ] = useEmblaCarousel({ loop: true, draggable: false }, [ autoplay.current ])

  return (
    <div className="hidden md:block w-full overflow-hidden" ref={ viewportRef }>
      <div className="flex justify-start items-center gap-6 md:gap-6 lg:gap-10 h-80 md:h-full lg:h-[75vh]">
        { data.map((item, i) => (
          <Slide key={ i } props={ item } />  
        )) } 
      </div>
    </div>
  )
}

export default AutoCarousel