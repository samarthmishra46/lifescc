import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import TrustSection from './components/TrustSection';
import OnlineChat from './components/OnlineChat';
import Problem from './components/Problem';
import Articles from './components/Articles';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Specialties />
      <TrustSection />
      <OnlineChat />
      <Problem />
      <Articles />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
