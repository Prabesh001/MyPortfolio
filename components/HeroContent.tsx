import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

const HeroContent = ({ isVisible, typedText, isTyping }) => {
  return (
    <div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-400 animate-fade-in">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-blue-400">
                  {typedText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </span>
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light animate-slide-up">
              Full Stack Developer
            </h2>
            <p className="text-xl text-gray-400 max-w-lg animate-slide-up">
              Building clean, functional, and user-focused applications
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <Badge
                variant="outline"
                className="border-blue-400 text-blue-400 animate-bounce"
              >
                🧠 Currently learning TypeScript
              </Badge>
              <Badge
                variant="outline"
                className="border-green-400 text-green-400 animate-bounce delay-100"
              >
                🤝 Open to collaborations
              </Badge>
            </div>
            <Button size="lg" className="btn-primary animate-slide-up">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative animate-float">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Prabesh Dahal"
                  width={400}
                  height={400}
                  className="rounded-full border-4 border-blue-400/30 relative z-10 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center text-center space-y-8">
          <div
            className={`space-y-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-gray-400 animate-fade-in">Hi, I'm</p>
            <h1 className="text-4xl font-bold">
              <span className="text-blue-400">
                {typedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </span>
            </h1>
            <h2 className="text-xl text-gray-300 font-light animate-slide-up">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-400 animate-slide-up">
              Building clean, functional, and user-focused applications
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative animate-float">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Prabesh Dahal"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-blue-400/30 relative z-10"
                />
              </div>
            </div>
          </div>

          <div
            className={`space-y-4 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-wrap justify-center gap-3">
              <Badge
                variant="outline"
                className="border-blue-400 text-blue-400 animate-bounce"
              >
                🧠 Currently learning TypeScript
              </Badge>
              <Badge
                variant="outline"
                className="border-green-400 text-green-400 animate-bounce delay-100"
              >
                🤝 Open to collaborations
              </Badge>
            </div>
            <Button size="lg" className="btn-primary">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
