import { Leaf, Scissors, CheckCircle } from 'lucide-react';

const programs = [
  {
    icon: Leaf,
    title: 'Hair Regrowth & Restoration Program',
    description: 'Designed for customers experiencing hair thinning, weak follicles, stress-related shedding or hormonal hair loss. Focuses on strengthening existing roots and activating dormant follicles.',
    includes: [
      'Stem-cell hair rejuvenation',
      'PRP growth therapy',
      'Medical hair-fall control',
      'Scalp nourishment and strengthening',
      'DHT management for long-term protection'
    ],
    perfect: 'Perfect for customers who want visible regrowth without surgery.',
    color: 'emerald',
    image: 'https://res.cloudinary.com/dqyizevct/image/upload/v1765266286/FIRST-SUBPROGRAM_u0aira.png',
    imagePosition: 'left'
  },
  {
    icon: Scissors,
    title: 'Hair Transplant Program (FUE)',
    description: 'Ideal for customers with visible bald patches, receding hairlines or advanced hair thinning. Provides natural, long-lasting results through precise follicle extraction and implantation.',
    includes: [
      'FUE Hair Transplant',
      'High-density graft implantation',
      'Natural hairline design',
      'Donor area planning',
      'Advanced graft-preservation techniques'
    ],
    perfect: 'Perfect for customers who want a permanent, natural-looking hairline and fuller coverage.',
    color: 'teal',
    image: 'https://res.cloudinary.com/dqyizevct/image/upload/v1765266283/SECOND-SUBPROGRAM_gk9lyr.png',
    imagePosition: 'right'
  }
];

export default function OnlineChat() {
  return (
    <section id="programs" className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sub-Programs
          </h2>
          <p className="text-xl text-gray-600">
            Tailored Solutions for Every Stage of Hair Loss
          </p>
        </div>

        <div className="space-y-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className={`grid lg:grid-cols-2 gap-0 items-center ${
                program.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Image Section */}
                <div className={`${program.imagePosition === 'right' ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'} flex justify-center relative z-0`}>
                  <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden shadow-2xl border-8 border-white">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`${program.imagePosition === 'right' ? 'lg:order-1 lg:-mr-32' : 'lg:order-2 lg:-ml-32'} relative z-10`}>
                  <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all border border-gray-100">
                    <div className={`w-16 h-16 rounded-full bg-${program.color}-100 text-${program.color}-600 flex items-center justify-center mb-6`}>
                      <program.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {program.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {program.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <h4 className="font-semibold text-gray-900">Includes:</h4>
                      <ul className="space-y-2">
                        {program.includes.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className={`w-5 h-5 text-${program.color}-600 flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`bg-${program.color}-50 border border-${program.color}-200 rounded-lg p-4`}>
                      <p className={`text-${program.color}-800 font-medium`}>
                        {program.perfect}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
