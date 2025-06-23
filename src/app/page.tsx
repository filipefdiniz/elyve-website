import HeroSection from '@/components/sections/hero-section';
import DifferentiatorsSection from '@/components/sections/differentiators-section';
import FeaturesSection from '@/components/sections/features-section';
import AiHealthTipSection from '@/components/sections/ai-health-tip-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import DownloadSection from '@/components/sections/download-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import ScreenshotsSection from '@/components/sections/screenshots-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <DifferentiatorsSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <HowItWorksSection />
      <AiHealthTipSection />
      <TestimonialsSection />
      <DownloadSection />
    </>
  );
}
