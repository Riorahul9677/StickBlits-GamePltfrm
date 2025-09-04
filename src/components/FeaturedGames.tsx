import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { games } from '@/data/games';

export const FeaturedGames = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const featuredGames = games.filter(game => game.featured);
  const gameBoxes = games.slice(0, 4);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % featuredGames.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + featuredGames.length) % featuredGames.length);
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Easy': 'text-green-400',
      'Medium': 'text-yellow-400',
      'Hard': 'text-red-400'
    };
    return colors[difficulty as keyof typeof colors] || 'text-muted-foreground';
  };

  return (
    <section className="section-padding">
      <div className="section-container">
        <h2 className="font-bold text-3xl lg:text-4xl mb-12 text-center">
          Featured Games
        </h2>

        {/* Banner Carousel */}
        <div className="relative mb-16">
          <div className="relative aspect-[21/9] lg:aspect-[21/6] rounded-lg overflow-hidden bg-card border border-card-border">
            {featuredGames.map((game, index) => (
              <div
                key={game.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentBanner ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark-gray/80 to-transparent" />
                <img 
                  src={game.cover}
                  alt={game.title}
                  className="w-full h-full object-cover opacity-30"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="section-container w-full">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                          {game.genre}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-3xl lg:text-5xl mb-4">
                        {game.title}
                      </h3>
                      
                      <p className="text-lg text-muted-foreground mb-6 max-w-lg">
                        {game.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {game.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Button className="primary-button">
                        <Play className="w-5 h-5 mr-2" />
                        Play Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevBanner}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 border border-card-border hover:bg-card"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextBanner}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 border border-card-border hover:bg-card"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredGames.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentBanner ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Game Box Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {gameBoxes.map((game) => (
            <div key={game.id} className="game-card p-6 group cursor-pointer">
              {/* Game Icon */}
              <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-dark-gray/60" />
                <img
                  src={game.icon}
                  alt={game.title}
                  className="w-full h-full object-cover opacity-60"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" className="bg-primary hover:bg-primary/80">
                    <Play className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                {game.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {game.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm px-2 py-1 bg-secondary/20 text-secondary rounded">
                  {game.genre}
                </span>
                <span className={`text-sm font-medium ${getDifficultyColor(game.difficulty)}`}>
                  {game.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};