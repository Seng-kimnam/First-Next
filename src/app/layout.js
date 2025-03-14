"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavComponent from "@/Components/NavComponent";
import { useEffect , useState } from "react";
import LoadingComponent from "@/Components/LoadingComponent";
// import { useState } from "react";

// export const metadata = {
//   title: "HRD Ecommerce",
// };
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout ({ children })  {
  const [isLinking, setIsLinking] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLinking(true), 3000);
  });

  // return isLinking ? "HELLO" : "HELLOs  "
   return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {
          isLinking ? <>
          <NavComponent isLinking={isLinking} setIsLinking={setIsLinking} /> 
        {children} 

          </>  :  <LoadingComponent/>
        }
       
      </body>
    </html>
  );

}

