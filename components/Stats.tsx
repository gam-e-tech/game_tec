import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { SKILL_CHART_DATA } from '../constants';
import { PenTool, Code, Hammer, Video } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
       <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart Side */}
          <div className="h-[400px] w-full bg-slate-800/30 rounded-2xl border border-slate-700/50 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_CHART_DATA}>
                <PolarGrid stroke="#475569" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* List Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Creative</h3>
              <p className="text-slate-400 text-sm">Video Editing, Motion Graphics, Color Grading, Branding Identity</p>
            </div>

            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-colors">
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4 text-teal-400">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Hands-on</h3>
              <p className="text-slate-400 text-sm">Metal Fabrication, Electrical Systems, Welding, Assembly</p>
            </div>

            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Software</h3>
              <p className="text-slate-400 text-sm">MS Office Suite, Adobe Creative Suite (Premiere, Photoshop), AI Tools</p>
            </div>

            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-colors">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Core Strengths</h3>
              <p className="text-slate-400 text-sm">Problem Solving, Attention to Detail, Time Management, Teamwork</p>
            </div>
          </div>
        </div>
       </div>
    </section>
  );
};

export default Stats;
