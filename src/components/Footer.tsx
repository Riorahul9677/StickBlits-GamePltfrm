import { Github, Twitter, Youtube, Instagram, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Contact',
      links: [
        { label: 'Support Center', href: '/support' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Bug Reports', href: '/bugs' },
        { label: 'Press Inquiries', href: '/press' }
      ]
    },
    {
      title: 'Careers',
      links: [
        { label: 'Job Openings', href: '/careers' },
        { label: 'Internships', href: '/internships' },
        { label: 'Remote Work', href: '/remote' },
        { label: 'Benefits', href: '/benefits' }
      ]
    },
    {
      title: 'Community',
      links: [
        { label: 'Discord Server', href: '/discord' },
        { label: 'Forums', href: '/forums' },
        { label: 'Reddit', href: '/reddit' },
        { label: 'Developer API', href: '/api' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Game Guides', href: '/guides' },
        { label: 'Tutorials', href: '/tutorials' },
        { label: 'System Requirements', href: '/requirements' },
        { label: 'Download Center', href: '/downloads' }
      ]
    }
  ];

  const cities = [
    'New York', 'Los Angeles', 'London', 'Tokyo', 'Berlin', 'Sydney', 'Toronto', 'São Paulo'
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-card/50 border-t border-card-border">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="StickBlitz" className="w-8 h-8" />
              <span className="font-bold text-xl text-foreground">StickBlitz</span>
            </div>
            <p className="text-muted-foreground mb-6">
              The ultimate gaming hub with 50+ stick figure games across all genres. 
              Fast, fun, and always free to play.
            </p>
            
            {/* Language Selector */}
            <div className="flex items-center gap-2 mb-6">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <select className="bg-background border border-card-border rounded px-3 py-1 text-sm">
                <option>English (US)</option>
                <option>Español</option>
                <option>Français</option>
                <option>Deutsch</option>
                <option>日本語</option>
              </select>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4 text-primary">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="py-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground font-medium">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-primary"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Cities */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              {cities.map((city, index) => (
                <span key={city}>
                  {city}
                  {index < cities.length - 1 && <span className="ml-4">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="py-6 border-t border-card-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 StickBlitz. All rights reserved.</p>
            
            <div className="flex flex-wrap items-center gap-6">
              <a href="/privacy" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/cookies" className="hover:text-primary transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/do-not-sell" className="hover:text-primary transition-colors duration-200">
                Do Not Sell or Share My Personal Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};