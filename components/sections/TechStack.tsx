import { techStacks } from "@/data";
import { Code, Database, Server, Smartphone, Wrench } from "lucide-react";
import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <div>
      <section id="techstack" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
            Tech Stack
          </h2>
          <div className="space-y-12">
            {Object.entries(techStacks).map(
              ([category, items], categoryIndex) => (
                <div
                  key={category}
                  className="animate-fade-in"
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  <h3 className="text-2xl font-semibold text-center mb-8 text-white flex items-center justify-center">
                    {category === "Frontend" && (
                      <Code className="mr-3 h-6 w-6 text-blue-400" />
                    )}
                    {category === "Backend" && (
                      <Server className="mr-3 h-6 w-6 text-green-400" />
                    )}
                    {category === "Database" && (
                      <Database className="mr-3 h-6 w-6 text-purple-400" />
                    )}
                    {category === "Tools" && (
                      <Wrench className="mr-3 h-6 w-6 text-orange-400" />
                    )}
                    {category === "Mobile" && (
                      <Smartphone className="mr-3 h-6 w-6 text-pink-400" />
                    )}
                    {category}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-8">
                    {items.map((tech, index) => (
                      <div
                        key={tech.name}
                        className={`group flex flex-col items-center p-4 bg-slate-800/50 rounded-lg border transition-all duration-300 hover:scale-110 hover:shadow-lg animate-slide-up ${tech.className}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-16 h-16 mb-3 relative">
                          <Image
                            src={tech.icon || "/placeholder.svg"}
                            alt={tech.name}
                            width={64}
                            height={64}
                            className="group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <span
                          className={`text-sm font-medium text-gray-300 transition-colors ${tech.className}`}
                        >
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
