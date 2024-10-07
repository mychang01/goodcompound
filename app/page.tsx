import CompoundInterestCalculator from '@/components/CompoundInterestCalculator';
import HeroSection from '@/components/HeroSection';
import PowerOfCompound from '@/components/PowerOfCompound';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 md:p-24 bg-gradient-to-br from-background to-secondary">
      <HeroSection />
      <CompoundInterestCalculator />
      <PowerOfCompound />
    </main>
  );
}