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
          Let's build something great.
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

        <div className="mt-16 space-y-3 font-mono text-sm text-primary-foreground/80">
          <div className="flex justify-center gap-3">
            <span className="text-primary-foreground/60">email</span>
            <a href="mailto:rishithmody@gmail.com" className="hover:text-accent transition-colors">rishithmody@gmail.com</a>
          </div>
          <div className="flex justify-center gap-3">
            <span className="text-primary-foreground/60">phone</span>
            <a href="tel:+16025459288" className="hover:text-accent transition-colors">+1 (602) 545-9288</a>
          </div>
          <div className="flex justify-center gap-3">
            <span className="text-primary-foreground/60">linkedin</span>
            <a href="https://linkedin.com/in/rishith-mody-9a481a248" className="hover:text-accent transition-colors">linkedin.com/in/rishith-mody-9a481a248</a>
          </div>
          <div className="flex justify-center gap-3">
            <span className="text-primary-foreground/60">resume</span>
            <a href="/RishithModyResume-internal.pdf" className="hover:text-accent transition-colors">RishithModyResume-internal.pdf</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
