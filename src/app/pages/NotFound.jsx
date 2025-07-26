import Link from "next/link";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Mohammed Awaiz</title>
        <meta
          name="description"
          content="Oops! The page you’re looking for doesn't exist. Visit Mohammed Awaiz’s portfolio homepage."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <GoogleAnalytics gtmId="G-D732XM553N" />

      <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-backgroundColor text-para">
        <h1 className="text-5xl font-bold text-highlight">404</h1>
        <h2 className="text-2xl mt-4">Page Not Found</h2>
        <p className="mt-2 text-gray-500">
          The page you're looking for doesn't exist.
        </p>
        Go Back
        <Link
          to="/"
          className="mt-6 inline-block bg-cta text-white px-6 py-2 rounded hover:bg-cta transition"
        >
          Home
        </Link>
      </div>
    </>
  );
}
