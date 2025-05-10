import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import versace from "../../../../assets/brands/Versace.png";
import gucci from "../../../../assets/brands/gucci.png";
import zara from "../../../../assets/brands/zara.png";
import prada from "../../../../assets/brands/prada.png";
import calvinKlein from "../../../../assets/brands/CalvinKlein.png";

const brands = [versace, zara, gucci, prada, calvinKlein];

const BrandCarousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 5, spacing: 15 },
      },
    },
    slides: { perView: 2, spacing: 10 },
  });

  return (
    <section className="px-8 py-6 bg-black">
      <div ref={sliderRef} className="keen-slider">
        {brands.map((logo, i) => (
          <div key={i} className="keen-slider__slide flex justify-center items-center">
            <img src={logo} alt={`Brand ${i}`} className="h-2 sm:h-6 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandCarousel;
