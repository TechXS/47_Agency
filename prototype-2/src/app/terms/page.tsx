import { Metadata } from "next";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";
import { TransitionLink } from "@/components/TransitionLink";

export const metadata: Metadata = {
  title: "Terms & Conditions | TechXS KE",
  description:
    "Plain-language terms covering services, acceptable use, AI features, IP, and legal notices (International + Kenya).",
};

export default function TermsPage() {
  return (
    <Bounded as="section" className="py-16">
      <FadeIn className="mb-10">
        <h1 className="mb-6 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Terms & Conditions
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-gray-300">
          These terms explain your relationship with TechXS KE when using our
          website, products, and services. We keep this plain and practical, with
          links to detailed sections.
        </p>
      </FadeIn>

      {/* Quick jump links */}
      <FadeIn className="mb-12">
        <nav aria-label="On this page" className="text-sm">
          <ul className="flex flex-wrap gap-3 text-gray-400">
            <li><a className="hover:text-white" href="#overview">Overview</a></li>
            <li><a className="hover:text-white" href="#services">Services</a></li>
            <li><a className="hover:text-white" href="#acceptable-use">Acceptable use</a></li>
            <li><a className="hover:text-white" href="#ai-features">AI features</a></li>
            <li><a className="hover:text-white" href="#ip-rights">IP rights</a></li>
            <li><a className="hover:text-white" href="#warranties">Disclaimers</a></li>
            <li><a className="hover:text-white" href="#liability">Liability</a></li>
            <li><a className="hover:text-white" href="#governing-law">Governing law</a></li>
            <li><a className="hover:text-white" href="#kenya-specific">Kenya</a></li>
            <li><a className="hover:text-white" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </FadeIn>

      <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tight">
        <FadeIn className="mb-12">
          <h2 id="overview" className="text-2xl">Overview</h2>
          <p>
            By accessing or using our services, you agree to these terms. If you’re
            using our services on behalf of an organization, you represent that you
            have authority to bind that organization.
          </p>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 className="text-2xl">Services</h2>
          <p>
            We provide digital design and engineering services, including AI‑enabled
            features. We may update or improve services over time. Some features may
            be in beta and offered “as is.”
          </p>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 className="text-2xl">Acceptable use</h2>
          <ul>
            <li>Don’t break the law or infringe others’ rights using our services.</li>
            <li>No unauthorized access, reverse engineering, or harmful code.</li>
            <li>Don’t upload unlawful, sensitive, or third‑party data without rights.</li>
          </ul>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 className="text-2xl">AI features</h2>
          <p>
            AI outputs can be probabilistic and may contain errors. You are
            responsible for reviewing outputs and ensuring compliance with your own
            policies and applicable laws. Where material decisions are involved, keep
            a human in the loop.
          </p>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 className="text-2xl">Intellectual property</h2>
          <p>
            We (or our licensors) own our platform, code, designs, and brand. You
            own your content and grant us the rights needed to provide the services.
            Deliverables are governed by your statement of work or service order.
          </p>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 className="text-2xl">Disclaimers and warranties</h2>
          <p>
            Except as explicitly stated, services are provided “as is” without
            warranties of any kind. We disclaim implied warranties to the fullest
            extent permitted by law.
          </p>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 className="text-2xl">Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, neither party will be liable for
            indirect, incidental, special, consequential, or punitive damages, or for
            lost profits or revenues. Our total liability is limited to fees paid in
            the 12 months before the claim.
          </p>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 className="text-2xl">Governing law and disputes</h2>
          <p>
            These terms are governed by the laws of Kenya, without regard to
            conflict‑of‑laws rules. Disputes will be resolved in Kenya courts unless
            otherwise agreed in writing.
          </p>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 className="text-2xl">Kenya‑specific notices</h2>
          <p>
            We comply with Kenya laws, including the Computer Misuse and Cybercrimes
            Act, 2018 and the Data Protection Act, 2019, as relevant. Where
            cross‑border data transfers occur, we implement safeguards.
          </p>
        </FadeIn>

        <FadeIn className="mb-2">
          <h2 className="text-2xl">Contact</h2>
          <p>
            For questions about these terms, contact <a className="underline" href="mailto:legal@techx.ke">legal@techx.ke</a>.
          </p>
          <p className="mt-6 text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "2-digit" })}
          </p>
        </FadeIn>
      </div>

      <FadeIn className="mt-10">
        <TransitionLink href="/privacy-policy" className="inline-block text-sm text-gray-400 hover:text-white">
          View our Privacy Policy →
        </TransitionLink>
      </FadeIn>
    </Bounded>
  );
}


