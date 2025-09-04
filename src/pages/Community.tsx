const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-12">
        <h1 className="text-3xl font-bold mb-6">Community</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Forums</h2>
            <p className="text-sm text-muted-foreground">Join discussions, share tips, and connect with other players.</p>
          </div>
          <div className="bg-card p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Events</h2>
            <p className="text-sm text-muted-foreground">Check upcoming tournaments and community meetups.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;


