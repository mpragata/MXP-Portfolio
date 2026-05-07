import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marc Xavier Pragata | Full Stack Developer",
  description:
    "Full Stack Software Engineer with 5+ years of experience building scalable web applications and enterprise-grade solutions. Proficient in React, TypeScript, and Node.js, with a proven track record of designing custom frontend architectures and robust backend integrations. Specialized in transforming complex business requirements into high-performance digital products, spanning custom applications and automated enterprise workflows",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
