import { Award, Grid3x3, Sparkles, CheckCircle, UserCheck } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '35+ Years of Doctor-Led Hair Expertise',
    description: 'Your scalp is assessed by senior specialists skilled in FUE transplants, stem-cell therapy, PRP and advanced hair-loss treatments — ensuring safe, natural results.',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    icon: Grid3x3,
    title: 'Complete Range of Hair Solutions Under One Roof',
    description: 'From FUE transplant to stem-cell regrowth, PRP, medical hair-fall control and non-surgical hair replacement — the right solution is chosen for your scalp, not a one-size-fits-all approach.',
    color: 'bg-teal-100 text-teal-600'
  },
  {
    icon: Sparkles,
    title: 'Natural-Looking, High-Density Results',
    description: 'Hairlines are designed scientifically based on age, face shape and natural growth direction — ensuring full, natural, seamless results.',
    color: 'bg-cyan-100 text-cyan-600'
  },
  {
    icon: CheckCircle,
    title: 'Advanced, Certified Technology and Techniques',
    description: 'We use US-FDA approved equipment for extraction, graft preservation and growth stimulation to maximise safety and regrowth success.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: UserCheck,
    title: 'Personalised Care and Continuous Follow-Up',
    description: 'You get structured support from consultation to full regrowth — with detailed planning, step-wise follow-ups, and scalp guidance to ensure your hair becomes fuller, denser and stronger over time.',
    color: 'bg-indigo-100 text-indigo-600'
  }
];

export default function TrustSection() {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Makes LIFESCC Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Science-backed expertise, personalised care, and results that last
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100 hover:border-emerald-200"
            >
              <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
