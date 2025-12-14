import React from 'react';
import { Mail, Phone, MapPin, Instagram, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-white">Let's Work Together</h2>
            <p className="text-slate-400 mb-8">
              Whether it's a structural engineering project, a video editing commission, or a graphic design need, I'm ready to bring my diverse skillset to your project.
            </p>
            <div className="flex gap-4">
               <a href="#" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="#" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                 <Linkedin className="w-5 h-5" />
               </a>
               <a href="#" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                 <Github className="w-5 h-5" />
               </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-slate-400">+251 940 732 824</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-500/10 rounded-lg text-teal-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <a href="mailto:gamefekeda663@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                  gamefekeda663@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p className="text-slate-400">Sidist Kilo Campus, Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Gemechis Fekede. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
