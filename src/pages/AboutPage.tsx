import { useState } from 'react';
import Header from '../components/Header';
import ProcessTimeline from '../components/ProcessTimeline';
import TeamShowcase from '../components/TeamShowcase';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import SEO from '../components/SEO';
import { aboutSchema } from '../data/schemas';

export default function AboutPage() {
  const [isCursorHovered, setIsCursorHovered] = useState(false);
  const handleCursorHover = () => setIsCursorHovered(true);
  const handleCursorLeave = () => setIsCursorHovered(false);

  return (
    <div className="relative w-full min-h-screen bg-white text-[#0b1528] selection:bg-[#0284c7] selection:text-white font-['Manrope'] overflow-x-hidden">
      <SEO
        title="About Eco Apps Solutions Digital Marketing Agency in Coimbatore"
        description="Learn about Eco Apps Solutions, a digital marketing agency in Coimbatore helping businesses grow through performance marketing and technology."
        canonical="https://ecoappssolutions.com/about"
        schema={aboutSchema}
      />
      <Cursor isHovered={isCursorHovered} />
      <Header onHover={handleCursorHover} onLeave={handleCursorLeave} />

      {/* About Hero Section */}
      <section className="relative w-full pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-20 md:pb-24 px-6 sm:px-10 md:px-14 bg-gradient-to-b from-sky-50/70 via-white to-white border-b border-slate-200 overflow-hidden box-border">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-200/40 via-blue-100/30 to-indigo-100/20 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-5 shadow-2xs">
            <span>About Us</span>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#0b1528] leading-[1.12] tracking-tight mb-6">
            <span className="block">Building Digital Growth</span>
            <span className="block bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent pb-1">
              with Technology &amp; Marketing
            </span>
          </h1>

          <p className="font-['Manrope'] text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Eco Apps Solutions, a unit of Data Apps Technologies, is a next-generation digital marketing and technology company based in Coimbatore. We bring together AI, performance marketing, SEO, and software development to help businesses build a stronger digital presence and achieve measurable growth.
          </p>
        </div>
      </section>

      {/* ── Our Story Section ── */}
      <section className="py-16 sm:py-20 md:py-28 px-6 sm:px-10 md:px-14 bg-slate-50/60 border-b border-slate-200 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 right-10 w-[500px] h-[400px] bg-gradient-to-bl from-sky-100/40 via-blue-50/20 to-transparent blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-4 shadow-2xs">
              <span>Our Story</span>
            </div>

            <h2 className="section-title-reveal font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-4xl md:text-[42px] leading-[1.15] text-[#0b1528] tracking-tight mb-4">
              Helping Businesses Grow in a Digital World
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 border border-slate-200/90 shadow-[0_15px_45px_rgba(14,165,233,0.06)] flex flex-col gap-6 font-['Manrope'] text-base sm:text-[17px] text-slate-600 leading-relaxed">
            <p>
              We believe digital growth is not about using more tools or running more campaigns. It is about building the right strategy, technology, and systems around your business goals.
            </p>
            <p>
              At Eco Apps Solutions, we combine modern marketing with technology to create digital solutions that help businesses attract the right customers, generate qualified leads, and grow sustainably.
            </p>
            <p className="border-l-4 border-[#0057ff] pl-5 sm:pl-6 text-slate-800 font-medium italic">
              Every project starts by understanding the business, its customers, challenges, and goals. From there, we build, launch, measure, and continuously improve the solution.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work / Process Section */}
      <ProcessTimeline onHover={handleCursorHover} onLeave={handleCursorLeave} />

      {/* Team Showcase */}
      <TeamShowcase onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <FinalCTA onHover={handleCursorHover} onLeave={handleCursorLeave} />
      <Footer onHover={handleCursorHover} onLeave={handleCursorLeave} />
    </div>
  );
}
