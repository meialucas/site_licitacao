import React from 'react';
import { Menu, X, ChevronRight, Users, Briefcase, BookOpen, Phone, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Clients />
      <Contact />
    </div>
  );
}

export default App;