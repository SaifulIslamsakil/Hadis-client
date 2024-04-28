import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import BookAndCepther from "@/Components/BookAndCepther";
import { IoSearch } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" max-w-7xl mx-auto">
      <body className={inter.className}>
        <Navbar />
        <div className=" flex  ">
          <div><Sidebar /></div>
          <div className=" flex  bg-slate-100 w-full rounded-tl-3xl gap-4 p-4">
            <div><BookAndCepther /></div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
