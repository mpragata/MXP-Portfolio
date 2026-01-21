"use client";

export default function Hero() {
  return (
    <section
      id="about"
      className="bg-gray-50 rounded-lg px-8 py-10 shadow m-10 md:m-20 scroll-mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4 transform transition-transform duration-300 ease-out origin-left hover:scale-110">
            Marc Xavier Pragata
          </h1>

          <p className="text-lg text-gray-800 mb-4 leading-relaxed transform transition-transform duration-300 ease-out origin-left hover:scale-110">
            I design and build production-ready web and enterprise applications,
            specializing in React, Next.js, Node.js, and TypeScript, with
            experience delivering SPFx solutions, workflow automations, and
            integrations across Microsoft 365 and Power Platform.
          </p>

          <p className="text-sm text-gray-600 transform transition-transform duration-300 ease-out origin-left hover:scale-110">
            Full-stack developer · 4+ years experience · React · Next.js ·
            Node.js · Express · TypeScript · SPFx · Microsoft 365 · MongoDB
          </p>
        </div>

        {/* Right: Photo / Placeholder */}
        <div className="flex justify-center">
          <img
            src="/aaa.jpg"
            alt="Description of my image"
            width={350}
            height={350}
            className="rounded-full"
          ></img>
        </div>
      </div>
    </section>
  );
}
