"use client";

const experiences = [
  {
    role: "SharePoint Developer",
    company: "ProV International (Synlab)",
    date: "Nov 2023 – Present",
    highlights: [
      "Cut approval turnaround time by 70% by engineering automated backend workflows and instant notification systems that replaced manual approver follow-ups across multiple countries.",
      "Delivered full-stack React/TypeScript applications used by cross-functional stakeholders in multiple countries, owning the complete SDLC as one of two engineers on the team.",
      "Eliminated manual data-entry bottlenecks by integrating SharePoint, Power Automate, and third-party services at enterprise scale; led client training sessions across multiple projects.",
      "Provide ongoing Tier 2/3 support for SharePoint and Power Platform environments, including inherited systems, resolving permissions issues, workflow failures, site performance problems, and SPFx bugs.",
      "Migrated SharePoint sites from classic to modern experience, restructuring site architecture while preserving content and permissions.",
      "Manage Azure AD user accounts/permissions alongside SPFx development, extending into platform administration.",
      "Design site columns, content types, and hub site architecture — including hub site configuration and site associations — to support scalable SPFx webpart deployment."
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
