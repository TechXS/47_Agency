import { Metadata } from "next";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";
import { TransitionLink } from "@/components/TransitionLink";

export const metadata: Metadata = {
  title: "Privacy Policy | TechXS KE",
  description:
    "Plain-language privacy policy covering AI usage, data practices, and rights (International + Kenya).",
};

export default function PrivacyPolicyPage() {
  return (
    <Bounded as="section" className="py-16">
      <FadeIn className="mb-10">
        <h1 className="mb-6 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Privacy Policy
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-gray-300">
          This policy explains what data we collect, how we use AI responsibly, and
          the choices and rights you have. It applies to our website, products, and
          services. We present a plain‑language overview first, followed by links to
          detailed sections.
        </p>
      </FadeIn>

      {/* Quick jump links */}
      <FadeIn className="mb-12">
        <nav aria-label="On this page" className="text-sm">
          <ul className="flex flex-wrap gap-3 text-gray-400">
            <li><a className="hover:text-white" href="#overview">Overview</a></li>
            <li><a className="hover:text-white" href="#data-we-collect">Data we collect</a></li>
            <li><a className="hover:text-white" href="#ai-usage">How we use AI</a></li>
            <li><a className="hover:text-white" href="#data-sharing">Sharing</a></li>
            <li><a className="hover:text-white" href="#your-rights">Your rights</a></li>
            <li><a className="hover:text-white" href="#kenya-specific">Kenya</a></li>
            <li><a className="hover:text-white" href="#international">International</a></li>
            <li><a className="hover:text-white" href="#security">Security</a></li>
            <li><a className="hover:text-white" href="#retention">Retention</a></li>
            <li><a className="hover:text-white" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </FadeIn>

      <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tight">
        <FadeIn className="mb-12">
          <h2 id="overview" className="text-2xl">Overview</h2>
          <p>
            We collect only what we need to provide and improve our services. Where
            we use AI systems (for example, to help summarize content, draft copy,
            detect anomalies, or support search), we do so with safeguards to protect
            privacy and security. We do not sell personal data.
          </p>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 id="data-we-collect" className="text-2xl">Data we collect</h2>
          <ul>
            <li>
              Account and contact details: name, email, company and role if you provide them.
            </li>
            <li>
              Usage data: pages viewed, interactions, device/approximate location (from IP), and diagnostics.
            </li>
            <li>
              Customer content: material you upload or ask us to process on your behalf.
            </li>
          </ul>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 id="ai-usage" className="text-2xl">How we use AI</h2>
          <p>
            We may use reputable AI providers to power features such as content
            generation, search, classification, quality checks, or analytics. When we
            send your data to AI providers, we apply privacy-by-design measures like
            minimization, redaction, and access controls. We instruct providers not to
            train on your data unless you explicitly opt in.
          </p>
          <p>
            Automated decisions with significant effects are not made without human
            review. You can request human review and explainability for material AI
            outputs that affect you.
          </p>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 id="data-sharing" className="text-2xl">How we share data</h2>
          <p>
            We share data with service providers who help us run our services (e.g.,
            hosting, analytics, AI APIs) under contracts that limit their use of your
            data. We may disclose data if required by law or to protect rights and
            safety. We do not sell personal data.
          </p>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 id="your-rights" className="text-2xl">Your privacy choices and rights</h2>
          <ul>
            <li>Access, correct, or delete your data.</li>
            <li>Object to or restrict certain processing, including AI uses.</li>
            <li>Port your data where applicable.</li>
            <li>Withdraw consent where processing relies on consent.</li>
          </ul>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 id="kenya-specific" className="text-2xl">Kenya-specific notices</h2>
          <p>
            We comply with Kenya’s Data Protection Act, 2019 and regulations issued
            by the Office of the Data Protection Commissioner (ODPC). Where we act as
            a data controller or processor, we implement appropriate technical and
            organizational measures, maintain processing records, and honor data
            subject rights under the DPA 2019.
          </p>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 id="international" className="text-2xl">International notices</h2>
          <p>
            For users in the EU/UK, we process personal data consistent with GDPR/UK
            GDPR principles (lawful basis, minimization, security, and rights). For
            US users, we align with major state privacy laws (e.g., CCPA/CPRA) and do
            not sell or share personal information for cross‑context behavioral
            advertising. Cross‑border transfers use appropriate safeguards.
          </p>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 id="security" className="text-2xl">Security</h2>
          <p>
            We use encryption in transit, access controls, audit logging, and
            vulnerability management. No method is 100% secure, but we continually
            improve our safeguards.
          </p>
        </FadeIn>

        <FadeIn className="mb-12">
          <h2 id="retention" className="text-2xl">Data retention</h2>
          <p>
            We keep data only as long as necessary for the purposes described here,
            to comply with law, or to resolve disputes. We apply retention schedules
            and secure deletion.
          </p>
        </FadeIn>

        <FadeIn className="mb-2">
          <h2 id="contact" className="text-2xl">Contact</h2>
          <p>
            Questions or requests? Contact us at <a className="underline" href="mailto:privacy@techx.ke">privacy@techx.ke</a>.
          </p>
          <p className="mt-6 text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "2-digit" })}
          </p>
        </FadeIn>
      </div>

      <FadeIn className="mt-10">
        <TransitionLink href="/terms" className="inline-block text-sm text-gray-400 hover:text-white">
          View our Terms & Conditions →
        </TransitionLink>
      </FadeIn>
    </Bounded>
  );
}


