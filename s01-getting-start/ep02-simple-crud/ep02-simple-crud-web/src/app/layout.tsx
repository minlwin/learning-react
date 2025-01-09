import "./globals.css";
import NavBar from "@/components/NavBar";
import ApplicationProvider from "@/model/providers/ApplicationProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApplicationProvider>
      <html lang="en">
        <body>
            <NavBar />
            <div className="py-4 px-16">
            {children}
            </div>
        </body>
      </html>
    </ApplicationProvider>
  );
}
