import { FiMail } from "react-icons/fi";

const Newsletter = () => {
  return (
    <section className="bg-black text-white py-14 px-6 sm:px-12 rounded-2xl my-10 mx-4 sm:mx-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        {/* Left Text Block */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-left leading-tight max-w-lg">
          STAY UPTO DATE ABOUT <br className="hidden sm:block" />
          OUR LATEST OFFERS
        </h2>

        {/* Form Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl">
          <div className="relative flex-1 w-full">
            <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-12 pr-4 py-3 rounded-full text-black placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white transition"
            />
          </div>
          <button className="bg-white text-black rounded-full px-6 py-3 font-semibold hover:bg-gray-200 transition whitespace-nowrap">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
