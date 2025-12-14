import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Journey So Far</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            
            <div className="space-y-8 border-l-2 border-slate-700 ml-3 pl-8">
              {EXPERIENCES.map((job, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-900 border-4 border-blue-500"></div>
                  <h4 className="text-xl font-bold text-slate-100">{job.role}</h4>
                  <div className="text-blue-400 font-medium mb-1">{job.company}</div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {job.period}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm marker:text-blue-500">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
             <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-teal-400" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-8 border-l-2 border-slate-700 ml-3 pl-8">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-900 border-4 border-teal-500"></div>
                  <h4 className="text-xl font-bold text-slate-100">{edu.degree}</h4>
                  <div className="text-teal-400 font-medium mb-1">{edu.institution}</div>
                   <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {edu.period}</span>
                  </div>
                  <p className="text-slate-300 text-sm">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Volunteering Teaser */}
             <div className="mt-12 bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                <h4 className="font-bold text-lg mb-2">Community Volunteer</h4>
                <p className="text-slate-400 text-sm">
                  Active Community Support Volunteer in Addis Ababa since 2024. Helping underprivileged families and supporting small business startups.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
