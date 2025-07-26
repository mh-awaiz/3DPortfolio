import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="MRBYKHpOA65wMeP5_F7ZjyPSpcijC_-SxoyV_VgfRkM"
        />
        <title>Mohammed Awaiz</title>
        <meta
          name="description"
          content="This is my Portfolio website which is made using Next.js and Tailwind CSS. Welcome to my portfolio website!!!"
        />
      </head>

      <body className={spaceGrotesk.className}>
        <GoogleAnalytics gaId="G-D732XM553N" />
        <div className="bg-backgroundColor overflow-x-hidden">
          <Navbar />

          <main className="bg-backgroundColor min-h-screen overflow-x-hidden selection:bg-highlight selection:text-para relative px-20 max-lg:px-10">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>

          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-D732XM553N" />
    </html>
  );
}
