import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-emerald-50 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-900">LIFESCC</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 font-medium hover:text-emerald-600 transition-colors">Home</a>
            <a href="#programs" className="text-gray-600 hover:text-emerald-600 transition-colors">Programs</a>
            <a href="#why-us" className="text-gray-600 hover:text-emerald-600 transition-colors">Why Us</a>
            <a href="#results" className="text-gray-600 hover:text-emerald-600 transition-colors">Results</a>
            <a href="#faq" className="text-gray-600 hover:text-emerald-600 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden sm:flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Book Consultation</span>
            </button>
            <button className="px-6 py-2 text-sm font-medium bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
