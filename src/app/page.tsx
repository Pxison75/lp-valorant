import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StreamPlayerSection from "@/components/StreamPlayerSection";
import StatsTrackerSection from "@/components/StatsTrackerSection";
import AgentsShowcaseSection from "@/components/AgentsShowcaseSection";
import SettingsCrosshairSection from "@/components/SettingsCrosshairSection";
import HighlightsSection from "@/components/HighlightsSection";
import ScheduleAndSocialsSection from "@/components/ScheduleAndSocialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090c10] text-zinc-100 selection:bg-[#ff4655] selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <StreamPlayerSection />
        <StatsTrackerSection />
        <AgentsShowcaseSection />
        <SettingsCrosshairSection />
        <HighlightsSection />
        <ScheduleAndSocialsSection />
      </main>
      <Footer />
    </div>
  );
}
