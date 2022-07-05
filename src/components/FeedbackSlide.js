import { BlockquoteIcon } from '../resources/icons'

const FeedbackSlide = ({ content, author, company }) => (
  <div className="relative flex flex-col md:flex-row items-start gap-3 md:gap-12 w-full shrink-0">
    <img className="w-8 md:w-12" src={ BlockquoteIcon } alt="Blockquote" />
    <div>
      <p className="md:text-xl lg:text-3xl 2xl:text-4xl text-black font-light leading-snug">{ content }</p>
      <div className="text-sm md:text-base 2xl:text-lg text-black mt-4 md:mt-8 lg:mt-14">
        <span className="font-bold">{ author } </span>
        <span>— { company }</span>
      </div>
    </div>
  </div>
)

export default FeedbackSlide