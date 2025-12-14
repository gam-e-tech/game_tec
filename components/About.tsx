import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm shadow-xl">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I am a dedicated and ambitious Civil Engineering student at <strong className="text-blue-400">Addis Ababa University</strong> with a strong passion for creativity and technology. 
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              My journey is unique—blending the technical rigor of <strong className="text-teal-400">Engineering</strong> with the fluid creativity of <strong className="text-teal-400">Graphic Design</strong> and <strong className="text-teal-400">Video Editing</strong>.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              With a background in metal fabrication, I possess a hands-on understanding of materials and structures. I am motivated to leverage AI tools, digital media, and engineering knowledge to create impactful solutions and contribute to global environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
