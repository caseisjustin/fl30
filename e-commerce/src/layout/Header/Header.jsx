import heroImageDesktop from "../../assets/Hero.png";
import heroImageMobile from "../../assets/HeroMobile.png";

const Header = () => {
  return (
    <section className="relative bg-[#F2F0F1] overflow-hidden">
      {/* Desktop Background Image */}
      <div
        className="hidden lg:block absolute inset-0 bg-no-repeat bg-cover bg-right"
        style={{ backgroundImage: `url(${heroImageDesktop})` }}
      >
        <div className="w-full h-full bg-gradient-to-r from-[#F2F0F1] to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 lg:py-32 flex flex-col items-center lg:items-start justify-center text-center lg:text-left min-h-[80vh]">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Find Clothes That Match Your Style
          </h1>
          <p className="text-gray-700 text-base sm:text-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300">
            Shop Now
          </button>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900">200+</h4>
              <p className="text-sm text-gray-500">International Brands</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">2,000+</h4>
              <p className="text-sm text-gray-500">High-Quality Products</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">30,000+</h4>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full flex justify-center mb-8">
        <img
          src={heroImageMobile}
          alt="Hero Mobile"
          className="w-full max-w-[420px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Header;
