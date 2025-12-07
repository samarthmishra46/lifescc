import { AlertCircle, XCircle, CheckCircle } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Most People Struggle
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* The Problem */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-red-200 hover:shadow-lg transition-all">
            <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-6">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                You've tried oils, medications, maybe even generic transplants—but your hair still thins. 
                Your crown still shows. You still avoid photos and feel less confident.
              </p>
              <p>
                The struggle isn't just cosmetic—your scalp tells a story: stress, hormones, genetics, 
                environmental damage.
              </p>
              <p className="font-medium text-gray-900">
                And every "quick fix" you tried failed to address that.
              </p>
            </div>
          </div>

          {/* The Reality */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-orange-200 hover:shadow-lg transition-all">
            <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
              <XCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Reality</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                It's not a lack of effort.
              </p>
              <p>
                Your hair needs a <strong>scientifically guided restoration</strong>—not just topical products 
                or basic surgery.
              </p>
              <p>
                Because when hair follicles at the root are damaged, shallow fixes won't hold.
              </p>
              <p className="font-medium text-gray-900">
                You need a clinic that treats the engine of hair growth—not just the symptom.
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 shadow-lg text-white hover:shadow-xl transition-all">
            <div className="w-16 h-16 rounded-full bg-white text-emerald-600 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">The Solution</h3>
            <div className="space-y-4 leading-relaxed">
              <p className="font-medium">
                A medically advanced hair-restoration system that:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-200">•</span>
                  <span>Regenerates hair follicles (stem-cell / FUE)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-200">•</span>
                  <span>Covers donor & recipient areas with precision</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-200">•</span>
                  <span>Uses non-surgical and surgical options tailored to you</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-200">•</span>
                  <span>Works for both men and women</span>
                </li>
              </ul>
              <p className="font-bold text-lg mt-6 pt-6 border-t border-emerald-400">
                This is why thousands in South India trust LIFESCC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
