import { StarRating } from '../../components'

const SignUpSlide = ({ props }) => (
  <div className="relative shrink-0 w-full h-full rounded overflow-hidden">
    <img className="w-full h-full object-cover object-top" src={ props.image } alt="Slide" />
    <div className="absolute bg-white/25 rounded text-white md:bottom-3 lg:bottom-6 md:left-3 lg:left-6 md:right-3 lg:right-6 overflow-hidden">
      <div className="backdrop-blur rounded w-full h-full md:px-4 lg:px-8 md:py-3 lg:py-6">
        <p className="md:text-sm lg:text-xl font-bold drop-shadow">“{ props.content }”</p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex flex-col">
            <h2 className="md:text-lg lg:text-2xl font-serif font-bold drop-shadow">{ props.author }</h2>
            <span className="md:text-xs lg:text-base font-medium drop-shadow">{ props.company }</span>
          </div>
          <StarRating total={ 5 } active={ props.stars } />
        </div>
      </div>
    </div>
  </div>
)

export default SignUpSlide