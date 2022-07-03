import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import GalleryImg1 from '../resources/images/gallery/img-01.jpg'
import GalleryImg2 from '../resources/images/gallery/img-02.jpg'
import GalleryImg3 from '../resources/images/gallery/img-03.jpg'
import GalleryImg4 from '../resources/images/gallery/img-04.jpg'

const Gallery = () => {
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
    <section className="py-6 md:py-8 lg:py-12">
      <div className="container mx-auto px-6 md:px-12 2xl:px-32">
        <div className="grid grid-cols-3 md:gap-x-8 lg:gap-x-14">
          <div></div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-0 col-span-3 md:col-span-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-black font-serif font-extralarge leading-tight">Build professional <br className="hidden md:block" /> valuable room for you</h2>
            <div className="flex items-center gap-2">
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
        <div className="mt-4 md:mt-6 lg:mt-10 overflow-hidden" ref={ viewportRef }>
          <div className="flex justify-start items-center gap-6 md:gap-6 lg:gap-10 h-80 md:h-80 lg:h-96 cursor-ew-resize">
            { [ GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4 ].map((image, i) => (
              <div key={ i } className="shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-full rounded overflow-hidden">
                <img className="w-full h-full object-cover" src={ image } alt={ i } />
              </div>
            )) }          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery