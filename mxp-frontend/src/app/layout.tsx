import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marc Xavier Pragata | Full Stack Developer",
  description:
    "Full Stack Developer specializing using React, Next.js, Node.js, TypeScript, and MongoDB, with hands-on experience developing SPFx-based frontends, workflow automations, and system integrations on Microsoft 365 platforms",
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
