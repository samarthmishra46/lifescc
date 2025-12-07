export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full">
              <span className="text-sm font-semibold text-emerald-800">The Most Advanced Hair Restoration & Transplant System</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                A Hair Solution Program That Restores Your Roots <span className="text-emerald-600">From Within</span>
              </h1>
              <div className="space-y-4 text-gray-700 text-lg">
                <p className="leading-relaxed">
                  Hair loss isn't just about bald spots.
                </p>
                <p className="leading-relaxed">
                  With LIFESCC, you don't just cover the gap — you <strong>rebuild the hairline</strong>, <strong>regenerate follicles</strong>, and restore the way your hair grows, moves, and ages.
                </p>
                <p className="leading-relaxed">
                  You deserve hair that looks natural, feels full, and makes you feel confident every single day.
                </p>
              </div>
              <p className="text-emerald-800 font-medium">
                Begin your personalised scalp evaluation today. Your new hair is waiting.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/30 text-lg">
                Begin My Hair Transformation
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 z-10">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">35+ Years Experience</span>
            </div>

            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/dqyizevct/image/upload/v1765087701/istockphoto-1301956338-612x612-removebg-preview_ygwxz4.png" 
                alt="Hair Restoration Expert"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
