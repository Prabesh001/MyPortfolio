import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-400 animate-fade-in">
          About Me
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6 animate-slide-right">
              <p className="text-lg text-gray-300 leading-relaxed text-balance">
                I'm a Full-Stack Developer who enjoys building clean,
                functional, and user-focused applications. I work mostly with
                MERN Stack, and I'm always open to learning something new or
                collaborating on interesting projects.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed text-balance">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in writing clean,
                maintainable code and creating exceptional user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed text-balance">
                My journey in web development started with curiosity about how
                websites work, and it has evolved into a passion for creating
                digital solutions that make a difference. I enjoy the challenge
                of turning complex problems into simple, beautiful, and
                intuitive designs.
              </p>
            </div>

            {/* Side Content - Takes 1 column */}
            <div className="space-y-6 animate-slide-left">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                What I'm Up To
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">
                    Currently learning TypeScript
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">
                    Open to collaborations & freelance work
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">
                    Always ready to chat about code
                  </span>
                </div>
              </div>

              <div className="mt-8 p-2 bg-slate-700/30 rounded-lg border border-slate-600">
                <h4 className="text-lg font-medium text-blue-400 mb-3">
                  Quick Stats
                </h4>

                <Image
                  alt="Github Stats"
                  src={
                    "https://camo.githubusercontent.com/4df54f1d70a2942995c80b4d26f3ed10f91cd472984a430e9386036f6583aef6/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d507261626573683030312673686f775f69636f6e733d7472756526686964653d69737375657326266c61796f75743d636f6d70616374267468656d653d746f6b796f6e69676874"
                  }
                  height={800}
                  width={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
