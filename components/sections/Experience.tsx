import { experience } from "@/data";
import { Calendar, MapPin } from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <div>
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              {experience.map((exp, index) => (
                <div
                  key={exp.company}
                  className="relative flex items-start mb-12 animate-slide-right"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-900 animate-pulse"></div>
                  <div className="ml-16 bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.date}
                      </div>
                    </div>
                    <div className="flex items-center text-blue-400 mb-3">
                      <MapPin className="mr-1 h-4 w-4" />
                      {exp.company}
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
