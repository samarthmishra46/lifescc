import { User, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    age: 35,
    location: 'Hyderabad',
    quote: 'My hairline had been receding for years and it affected my confidence. The FUE transplant at LIFESCC gave me natural, dense growth within months. The hairline looks so real that no one can guess I had a procedure.',
    avatar: 'bg-gradient-to-br from-emerald-200 to-emerald-400'
  },
  {
    name: 'Preethi M',
    age: 29,
    location: 'Vizag',
    quote: 'Stress made my hair fall rapidly and I started thinning near the crown. Their stem-cell and PRP program made my scalp healthier, and I saw new strands growing in areas I thought were gone forever.',
    avatar: 'bg-gradient-to-br from-teal-200 to-teal-400'
  },
  {
    name: 'Srinivas Reddy',
    age: 41,
    location: 'Vijayawada',
    quote: 'I tried medicines and oils for years without results. LIFESCC identified the real reason for my hair fall and created a personalised plan. Now my hair is thicker, stronger and finally stable.',
    avatar: 'bg-gradient-to-br from-cyan-200 to-cyan-400'
  },
  {
    name: 'Ananya Subramani',
    age: 33,
    location: 'Hyderabad',
    quote: 'My hair was thinning all over after childbirth. Their regrowth program restored my volume naturally and made my hair feel alive again.',
    avatar: 'bg-gradient-to-br from-blue-200 to-blue-400'
  }
];

export default function Articles() {
  return (
    <section id="results" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Client Results
          </h2>
          <p className="text-xl text-gray-600">Hear from customers who transformed their hair with LIFESCC</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-emerald-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-emerald-200" />
              
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-full ${testimonial.avatar} flex items-center justify-center shadow-lg`}>
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {testimonial.name}, {testimonial.age}
                  </h3>
                  <p className="text-emerald-700 font-medium">{testimonial.location}</p>
                </div>
              </div>

              <blockquote className="text-gray-700 leading-relaxed italic text-lg">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Begin Your Hair Transformation?
          </h3>
          <p className="text-xl mb-8 text-emerald-50 max-w-3xl mx-auto">
            You deserve hair that looks natural, feels fuller and restores your confidence. 
            At LIFESCC, every step of your journey is guided by experienced doctors, advanced technology and personalised care.
          </p>
          <p className="text-lg mb-8 text-emerald-100">
            Your new hair begins with a single consultation. Book today and take the first step toward a fuller, stronger, younger-looking hairline.
          </p>
          <button className="bg-white text-emerald-700 px-10 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg text-lg">
            Book My Free Scalp Check-Up
          </button>
        </div>
      </div>
    </section>
  );
}
