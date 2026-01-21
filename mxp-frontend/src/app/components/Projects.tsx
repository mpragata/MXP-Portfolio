interface Project {
  title: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Procurement Dashboard",
    description:
      "Dashboard used by our Procurement Team to create, modify, delete and manage Initiatives and Opportunities as well as track the item budgets, capex, opex, and actuals in a multi-step form.",
    link: "#",
  },
  {
    title: "Cost Portal Dashboard",
    description:
      "Dashboard used by our IT Team to create, modify, delete, manage, and submit project proposals that goes through a multi-step approval process with automated notifications to track budget, progress and status.",
    link: "#",
  },
  {
    title: "Finance Tracker",
    description:
      "Full-stack app with React, Next.js, Node.js, Express, MongoDB. Tracks income, expenses, and visualizes spending with charts.",
    link: "https://finance-tracker-iota-three.vercel.app/",
  },
  {
    title: "Background Job Tracker",
    description:
      "Simulates asynchronous job execution with retry logic and job chaining. Built with React, Next.js, Node.js, Express and MongoDB.",
    link: "https://background-job-tracker.vercel.app/",
  },
  {
    title: "Feature Flags",
    description:
      "Simulates toggling features on/off for dashboards. Uses React, Next.js, Zustand, Node.js, Express, and MongoDB.",
    link: "https://feature-flag-cyan.vercel.app/",
  },
  {
    title: "External Data Service",
    description:
      "Aggregates third-party APIs like weather, currency rates and Stripe payment intents. Built with React, Next.js, Node.js, Express and MongoDB.",
    link: "https://external-data-service.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 px-8 bg-gray-50 rounded-xl shadow-lg m-10 md:m-20 scroll-mt-16"
    >
      <h2 className="text-3xl mb-8 font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="border rounded-lg p-4 hover:shadow-lg transition-ease-in-out duration-200 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-700">{p.description}</p>
            {p.link &&
              p.title !== "Procurement Dashboard" &&
              p.title !== "Cost Portal Dashboard" && (
                <a
                  href={p.link}
                  target="_blank"
                  className="mt-2 inline-block text-black-600 hover:underline"
                >
                  View Project
                </a>
              )}
          </div>
        ))}
      </div>
    </section>
  );
}
