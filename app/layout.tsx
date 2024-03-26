import type { Metadata } from "next";
import "./try2/global.css";

export const metadata: Metadata = {
  title: "Sorting React Cards",
  description: "Sorting Cards for fun!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <style>{"body {  margin: 0; padding: 0; }"}</style>
      <body>{children}</body>
    </html>
  );
}
