"use client";

const experiences = [
  {
    role: "SharePoint Developer",
    company: "ProV International (Synlab)",
    date: "Nov 2023 – Present",
    highlights: [
      "Led and owned the development of custom full-stack React applications, leveraging TypeScript to build type-safe, reusable component libraries used across the organization.",
      "Engineered decoupled frontend solutions that interface with complex data layers, optimizing state management and reducing API latency.",
      "Designed and deployed automated backend workflows and system integrations that streamlined core business operations, significantly reducing manual data entry.",
      "Managed the full SDLC, from initial systems design and schema modeling to CI/CD deployment and stakeholder sign-off.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Solventis Asia Pacific Inc. (Synergy)",
    date: "Jan 2022 – Sep 2023",
    highlights: [
      "Developed custom web applications and modular UI components using the SPFx framework, React and Typescript, focusing on responsive design and user friendly applications.",
      "Built and maintained automation flows to handle complex business logic and cross-platform data synchronization.",
      "Bridged the gap between technical requirements and user experience, collaborating with stakeholders to deliver scalable, high-impact software solutions.",
      "Mentored junior team members and supported onboarding and code standards.",
    ],
  },
  {
    role: "Web Developer",
    company: "ThinkSumo Creative Media Inc.",
    date: "Jul 2021 – Nov 2021",
    highlights: [
      "Contributed to PHP/Laravel-based web applications, managing database migrations and server-side rendering for diverse client projects.",
      "Collaborated closely with project managers and clients to meet technical requirements and deadlines.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-12 px-8 bg-gray-50 rounded-lg shadow m-10 md:m-20 scroll-mt-16"
    >
      <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600">
              {exp.company} • {exp.date}
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {exp.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
