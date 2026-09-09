// app.tsx en local;

import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StatsSection } from "./components/StatsSection";
import { RosterSection } from "./components/RosterSection";
import { MatchHistorySection } from "./components/MatchHistorySection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";
import { RecruitmentModal } from "./components/RecruitmentModal";
import { FooterWordmark } from "./components/FooterWordmark";
import Identity from "./components/Identity";
import { SocialInfiniteScroll } from "./components/SocialMarquee";
export default function App() {
    const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("accueil");

    const handleOpenRecruitment = () => {
        setIsRecruitmentOpen(true);
    };

    const handleCloseRecruitment = () => {
        setIsRecruitmentOpen(false);
    };

    const handleDiscoverClan = () => {
        setActiveSection("clan");
        const clanSection = document.getElementById("clan");
        if (clanSection) {
            clanSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-[#08080a] text-[#ececf1] flex flex-col selection:bg-[#e11d48] selection:text-white">
            {/* Fixed Header */}
            <Header
                onOpenRecruitment={handleOpenRecruitment}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

            {/* Main Homepage Flow */}
            <main className="flex-1">
                <Hero
                    onOpenRecruitment={handleOpenRecruitment}
                    onDiscoverClan={handleDiscoverClan}
                />

                <Identity />
                {/*<StatsSection />*/}

                <RosterSection />
                <MatchHistorySection />
                <SocialInfiniteScroll direction="right" />
                <CtaSection onOpenRecruitment={handleOpenRecruitment} />
            </main>

            <Footer />
            <FooterWordmark />

            {/* Interactive Recruitment Modal */}
            <RecruitmentModal
                isOpen={isRecruitmentOpen}
                onClose={handleCloseRecruitment}
            />
        </div>
    );
}
