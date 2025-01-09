import { ActiveMenuProvider } from "@/model/providers/ActiveMenuProvider";
import "./globals.css";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ActiveMenuProvider>
      <html lang="en">
        <body>
            <NavBar />
            <div className="py-4 px-16">
            {children}
            </div>
        </body>
      </html>
    </ActiveMenuProvider>
  );
}
