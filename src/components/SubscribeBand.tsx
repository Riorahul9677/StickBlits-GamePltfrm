import { useState } from 'react';
import { Mail, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const SubscribeBand = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribe:', email);
  };

  return (
    <section className="section-padding bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-card-border rounded-lg p-8 lg:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="font-bold text-3xl lg:text-4xl mb-4">
              Subscribe to <span className="text-primary">StickBlitz</span> News
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be the first to know about new games, exclusive updates, tournament announcements, 
              and special community events. Join thousands of gamers already in the loop.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background/50 border-card-border focus:border-primary"
                  required
                />
                <Button type="submit" className="primary-button px-8">
                  Subscribe
                </Button>
              </div>
            </form>
            
            {/* CAPTCHA placeholder */}
            <div className="flex items-center justify-center gap-2 mb-4 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>Protected by reCAPTCHA</span>
            </div>
            
            <p className="text-xs text-muted-foreground max-w-lg mx-auto">
              By subscribing, you agree to receive marketing emails from StickBlitz. 
              You can unsubscribe at any time. View our{' '}
              <a href="/privacy" className="text-primary hover:text-primary/80 underline">
                Privacy Policy
              </a>{' '}
              for more information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};