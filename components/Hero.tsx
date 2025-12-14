import React from 'react';
import { Download, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="mb-6 inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium animate-fade-in-down">
          Available for Freelance Projects
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Gemechis Fekede</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between structural precision and digital creativity.
          <br />
          <span className="text-slate-200">Civil Engineering Student</span> | <span className="text-slate-200">Video Editor</span> | <span className="text-slate-200">Designer</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
          <button 
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all border border-slate-700 flex items-center gap-2"
            onClick={() => alert("Resume download would trigger here.")}
          >
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <a href="#about" className="text-slate-500 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
