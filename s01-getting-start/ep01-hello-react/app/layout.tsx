import localFont from "next/font/local";
import "./globals.css";
import SideBar from "../components/side-bar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <title>Hello React</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <main className="flex h-full justify-stretch">
          <SideBar />
          <div className="p-4 flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
