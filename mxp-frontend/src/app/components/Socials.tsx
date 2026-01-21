"use client";
import { EnvelopeIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function ContactSocials() {
  const links = [
    {
      label: "Email Me",
      value: "marcxavierpragata@gmail.com",
      href: "mailto:marcxavierpragata@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/marcxavierpragata",
      href: "https://www.linkedin.com/in/marcxavierpragata/",
    },
    {
      label: "GitHub",
      value: "github.com/mpragata",
      href: "https://github.com/mpragata/",
    },
  ];

  return (
    <div className="bg-white rounded border border-gray-200 p-6 flex flex-col h-full shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl mb-2 font-bold">Let's work together</h2>
        <p className="text-gray-500 text-sm font-medium">
          Open to remote full-time full-stack developer positions.
        </p>
      </div>

      <div className="space-y-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-4 border border-black rounded transition-all duration-300 group hover:border-black hover:shadow-lg bg-gray-50 hover:bg-white"
          >
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex p-2 bg-white rounded-lg border border-gray-100 group-hover:border-black transition-colors">
                {link.label === "Email Me" ? (
                  <EnvelopeIcon className="w-5 h-5 text-gray-400 group-hover:text-black" />
                ) : (
                  <span className="w-5 h-5 flex items-center justify-center font-black text-gray-400 group-hover:text-black">
                    {link.label.charAt(0)}
                  </span>
                )}
              </div>

              <div className="flex flex-col text-left">
                <span className="text-[10px] font-black text-gray-400 group-hover:text-black">
                  {link.label}
                </span>
                <span className="text-sm font-bold text-gray-800 break-all sm:break-normal">
                  {link.value}
                </span>
              </div>
            </div>
            <ArrowUpRightIcon className="w-4 h-4 text-gray-300 group-hover:text-black opacity-0 group-hover:opacity-100 transition-all" />
          </a>
        ))}
      </div>

      <div className="mt-auto pt-8 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
        <p className="text-[10px] font-black uppercase text-gray-400">
          Typically replies within 24 hours
        </p>
      </div>
    </div>
  );
}
