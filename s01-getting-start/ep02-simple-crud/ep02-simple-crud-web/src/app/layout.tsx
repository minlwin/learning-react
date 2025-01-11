import "./globals.css";
import NavBar from "@/components/NavBar";
import { Children } from "@/model";
import ApplicationProvider from "@/model/providers/ApplicationProvider";

export default function RootLayout({children}: Children) {
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
