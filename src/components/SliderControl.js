import { useState, useEffect, useCallback } from 'react'

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
  )
}

export default SliderControl