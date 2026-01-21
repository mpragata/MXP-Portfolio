"use client";

const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Zustand",
    "React Router",
  ],
  Backend: ["Node.js", "Express.js", "MongoDB", "JWT Auth"],
  "Enterprise & Automation": [
    "SharePoint",
    "SPFx",
    "Power Automate",
    "Power Apps",
    "Microsoft 365",
  ],
  "Tools & DevOps": [
    "Jest",
    "Git",
    "Jira",
    "Bitbucket",
    "Axios",
    "Vercel",
    "Render",
  ],
};

export default function Skills() {
  return (
    <section
      className="py-12 px-8 bg-gray-50 rounded-xl shadow-lg m-10 md:m-20 scroll-mt-16"
      id="skills"
    >
      <h2 className="text-3xl mb-8 font-bold">Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, techs]) => {
          return (
            <div
              key={category}
              className={`
                group relative p-8 rounded-lg border bg-white
                flex flex-col h-full transition-all duration-300
                hover:border-black hover:shadow-lg
              `}
            >
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-black transition-colors mb-8">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2 mb-12">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full text-xs font-bold border border-gray-200 bg-gray-50 group-hover:bg-white group-hover:border-gray-300 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto self-end">
                <span className="text-6xl font-black text-gray-50 group-hover:text-gray-100 transition-colors select-none pointer-events-none">
                  {category.charAt(0)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
