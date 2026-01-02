import HeroSection from "../sections/hero-section";
import AboutOurApps from "../sections/about-our-apps";
import GetInTouch from "../sections/get-in-touch";
import TestimonialSection from "../sections/our-testimonials";
import LatestCreations from "../sections/our-latest-creation";
import TrustedComp from "../sections/trusted-companies";
import NewsLetter from "../sections/subscribe-newsletter";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutOurApps />
            <GetInTouch />
            <TestimonialSection />
            <LatestCreations />
            <TrustedComp />
            <NewsLetter />
        </>
    );
}