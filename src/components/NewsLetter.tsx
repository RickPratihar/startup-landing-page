
const NewsLetter = () => {
  return (
  <section className="py-20 relative overflow-hidden animated-dark-bg text-white">
      {/* Decorative Green Circles */}
      <div className="absolute top-0 left-0 w-50 h-50 md:w-70 md:h-70 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-50 h-50 md:w-70 md:h-70 bg-blue-500 rounded-full transform translate-x-1/2 translate-y-1/2" />

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center px-4 z-10 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug mb-10">
         Accelerate Growth. Strengthen Connections. Drive More Sales Today.
        </h2>

        {/* <div className="flex justify-center">
          <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-xl">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent outline-none px-4 text-black text-base"
            />
          </div>
        </div> */}
            <button className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition duration-200 cursor-pointer">
              Get Started Now!
            </button>
      </div>
    </section>
  );
};

export default NewsLetter;
