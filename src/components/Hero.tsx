export default function Hero() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      
      {/* FULL BACKGROUND IMAGE (covers entire hero) */}
      <img
        src="https://res.cloudinary.com/dqyizevct/image/upload/v1765267955/Gemini_Generated_Image_99l2lv99l2lv99l2_qr9vkl.png"
        alt="Hair Restoration Expert"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* LEFT SIDE GREEN TINT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r 
        from-emerald-900/95 via-emerald-800/80 via-40% to-transparent">
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-6 text-white">
            
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-emerald-500 rounded-full shadow-lg">
              <span className="text-sm font-semibold text-white">The Most Advanced Hair Restoration & Transplant System</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              A Hair Solution Program That Restores Your Roots <span className="text-emerald-300">From Within</span>
            </h1>

            {/* Paragraph */}
            <div className="text-lg text-white leading-relaxed space-y-4" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              <p>Hair loss isn't just about bald spots.</p>
              <p>
                With LIFESCC, you don't just cover the gap — you <strong>rebuild the hairline</strong>, <strong>regenerate follicles</strong>, and restore the way your hair grows, moves, and ages.
              </p>
              <p>
                You deserve hair that looks natural, feels full, and makes you feel confident every single day.
              </p>
            </div>

            {/* Call to action text */}
            <p className="text-emerald-200 font-medium text-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              Begin your personalised scalp evaluation today. Your new hair is waiting.
            </p>

            {/* CTA Button */}
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition shadow-lg text-lg">
              Begin My Hair Transformation
            </button>

          </div>
        </div>
      </div>

    </section>
  );
}
