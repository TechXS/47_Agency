import { ReactNode } from "react";
import { TransitionLink } from "@/components/TransitionLink";

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-black py-16">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-3 justify-items-center md:justify-items-start">
          <NavGroup title="Projects">
            <NavLink href="/projects">All Projects</NavLink>
            <NavLink href="/projects">Web Applications</NavLink>
            <NavLink href="/projects">Mobile Apps</NavLink>
            <NavLink href="/projects">Design Systems</NavLink>
          </NavGroup>

          <NavGroup title="About">
            <NavLink href="/about">Our Story</NavLink>
            <NavLink href="/about">The Team</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </NavGroup>

          <NavGroup title="Social">
            <NavLink href="https://linkedin.com/company/techx-ke">LinkedIn</NavLink>
            <NavLink href="https://twitter.com/techx_ke">X (Twitter)</NavLink>
            <NavLink href="https://github.com/TechXS">Github</NavLink>
          </NavGroup>
        </div>

        {/* Bottom footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-neutral-800 pt-8 md:flex-row">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} TechXS KE. All rights reserved
          </p>
          <TransitionLink
            href="/"
            aria-label="TechXS KE Home"
            className="order-first md:order-none"
          >
            <span className="font-display text-xl font-bold tracking-wider text-white">
              TECHXS KE
            </span>
          </TransitionLink>
          <ul
            aria-label="Legal"
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <li>
              <TransitionLink href="/terms" className="hover:text-white">
                Terms &amp; conditions
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </TransitionLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

type NavGroupProps = {
  title: string;
  children?: ReactNode;
};

const NavGroup = ({ title, children }: NavGroupProps) => (
  <nav aria-labelledby={`${title.toLowerCase()}-heading`} className="text-center md:text-left">
    <h3
      id={`${title.toLowerCase()}-heading`}
      className="mb-6 text-xl font-medium"
    >
      {title}
    </h3>
    <ul className="space-y-4" role="list">
      {children}
    </ul>
  </nav>
);

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <li>
      <TransitionLink href={href} className="hover:text-gray-300">
        {children}
      </TransitionLink>
    </li>
  );
};
