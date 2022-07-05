import { useState, useEffect, useCallback } from 'react'
import { LeftIcon, RightIcon } from '../resources/icons'

const SliderControl = ({ embla, className }) => {
  const [ prevBtnEnabled, setPrevBtnEnabled ] = useState(false)
  const [ nextBtnEnabled, setNextBtnEnabled ] = useState(false)

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
    <div className={ className }>
      <button className={ `${ prevBtnEnabled ? 'bg-neutral-100 hover:bg-neutral-50' : 'bg-none' } rounded p-2 md:p-3 lg:p-3.5` } onClick={ scrollPrev } disabled={ !prevBtnEnabled }>
        <LeftIcon className={ prevBtnEnabled ? 'stroke-primary' : 'stroke-neutral-600' } />
      </button>
      <button className={ `${ nextBtnEnabled ? 'bg-neutral-100 hover:bg-neutral-50' : 'bg-none' } rounded p-2 md:p-3 lg:p-3.5` } onClick={ scrollNext } disabled={ !nextBtnEnabled }>
        <RightIcon className={ nextBtnEnabled ? 'stroke-primary' : 'stroke-neutral-600' } />
      </button>
    </div>
  )
}

export default SliderControl