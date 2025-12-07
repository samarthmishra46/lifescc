import {
  FileText,
  Microscope,
  Stethoscope,
  ClipboardCheck,
  Calendar,
  Sparkles
} from 'lucide-react';

const journeySteps = [
  { 
    name: 'Medical Evaluation & Blood Analysis', 
    icon: FileText, 
    color: 'bg-emerald-100 text-emerald-600',
    description: 'Full blood sample to assess hormones, nutritional deficiencies, and scalp biomarkers'
  },
  { 
    name: 'Scalp & Follicle Assessment', 
    icon: Microscope, 
    color: 'bg-teal-100 text-teal-600',
    description: 'Advanced diagnostics evaluating hair follicle health, density, and growth cycles'
  },
  { 
    name: 'Expert Doctor Analysis', 
    icon: Stethoscope, 
    color: 'bg-cyan-100 text-cyan-600',
    description: '35+ years experienced doctors study your reports and hair-growth history'
  },
  { 
    name: 'Personalised Plan Created', 
    icon: ClipboardCheck, 
    color: 'bg-blue-100 text-blue-600',
    description: 'Customised action plan with exact treatment combination for your scalp'
  },
  { 
    name: 'Regular Follow-Ups', 
    icon: Calendar, 
    color: 'bg-indigo-100 text-indigo-600',
    description: 'Weekly or 3-day sessions to monitor regrowth and adjust treatment'
  },
  { 
    name: 'Complete Transformation', 
    icon: Sparkles, 
    color: 'bg-emerald-100 text-emerald-600',
    description: 'Visible regrowth, stronger strands, improved density and renewed confidence'
  },
];

export default function Specialties() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Happens After You Book an Appointment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Complete, Personalised, Doctor-Led Hair Restoration Journey Begins
          </p>
          <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
            When you book an appointment at LIFESCC, you enter a structured, medically guided transformation process 
            designed to diagnose the root cause of hair loss, restore follicle strength and deliver long-lasting hair regrowth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-start space-y-4 p-6 rounded-xl bg-white hover:shadow-xl transition-all cursor-pointer group border border-gray-100"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-lg">
                {index + 1}
              </div>
              <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform mt-2`}>
                <step.icon className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {step.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 font-medium mb-6">
            Ready to Begin Your Own Hair Transformation?
          </p>
          <p className="text-gray-600 mb-8">
            Your hair deserves expert restoration, personalised support and science-backed methods. Everything starts with your first consultation.
          </p>
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/30">
            Book My Free Scalp Check-Up
          </button>
        </div>
      </div>
    </section>
  );
}
