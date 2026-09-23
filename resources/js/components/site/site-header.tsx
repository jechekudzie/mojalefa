import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const navigationLinks = [
    { href: '#top', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#safety', label: 'Safety' },
    { href: '#sustainability', label: 'Sustainability' },
    { href: '#leadership', label: 'Leadership' },
];

export default function SiteHeader() {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setHasScrolled(window.scrollY > 40);

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-40 transition-all duration-500',
                hasScrolled || isMenuOpen
                    ? 'border-b border-gold/15 bg-ink'
                    : 'border-b border-transparent bg-transparent',
            )}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
                <a
                    href="#top"
                    className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <img
                        src="/images/logo-mark.png"
                        alt=""
                        className="h-11 w-auto"
                    />
                    <span className="flex flex-col leading-none">
                        <span className="font-display text-xl font-bold tracking-[0.08em] text-gold">
                            MOJALEFA
                        </span>
                        <span className="mt-1 font-display text-[10px] tracking-[0.45em] text-gold">
                            MINING
                        </span>
                    </span>
                </a>

                <ul className="hidden items-center gap-9 text-sm text-sand/75 lg:flex">
                    {navigationLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="transition-colors hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <a
                        href="#contact"
                        className="hidden rounded-md bg-gold px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:inline-flex"
                    >
                        Get in touch
                    </a>
                    <button
                        type="button"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                        className="rounded-md border border-gold/30 p-2.5 text-gold-light lg:hidden"
                    >
                        {isMenuOpen ? (
                            <X className="size-5" />
                        ) : (
                            <Menu className="size-5" />
                        )}
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <ul
                    id="mobile-menu"
                    className="border-t border-gold/10 px-5 pt-2 pb-6 lg:hidden"
                >
                    {[
                        ...navigationLinks,
                        { href: '#contact', label: 'Get in touch' },
                    ].map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block border-b border-gold/10 py-4 font-display text-lg text-sand"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}
