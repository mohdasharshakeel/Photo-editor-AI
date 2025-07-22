import {Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner";


const inter = Inter({subsets: ["latin"]})

export const metadata = {
  title: "Fotu",
  description: "AI image editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* <Header/> */}
            <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden" >
              <Toaster  richColors/>
               {children}
            </main>
           
          </ThemeProvider> 
      </body>
    </html>
  );
}
