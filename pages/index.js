import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/home/HeroSection';
import TechOverview from '../components/home/TechOverview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import StackView from '../components/StackView';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  const structuredPersonData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Folayan Olamide Mayokun",
    "jobTitle": "Full Stack Developer | Web & Mobile Applications",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    },
    "sameAs": [
      "https://github.com/holladredd",
      "https://x.com/Holla_Dredd",
      "https://www.instagram.com/dev_dredd"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Nuxt.js",
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "React Native",
      "Flutter",
      "Dart",
      "Expo"
    ]
  };

  return (
    <>
      <Head>
        <title>Folayan Olamide Mayokun | Full Stack Developer | Web & Mobile Applications</title>
        <meta name="description" content="Folayan Olamide Mayokun is a Full Stack Developer building web applications, backend systems, APIs, and cross-platform mobile apps with React, Next.js, Node.js, Django, React Native, and Flutter." />
        <meta name="keywords" content="Folayan Olamide Mayokun, Full Stack Developer, Web Applications, Mobile Applications, React, Next.js, Node.js, Flutter, React Native, Django, Lagos Nigeria" />
        <meta property="og:title" content="Folayan Olamide Mayokun | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer building web applications, backend systems, and mobile applications." />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredPersonData) }}
        />
      </Head>

      <CustomCursor />

      {/* Signature noisy brand light canvas matching original portfolio aesthetics */}
      <div className="noise-bg min-h-screen text-gray-800 flex flex-col">
        <Navbar />

        <main className="flex-1 w-full px-4 sm:px-8 md:px-12 lg:px-16 py-6 space-y-20">
          <HeroSection />
          <TechOverview />
          <FeaturedProjects />
        </main>

        <footer className="border-t border-gray-400/20 py-8 text-center text-xs text-gray-500 font-anta">
          <p>© {new Date().getFullYear()} Folayan Olamide Mayokun. All rights reserved.</p>
        </footer>

        {/* Stack View Overlay Router */}
        <StackView />
      </div>
    </>
  );
}
