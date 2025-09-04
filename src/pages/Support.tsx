const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-12 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Support</h1>
        <p className="text-sm text-muted-foreground mb-6">If you need help, fill out the form below and our team will respond within 48 hours.</p>
        <form className="bg-card p-6 rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input className="input w-full" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input className="input w-full" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="textarea w-full" rows={6} placeholder="How can we help?" />
          </div>
          <div className="text-right">
            <button className="primary-button">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Support;


