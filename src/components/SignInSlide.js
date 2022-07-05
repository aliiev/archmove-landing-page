const SignInSlide = ({ text, image }) => (
  <div className="relative shrink-0 w-full h-full rounded overflow-hidden">
    <img className="w-full h-full object-cover" src={ image } alt="Slide" />
    <div className="absolute bg-white/25 rounded bottom-6 left-6 right-6 overflow-hidden">
      <div className="backdrop-blur rounded w-full h-full px-8 py-6">
        <h2 className="md:text-xl lg:text-2xl text-white font-bold drop-shadow">{ text }</h2>
      </div>
    </div>
  </div>
)

export default SignInSlide