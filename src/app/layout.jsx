import Script from "next/script";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Head from "next/head";

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
        {/* Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D732XM553N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D732XM553N');
          `}
        </Script>
      </Head>
      <body className={spaceGrotesk.className}>
        <div className="bg-backgroundColor overflow-x-hidden">
          <Navbar />

          <main className="bg-backgroundColor min-h-screen overflow-x-hidden selection:bg-highlight selection:text-para relative px-20 max-lg:px-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
