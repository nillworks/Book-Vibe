import heroImage from '../../../../../public/assets/pngwing 1.png';

const Hero = () => {
  return (
    <section className="containers 2xl:rounded-2xl px-3 space-y-8 bg-PrimaryBg py-10 flex flex-col sm:gap-4 sm:flex-row items-center md:justify-between lg:justify-around">
      {/* left Details And Button */}
      <div className="text-center sm:text-left space-y-4">
        <h1 className="text-4xl lg:text-5xl leading-[44px] text-center font-bold sm:text-left lg:leading-[64px] font-SrcFont">
          Books to freshen up <br className="hidden sm:block" /> your bookshelf
        </h1>
        <button className="btn bg-buttonPrimary text-white border-none shadow-none">
          View The List
        </button>
      </div>

      {/* Right Images */}
      <div>
        <img src={heroImage} alt="hero Image" className="mx-auto max-w-full" />
      </div>
    </section>
  );
};

export default Hero;
