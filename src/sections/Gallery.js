import useEmblaCarousel from 'embla-carousel-react'
import SliderControl from '../components/SliderControl'
import GallerySlide from '../components/GallerySlide'

import GalleryImg1 from '../resources/images/gallery/img-01.jpg'
import GalleryImg2 from '../resources/images/gallery/img-02.jpg'
import GalleryImg3 from '../resources/images/gallery/img-03.jpg'
import GalleryImg4 from '../resources/images/gallery/img-04.jpg'

const Gallery = () => {
  const [ viewportRef, embla ] = useEmblaCarousel({ align: 'start' })

  return (
    <section className="py-6 md:py-8 lg:py-12">
      <div className="container mx-auto px-6 md:px-12 2xl:px-32">
        <div className="grid grid-cols-3 md:gap-x-8 lg:gap-x-14">
          <div></div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-0 col-span-3 md:col-span-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-black font-serif font-extralarge leading-tight">Build professional <br className="hidden md:block" /> valuable room for you</h2>
            <SliderControl embla={ embla } className="flex items-center gap-2" />
          </div>
        </div>
        <div className="mt-4 md:mt-6 lg:mt-10 overflow-hidden" ref={ viewportRef }>
          <div className="flex justify-start items-center gap-6 md:gap-6 lg:gap-10 h-80 md:h-80 lg:h-96 cursor-ew-resize">
            { [ GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4 ].map((image, i) => (
              <GallerySlide key={ i } image={ image } alt={ i } />
            )) }          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery