"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full p-4 border-t border-gray-100 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400">
              Direct Line
            </p>
            <a
              href="tel:+639452500376"
              className="text-sm font-bold hover:underline underline-offset-4"
            >
              +63 945 250 0376
            </a>
          </div>

          <div className="text-left md:text-right space-y-1">
            <p className="text-sm font-bold">
              Designed & Built by{" "}
              <span className="bold">Marc Xavier Pragata</span>
            </p>
            <p className="text-[10px] uppercase tracking-tighter text-gray-400 font-medium">
              © {currentYear} — All Rights Reserved
            </p>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>
    </footer>
  );
}
