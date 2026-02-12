import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getAboutPage, getSettings, asImageSrc } from "@/lib/content";
import { Bounded } from "@/components/Bounded";
import { ProjectListSlice, HeroSlice, CallToActionSlice, ProductFeatureSlice, ScrollTextSlice } from "@/types/content";
import { RichText, PrismicText } from "@/components/RichText";
import { components } from "@/slices";

export default async function Page() {
  const page = await getAboutPage().catch(() => notFound());

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

      {/* Team Section */}
      {page.team_section && (
        <Bounded className="py-16 bg-black text-white md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display mb-6 text-4xl md:text-5xl">
              {page.team_section.section_title}
            </h2>
            
            <div className="mb-12 text-lg text-gray-300">
              <RichText field={page.team_section.section_description} />
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {page.team_members.map((member, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={member.image.url}
                    alt={member.image.alt || ""}
                    width={200}
                    height={200}
                    className="mx-auto mb-4 rounded-full"
                  />
                  <h3 className="font-display text-xl">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Bounded>
      )}

      {/* Additional Slices */}
      {page.slices && page.slices.map((slice, index) => {
        if (slice.slice_type === 'project_list') {
          const Component = components.project_list;
          return <Component key={index} slice={slice as ProjectListSlice} index={index} />;
        }
        if (slice.slice_type === 'hero') {
          const Component = components.hero;
          return <Component key={index} slice={slice as HeroSlice} />;
        }
        if (slice.slice_type === 'call_to_action') {
          const Component = components.call_to_action;
          return <Component key={index} slice={slice as CallToActionSlice} />;
        }
        if (slice.slice_type === 'product_feature') {
          const Component = components.product_feature;
          return <Component key={index} slice={slice as ProductFeatureSlice} />;
        }
        if (slice.slice_type === 'scroll_text') {
          const Component = components.scroll_text;
          return <Component key={index} slice={slice as ScrollTextSlice} />;
        }
        return null;
      })}
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getAboutPage().catch(() => notFound());
  const settings = await getSettings();

  return {
    title: page.meta_title || "About | " + settings.site_title,
    description: page.meta_description || "Learn more about TechXS KE and our team.",
    openGraph: {
      images: [{ url: asImageSrc(page.meta_image) ?? "" }],
    },
  };
}
