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
    "jobTitle": "Full-Stack Software Engineer & Creative Developer",
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
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "PHP",
      "MongoDB",
      "MySQL",
      "React Native",
      "Graphic Design"
    ]
  };

  return (
    <>
      <Head>
        <title>Folayan Olamide Mayokun | Full-Stack Software Engineer & Creative Developer</title>
        <meta name="description" content="Portfolio of Folayan Olamide Mayokun - Full-Stack Software Engineer, Mobile Developer, and Creative Designer based in Lagos, Nigeria." />
        <meta name="keywords" content="Folayan Olamide, Mayokun, Folayan Olamide Mayokun, Full-Stack Engineer, React, Next.js, React Native, Lagos Nigeria, Graphic Designer" />
        <meta property="og:title" content="Folayan Olamide Mayokun | Portfolio" />
        <meta property="og:description" content="Portfolio of Folayan Olamide Mayokun - Software Engineer & Designer." />
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

        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
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
