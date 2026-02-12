import Link from "next/link";
import Image from "next/image";
import { type Metadata } from "next";
import { getAllProjects } from "@/lib/content";
import { Bounded } from "@/components/Bounded";

//export const metadata: Metadata = {
//  title: "Projects",
//  description: "Selected work and case studies",
//};

export const metadata: Metadata = {
  title: "TechXS KE Projects | AI & Web Development Case Studies in Kenya",
  description: "Explore TechXS KE's portfolio: Scalable web apps, AI integrations, automation systems, and innovative solutions like tourism platforms and NLP tools for Kenyan businesses.",
  // Bonus: Add more for rich results (as in your homepage)
  keywords: ['AI projects Kenya', 'web development case studies Nairobi', 'digital agency portfolio', 'automation solutions Kenya'],
  openGraph: {
    title: "TechXS KE Projects",
    description: "Discover our latest work in AI, web apps, and automation.",
    images: [{ url: 'https://techxs.dpdns.org/icon.png' }],  // Add a custom OG image in /public
  },
};

export default async function ProjectsIndexPage() {
  const projects = await getAllProjects();

  return (
    <Bounded className="py-16 text-white">
      <h1 className="font-display mb-10 text-4xl md:text-5xl">Projects</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.uid} href={`/projects/${project.uid}`} className="group block border border-white/10 p-4 hover:border-white/30">
            <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden">
              <Image
                src={project.hero_image?.url || project.project_image.url}
                alt={project.project_image.alt || project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <h2 className="font-display text-2xl">{project.title}</h2>
            <p className="mt-1 text-sm text-gray-300">{project.category || "Project"}</p>
          </Link>
        ))}
      </div>
    </Bounded>
  );
}


