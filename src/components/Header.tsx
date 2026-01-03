interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Snaps', href: '#snaps' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <span className="font-display text-2xl font-bold">©2025</span>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
