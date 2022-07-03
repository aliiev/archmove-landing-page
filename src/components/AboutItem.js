const AboutItem = ({ title, content, icon }) => (
  <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-3 md:gap-6 2xl:gap-9">
    <img className="w-10 md:w-8 2xl:w-12" src={ icon } alt="*" />
    <div className="text-center md:text-left">
      <h4 className="text-base 2xl:text-lg text-black font-bold">{ title }</h4>
      <p className="text-sm md:text-base md:text-sm 2xl:text-lg mt-0 md:mt-2">{ content }</p>
    </div>
  </div>
)

export default AboutItem