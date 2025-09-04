const Videos = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-12">
        <h1 className="text-3xl font-bold mb-6">Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Featured Video</h2>
            <div className="w-full aspect-video bg-black/5 flex items-center justify-center rounded">
              <span className="text-muted-foreground">Video player placeholder</span>
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Highlights</h2>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li>Top plays of the week</li>
              <li>Developer streams and trailers</li>
              <li>Tournaments and recaps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;


