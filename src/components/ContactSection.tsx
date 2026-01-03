import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section-dark py-24 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-section-title mb-12">
          I'm bored, let's talk.
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="email"
            placeholder="your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 font-mono"
            required
          />
          <Textarea
            placeholder="your message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 font-mono min-h-32"
            required
          />
          <Button
            type="submit"
            variant="outline"
            className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-mono"
          >
            Send Message
          </Button>
        </form>

        <div className="mt-16 flex justify-center gap-8 font-mono text-sm text-primary-foreground/70">
          <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          <a href="#" className="hover:text-accent transition-colors">GitHub</a>
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">Medium</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
