import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Head from "next/head";
import HeroScection from "./Components/HeroScection";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Mohammed Awaiz</title>
        <meta
          name="This is my Portfolio website which made using Next.js and Tailwind CSS"
          content="Welcome to my portfolio website!!!"
        />
      </Head>
      <body className={spaceGrotesk.className}>
        <div className="bg-backgroundColor overflow-x-hidden">
          <Navbar />
          <HeroScection />
          <main className="bg-backgroundColor min-h-screen overflow-x-hidden selection:bg-highlight selection:text-para relative px-20 max-lg:px-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
