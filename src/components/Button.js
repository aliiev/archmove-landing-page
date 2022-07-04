const Button = ({ text, className, onClick, disabled }) => (
  <button className={ `bg-primary hover:bg-primary-400 disabled:bg-primary-400 rounded text-sm 2xl:text-base text-white font-semibold w-full lg:w-auto px-8 py-3.5 ${ className }` } onClick={ onClick } disabled={ disabled }>
    { text }
  </button>
)

export default Button