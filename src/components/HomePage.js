import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import SideSectionLeft from './SideSectionLeft';
import Features from './Features';
import SideSectionRight from './SideSectionRight';
import CenterSection from './CenterSection';
import Footer from './Footer';

function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <SideSectionLeft />
            <Features />
            <SideSectionRight />
            <CenterSection />
            <Footer />
        </div>
    )
}

export default HomePage
