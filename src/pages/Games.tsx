import { games } from '@/data/games';
import FallbackImage from '@/components/FallbackImage';

const Games = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-12">
        <h1 className="text-3xl font-bold mb-6">Games</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div key={game.id} className="bg-card p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded flex items-center justify-center">
                  <FallbackImage src={game.icon} alt={game.title} className="w-12 h-12 object-cover" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{game.title}</h2>
                  <p className="text-sm text-muted-foreground">{game.genre} · {game.difficulty}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{game.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-muted-foreground">{game.tags.join(' · ')}</div>
                <a href={`/games/${game.id}`} className="text-primary underline text-sm">Play</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;


