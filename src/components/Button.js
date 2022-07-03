const Button = ({ text, className }) => (
  <button className={ `bg-primary hover:bg-primary-400 rounded text-sm 2xl:text-base text-white font-semibold w-full lg:w-auto px-8 py-5 ${ className }` }>
    { text }
  </button>
)

export default Button