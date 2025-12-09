export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="https://res.cloudinary.com/dqyizevct/image/upload/v1765269247/Gemini_Generated_Image_kol3yykol3yykol3-removebg-preview_wszmyy.png"
                alt="Lifescc Logo"
                className="h-24 w-auto"
              />
              
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 font-medium hover:text-emerald-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
            <a href="#consultation" className="text-gray-700 hover:text-emerald-600 transition-colors">Consultation</a>
            <a href="#articles" className="text-gray-700 hover:text-emerald-600 transition-colors">Articles</a>
          </nav>

          <div className="flex items-center">
            
          </div>
        </div>
      </div>
    </header>
  );
}
