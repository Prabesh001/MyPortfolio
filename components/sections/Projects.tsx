import { projects } from "@/data";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <div>
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </Link>
                    <Link
                      href={project.demo}
                      className="flex items-center text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Demo
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
