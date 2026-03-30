import {
  AlignRight,
  Github,
  Globe,
  MessageCircle,
} from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';

interface PublicSiteFrameProps {
  activeNav?: string;
  children: ReactNode;
  contentClassName?: string;
}

const MOBILE_BREAKPOINT = 640;

const PublicSiteFrame = ({
  children,
  contentClassName = '',
}: PublicSiteFrameProps) => {
  const lastScrollYRef = useRef(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [headerElevated, setHeaderElevated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      setHeaderElevated(currentScrollY > 12);

      if (currentScrollY <= 24) {
        setHeaderVisible(true);
      } else if (scrollDelta > 8) {
        setHeaderVisible(false);
      } else if (scrollDelta < -8) {
        setHeaderVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    lastScrollYRef.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const handlePointerOutside = (event: MouseEvent | TouchEvent) => {
      if (!mobileMenuRef.current) {
        return;
      }

      if (!mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleGestureClose = () => {
      setMobileMenuOpen(false);
    };

    document.addEventListener('mousedown', handlePointerOutside);
    document.addEventListener('touchstart', handlePointerOutside, { passive: true });
    window.addEventListener('scroll', handleGestureClose, { passive: true });
    window.addEventListener('touchmove', handleGestureClose, { passive: true });

    return () => {
      document.removeEventListener('mousedown', handlePointerOutside);
      document.removeEventListener('touchstart', handlePointerOutside);
      window.removeEventListener('scroll', handleGestureClose);
      window.removeEventListener('touchmove', handleGestureClose);
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Features', id: 'features' },
    { label: 'Preview', id: 'preview' },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1f2228] text-white">
      <div
        className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-300 ease-out sm:px-8 sm:pt-4 lg:px-10 ${
          headerVisible ? 'translate-y-0' : '-translate-y-[120%]'
        }`}
      >
        <div ref={mobileMenuRef} className="mx-auto max-w-[1250px]">
          <header
            className={`relative flex items-center gap-2 rounded-lg border px-3 py-2.5 backdrop-blur-md md:gap-4 md:px-6 md:py-3 ${
              headerElevated
                ? 'border-white/10 bg-[#1f2228]/90 shadow-[0_16px_40px_rgba(0,0,0,0.3)]'
                : 'border-white/5 bg-[#1f2228]/70 shadow-[0_8px_24px_rgba(0,0,0,0.15)]'
            }`}
          >
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex min-w-0 items-center text-left"
            >
              <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
                Jason<span className="text-white/50">Jms</span>
              </span>
            </button>

            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-7 lg:flex">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-sm font-semibold text-white transition-colors hover:text-white/70"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="ml-auto flex shrink-0 items-center justify-end gap-1.5 sm:gap-2">
              <a
                href="https://github.com/mrizky-fr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center gap-2 rounded-lg bg-white px-4 text-[#1f2228] text-sm font-semibold transition-colors hover:bg-white/90"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
                <span>Github</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <AlignRight className="h-5 w-5" />
              </button>
            </div>
          </header>

          {mobileMenuOpen ? (
            <div className="mt-3 lg:hidden">
              <div className="rounded-lg border border-white/10 bg-[#1f2228]/95 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.3)] backdrop-blur-md">
                <nav className="flex flex-col items-stretch gap-1">
                  {navLinks.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div
        className={`relative mx-auto max-w-[1250px] px-4 pb-12 pt-24 sm:px-8 sm:pt-28 lg:px-10 lg:pt-32 ${contentClassName}`}
      >
        {children}

        <footer className="mt-16 border-t border-white/10 py-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <a
              href="https://github.com/mrizky-fr"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Website"
            >
              <Globe className="h-4 w-4" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>

          <p className="text-sm text-white/40">
            Copyright © 2026 Jason Jms. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default PublicSiteFrame;
