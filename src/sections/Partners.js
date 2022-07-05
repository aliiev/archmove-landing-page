import { PartnerImg1, PartnerImg2, PartnerImg3, PartnerImg4, PartnerImg5 } from '../resources/images'

const Partners = () => (
  <section className="border-b py-6 md:py-8 lg:py-12">
    <div className="container mx-auto px-6 md:px-12 2xl:px-32">
      <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-black font-serif font-extralarge leading-tight">Our Partners</h2>
      <div className="grid grid-cols-2 md:flex justify-between items-center gap-x-6 mt-0 md:mt-2 lg:mt-8">
        { [ PartnerImg1, PartnerImg2, PartnerImg3, PartnerImg4, PartnerImg5 ].map((image, i) => (
          <div className="w-full" key={ i }>
            <img src={ image } alt={ i } />
          </div>
        )) }
      </div>
    </div>
  </section>
)

export default Partners