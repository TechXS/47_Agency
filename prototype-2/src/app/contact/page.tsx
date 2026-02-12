import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getContactPage, getSettings, asImageSrc } from "@/lib/content";
import { Bounded } from "@/components/Bounded";
import { ContactForm } from "@/components/ContactForm";
import { RichText, PrismicText } from "@/components/RichText";
import { components } from "@/slices";

export default async function Page() {
  const page = await getContactPage().catch(() => notFound());

  return (
    <div>
      {/* Hero Section */}
      <Bounded className="relative min-h-screen overflow-hidden bg-neutral-950">
        <Image
          src={page.hero_image.url}
          alt={page.hero_image.alt || ""}
          priority
          fill
          className="object-cover opacity-50"
        />
        
        <div className="relative flex h-screen flex-col justify-center">
          <h1 className="font-display max-w-4xl text-6xl leading-none text-neutral-50 md:text-7xl lg:text-8xl">
            <PrismicText field={page.title} />
          </h1>
          
          <div className="mt-8 max-w-2xl text-lg text-neutral-100">
            <RichText field={page.content} />
          </div>
        </div>
      </Bounded>

      {/* Contact Form */}
      <Bounded className="py-16 bg-black text-white md:py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display mb-8 text-3xl md:text-4xl text-center">Send us a message</h2>
          
          <ContactForm />
          <div className="mt-6 text-center">
            <a
              href="https://wa.me/254797649768"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-green-500 px-5 py-3 font-medium text-black hover:bg-green-400"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </Bounded>

      {/* Additional Slices */}
      {page.slices && page.slices.map((slice, index) => {
        if (slice.slice_type === 'project_list') {
          const Component = components.project_list;
          return <Component key={index} slice={slice} index={index} />;
        }
        
        if (slice.slice_type === 'hero') {
          const Component = components.hero;
          return <Component key={index} slice={slice} />;
        }
        
        if (slice.slice_type === 'call_to_action') {
          const Component = components.call_to_action;
          return <Component key={index} slice={slice} />;
        }
        
        if (slice.slice_type === 'product_feature') {
          const Component = components.product_feature;
          return <Component key={index} slice={slice} />;
        }
        
        if (slice.slice_type === 'scroll_text') {
          const Component = components.scroll_text;
          return <Component key={index} slice={slice} />;
        }
        
        return null;
      })}
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContactPage().catch(() => notFound());
  const settings = await getSettings();

  return {
    title: page.meta_title || "Contact | " + settings.site_title,
    description: page.meta_description || "Get in touch with TechXS KE for your next project.",
    openGraph: {
      images: [{ url: asImageSrc(page.meta_image) ?? "" }],
    },
  };
}
