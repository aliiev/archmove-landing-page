const GallerySlide = ({ image, alt }) => (
  <div className="shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-full rounded overflow-hidden">
    <img className="w-full h-full object-cover" src={ image } alt="Slide" />
  </div>
)

export default GallerySlide