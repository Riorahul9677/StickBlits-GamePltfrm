import { newsPosts } from '@/data/news';
import FallbackImage from '@/components/FallbackImage';

const Newswire = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-12">
        <h1 className="text-3xl font-bold mb-6">Newswire</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsPosts.map((post) => (
            <article key={post.id} className="bg-card p-4 rounded-lg">
              <div className="flex items-start space-x-4">
                <FallbackImage src={post.image} alt={post.title} className="w-28 h-20 object-cover rounded" />
                <div>
                  <h2 className="font-semibold">{post.title}</h2>
                  <div className="text-xs text-muted-foreground">{post.category} · {post.date} · {post.readTime}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{post.teaser}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newswire;


