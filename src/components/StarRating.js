import { StarIcon } from '../resources/icons'


const StarRating = ({ total, active }) => (
  <div className="flex items-center gap-1">
    { [ ...Array(total) ].map((star, i) => {
      return i < active ? <StarIcon key={ i } className="md:w-4 lg:w-6 fill-white drop-shadow" /> : <StarIcon key={ i } className="md:w-4 lg:w-6 fill-transparent stroke-2 stroke-white drop-shadow" />
    }) }
  </div>
)

export default StarRating