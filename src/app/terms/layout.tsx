import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms",
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
