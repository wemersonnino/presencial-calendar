'use client';

import Link from 'next/link';
import { Popover, PopoverButton, PopoverBackdrop, PopoverPanel } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '@/components/shared/Container';
import { Logo } from '@/components/shared/Logo';
import { NavLinks } from './shared/NavLinks';

export const Header = () => {
  function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path
          d="M5 6h14M5 18h14M5 12h14"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path d="M17 14l-5-5-5 5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  function MobileNavLink(
    props: Omit<
      React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
      'as' | 'className'
    >,
  ) {
    return (
      <PopoverButton
        as={Link}
        className="block text-base/7 tracking-tight text-gray-700"
        {...props}
      />
    );
  }

  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 focus:not-data-focus:outline-hidden active:stroke-gray-900"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur-sm"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pt-32 pb-6 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/#features">Features</MobileNavLink>
                            <MobileNavLink href="/#reviews">Reviews</MobileNavLink>
                            <MobileNavLink href="/#pricing">Pricing</MobileNavLink>
                            <MobileNavLink href="/#faqs">FAQs</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Link
                              href="/login"
                              hrefLang={'/login'}
                              className="flex items-center bg-zinc-200 text-gray-700 hover:text-gray-900"
                            >
                              Log in
                            </Link>
                            <Link href="#">Download the app</Link>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <div className="flex items-center gap-6 max-lg:hidden">
              <Link
                href="/login"
                className="hover:text-opacity-90 rounded-lg bg-zinc-200 px-4 py-2 font-normal text-gray-700 outline-1 outline-gray-300 hover:font-medium hover:text-gray-900 hover:outline-gray-400 focus-visible:outline-2 focus-visible:outline-gray-900 active:bg-zinc-300"
              >
                Log in
              </Link>
              <Link href="#">Download</Link>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};
