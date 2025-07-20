// LogoSlider.tsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from "../assets/assets";

const logos = [
  assets.brand1,
  assets.brand2,
  assets.brand3,
  assets.brand4,
  assets.brand5,
  assets.brand6,
];

const LogoSlider = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="py-12 max-w-2xl mx-auto px-4">
      <div className="flex items-center justify-center mb-8">
        <div className="w-1/5 h-px bg-gray-300" />
        <h2 className="text-center text-sm text-white px-4 font-medium">
          Already Join 15K+ Business Using GoStartUp
        </h2>
        <div className="w-1/5 h-px bg-gray-300" />
      </div>

      <Slider {...settings}>
        {logos.map((logo, idx) => (
          <div key={idx} className="flex justify-center">
            <img src={logo} alt={`Logo ${idx}`} className="h-6 object-contain filter brightness-0 invert"
/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
