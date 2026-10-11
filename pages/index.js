import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/home/HeroSection';
import StackView from '../components/StackView';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  const structuredPersonData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Folayan Olamide Mayokun",
    "alternateName": ["Folayan Olamide", "Holladredd", "Dr3dd"],
    "jobTitle": "Full Stack Developer",
    "description": "Full Stack Developer building web applications, backend systems, REST APIs, and cross-platform mobile applications with React, Next.js, Node.js, Django, React Native, and Flutter. Based in Lagos, Nigeria.",
    "url": "https://folayanolamide.dev",
    "email": ["folayanolamide@gmail.com", "holladred@gmail.com"],
    "telephone": "+2348160630642",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "NG"
    },
    "sameAs": [
      "https://github.com/holladredd",
      "https://x.com/Holla_Dredd",
      "https://www.instagram.com/dev_dredd",
      "https://web.facebook.com/folayan.olamide.1",
      "https://wa.me/+2348160630642"
    ],
    "knowsAbout": [
      "JavaScript", "React", "Next.js", "Node.js", "Express.js",
      "NestJS", "Python", "Django", "REST APIs", "GraphQL",
      "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Firestore",
      "React Native", "Flutter", "Dart", "Expo",
      "TailwindCSS", "Full Stack Development", "Mobile Development",
      "Web Application Development", "Backend Development", "API Integration"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Nigeria"
      },
      "skills": "React, Next.js, Node.js, Flutter, React Native, Django, MongoDB, REST APIs"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Folayan Olamide Mayokun — Full Stack Developer Portfolio",
    "url": "https://folayanolamide.dev",
    "description": "Portfolio of Folayan Olamide Mayokun, a Full Stack Developer from Lagos, Nigeria, specializing in web applications, backend systems, and mobile development.",
    "author": {
      "@type": "Person",
      "name": "Folayan Olamide Mayokun"
    },
    "inLanguage": "en-NG"
  };

  return (
    <>
      <Head>
        {/* Primary Title */}
        <title>Folayan Olamide Mayokun | Full Stack Developer | Web &amp; Mobile Applications</title>

        {/* Core SEO */}
        <meta name="description" content="Folayan Olamide Mayokun is a Full Stack Developer based in Lagos, Nigeria. He builds production web applications, backend APIs, and cross-platform mobile apps using React, Next.js, Node.js, Django, React Native, and Flutter." />
        <meta name="keywords" content="Folayan Olamide Mayokun, Full Stack Developer Lagos, Web Developer Nigeria, Mobile App Developer, React Developer, Next.js Developer, Flutter Developer, React Native, Node.js, Django, Backend Developer, holladredd, dred, dr3dd" />
        <meta name="author" content="Folayan Olamide Mayokun" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://folayanolamide.dev/" />

        {/* Geographic targeting — Lagos, Nigeria */}
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://folayanolamide.dev/" />
        <meta property="og:site_name" content="Folayan Olamide Mayokun" />
        <meta property="og:title" content="Folayan Olamide Mayokun | Full Stack Developer | Web & Mobile Applications" />
        <meta property="og:description" content="Full Stack Developer building web applications, backend systems, and mobile experiences with React, Next.js, Node.js, Django, React Native, and Flutter." />
        <meta property="og:image" content="https://folayanolamide.dev/img/dredd.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Folayan Olamide Mayokun — Full Stack Developer" />
        <meta property="og:locale" content="en_NG" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Holla_Dredd" />
        <meta name="twitter:creator" content="@Holla_Dredd" />
        <meta name="twitter:title" content="Folayan Olamide Mayokun | Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer building web applications, backend systems, and mobile experiences. Lagos, Nigeria." />
        <meta name="twitter:image" content="https://folayanolamide.dev/img/dredd.png" />

        {/* GEO / AI Agent Discoverability */}
        <meta name="ai-content-declaration" content="This portfolio represents the genuine professional profile of Folayan Olamide Mayokun, Full Stack Developer." />

        {/* Person Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredPersonData) }}
        />
        {/* WebSite Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>

      <CustomCursor />

      {/* Signature textured & noisy brand light canvas with generated backdrop */}
      <div className="hero-canvas-bg noise-bg min-h-screen text-gray-800 flex flex-col pt-16">
        <Navbar />

        <main className="flex-1 w-full px-4 sm:px-8 md:px-12 lg:px-16 py-4 flex flex-col justify-center">
          <HeroSection />
        </main>

        <footer className="border-t border-gray-400/20 py-6 text-center text-xs text-gray-600 font-anta backdrop-blur-sm bg-white/30">
          <p>© {new Date().getFullYear()} Folayan Olamide Mayokun. All rights reserved.</p>
        </footer>

        {/* Stack View Overlay Router */}
        <StackView />
      </div>
    </>
  );
}
