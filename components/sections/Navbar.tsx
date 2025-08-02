import React from "react";

const Navbar = ({ scrollToSection, activeSection, scrollProgress }) => {
  const links = [
    { name: "Home", icon: "🏠", section: "home" },
    { name: "About", icon: "👨‍💻", section: "about" },
    { name: "Tech", icon: "⚡", section: "techstack" },
    { name: "Projects", icon: "🚀", section: "projects" },
    { name: "Experience", icon: "💼", section: "experience" },
    { name: "Contact", icon: "📧", section: "contact" },
  ];
  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700 hidden md:block">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-400 hover:scale-110 transition-transform duration-300">
              Prabesh
            </div>
            <div className="flex space-x-8">
              {links.map(({ name, section }) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 hover:scale-110 ${
                    activeSection === section
                      ? "text-blue-400"
                      : "text-gray-300"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Progress Line - Desktop (under navbar) */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </nav>

      {/* Small Screen Navigation (sm only) */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-full px-4 py-2 hidden sm:block md:hidden">
        <div className="flex items-center space-x-1">
          {/* <div className="text-lg font-bold text-blue-400 mr-3">P</div> */}
          {links.map(({ name, section }) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-xs font-medium px-2 py-1 rounded-full transition-all duration-300 hover:bg-blue-600/20 ${
                activeSection === section
                  ? "text-blue-400 bg-blue-600/20"
                  : "text-gray-300"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
        {/* Progress Line - Small Screen (under navbar) */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-300 ease-out rounded-full"
          style={{ width: `${scrollProgress}%` }}
        />
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-t border-slate-700 sm:hidden">
        {/* Progress Line - Mobile (above navbar) */}
        <div
          className="absolute top-0 left-0 h-0.5 bg-green-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="flex justify-around items-center py-2">
          {links.map(({ name, section, icon }) => (
            <button
              key={name}
              onClick={() => scrollToSection(section)}
              className={`flex flex-col items-center justify-center py-2 px-1 transition-all duration-300 hover:scale-110 ${
                activeSection === section ? "text-blue-400" : "text-gray-400"
              }`}
            >
              <span className="text-lg mb-1">{icon}</span>
              <span className="text-xs font-medium">{name}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
