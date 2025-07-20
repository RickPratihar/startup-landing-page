// TestimonialSlider.tsx
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "Gosaas has completely transformed how we manage projects. Easy to use and very intuitive.",
    name: "Al King",
    title: "Project Manager",
    avatar:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200",
  },
  {
    quote:
      "Managing creative teams became easier with Gosaas. Highly customizable and reliable.",
    name: "Sara Thomas",
    title: "Creative Director",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    quote:
      "The support team is amazing. Everything is intuitive and efficient. Great experience!",
    name: "Wizard Bona",
    title: "UX Designer",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    quote:
      "Our workflow has never been smoother. Gosaas is a must-have for agile teams.",
    name: "Lina Chou",
    title: "Scrum Master",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <section className="w-full py-20  text-white">
      <div className="w-full overflow-hidden px-0">
        <div className="">
          <h2 className="text-center text-4xl font-bold mb-2">
            Customer Reviews and <br /> Success Stories
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus. team-image Olivia Andrium Project Manager
            team-image Jemse Kemorun Project Designer
          </p>
        </div>
        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div key={idx} className="!px-2 md:!px-4">
              <div className="relative rounded-2xl p-8 md:p-10 bg-white/10 backdrop-blur-xl border border-white/10 text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] min-h-[320px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Top: Avatar & Name */}
                <div className="flex items-center gap-4 mb-4 z-10 relative">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-14 h-14 rounded-full border-2 border-white shadow-sm object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-300">{item.title}</p>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-xl text-gray-100 leading-relaxed z-10 relative">
                  {item.quote}
                </p>

                {/* Stars */}
                <div className="flex mt-4 gap-1 text-blue-400 z-10 relative">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>

                {/* Floating Quote Icon */}
                <div className="absolute bottom-4 right-4 text-[6rem] md:text-[7rem] text-cyan-300/20 z-0 leading-none select-none">
                  &ldquo;
                </div>

                {/* Soft light overlay (optional premium effect) */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-20 pointer-events-none" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
