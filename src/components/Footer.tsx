export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">LIFESCC</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Advanced Hair Restoration & Transplant Solutions with 35+ years of medical expertise.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Hair Regrowth & Restoration</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Hair Transplant (FUE)</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Stem-Cell Therapy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">PRP Treatment</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Client Results</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Medical Disclaimer</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 LIFESCC. All rights reserved. Advanced Hair Restoration Solutions.</p>
        </div>
      </div>
    </footer>
  );
}
