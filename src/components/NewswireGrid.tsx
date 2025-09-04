import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { newsPosts } from '@/data/news';

export const NewswireGrid = () => {
  const displayPosts = newsPosts.slice(0, 6);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Updates': 'bg-primary text-primary-foreground',
      'Game Updates': 'bg-secondary text-secondary-foreground',
      'Events': 'bg-accent text-accent-foreground',
      'Features': 'bg-primary text-primary-foreground',
      'Tournaments': 'bg-secondary text-secondary-foreground',
      'Partnerships': 'bg-accent text-accent-foreground',
      'Community': 'bg-primary text-primary-foreground'
    };
    return colors[category as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  return (
    <section className="section-padding bg-card/30">
      <div className="section-container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-bold text-3xl lg:text-4xl">
            Newswire
          </h2>
          <Button variant="ghost" className="text-primary hover:text-primary/80 group">
            View More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <article key={post.id} className="news-card p-6 group cursor-pointer">
              {/* Category Chip */}
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>

              {/* Image */}
              <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-50"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    News Image
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Teaser */}
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {post.teaser}
              </p>

              {/* Read More */}
              <Button 
                variant="ghost" 
                className="text-primary hover:text-primary/80 p-0 h-auto group/button"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/button:translate-x-1 transition-transform duration-300" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};