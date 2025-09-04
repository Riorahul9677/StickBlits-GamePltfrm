import { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg-clean.jpg';

const promoSlides = [
  {
    id: 1,
    title: 'Season Trailer',
    thumbnail: '/promo/season-trailer.jpg',
    videoUrl: '#'
  },
  {
    id: 2,
    title: 'Stick Drift Championship',
    thumbnail: '/promo/drift-championship.jpg',
    videoUrl: '#'
  },
  {
    id: 3,
    title: 'New Games Preview',
    thumbnail: '/promo/new-games.jpg',
    videoUrl: '#'
  },
  {
    id: 4,
    title: 'Community Highlights',
    thumbnail: '/promo/community.jpg',
    videoUrl: '#'
  }
];

export const HeroBillboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promoSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promoSlides.length) % promoSlides.length);
  };

  return (
    <section 
      className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[70vh] gap-12">
          {/* Left Content - 60% */}
          <div className="flex-1 lg:max-w-[60%] text-center lg:text-left">
            
            <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
              <span className="text-primary">StickBlitz</span>
              <br />
              <span className="text-foreground">Arcade</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-lg">
              50+ fast-load games. Tap. Play. Smile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="primary-button text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Play Now
              </Button>
              <Button className="secondary-button text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Watch Trailer
              </Button>
            </div>
          </div>

          {/* Right Promo Slider - 40% */}
          <div className="flex-1 lg:max-w-[40%] w-full">
            <div className="relative">
              {/* Main Slide */}
              <div className="bg-card border border-card-border rounded-lg p-6 mb-4">
                <div className="aspect-video bg-muted rounded-lg mb-4 relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-dark-gray/80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-200">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <img 
                    src={promoSlides[currentSlide].thumbnail} 
                    alt={promoSlides[currentSlide].title}
                    className="w-full h-full object-cover opacity-50"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {promoSlides[currentSlide].title}
                </h3>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSlide}
                  className="text-muted-foreground hover:text-primary"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                {/* Dots */}
                <div className="flex space-x-2">
                  {promoSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  className="text-muted-foreground hover:text-primary"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};