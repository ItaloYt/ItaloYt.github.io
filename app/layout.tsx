import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Italo's Profile"
};

export default function Page({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
