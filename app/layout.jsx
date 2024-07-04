import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });
//components
import Navbar from "./components/Navbar";
export const metadata = {
  title: "Tickets",
  description: "Tickets for sale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
