import { Header } from '@/components/Header';
import { HeroBillboard } from '@/components/HeroBillboard';
import { NewswireGrid } from '@/components/NewswireGrid';
import { FeaturedGames } from '@/components/FeaturedGames';
import { SubscribeBand } from '@/components/SubscribeBand';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBillboard />
        <NewswireGrid />
        <FeaturedGames />
        <SubscribeBand />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
