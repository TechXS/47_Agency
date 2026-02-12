import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getProjectBySlug, getAllProjects, getSettings, asImageSrc } from "@/lib/content";
import { Bounded } from "@/components/Bounded";
import { RichText } from "@/components/RichText";
import { ProjectMeta } from "@/components/ProjectMeta";
import { RelatedProjects } from "@/components/RelatedProjects";
import { ButtonLink } from "@/components/ButtonLink";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const page = await getProjectBySlug(uid);
  
  if (!page) {
    notFound();
  }

  return (
    <Bounded className="py-10">
      <div className="grid grid-cols-1 items-center gap-10 pb-10 lg:grid-cols-2">
        <div className="relative mb-14 flex justify-center pb-10">
          <Image
            src={page.project_image.url}
            alt={page.project_image.alt || ""}
            width={600}
            height={600}
            priority
            className="absolute top-[90%] -scale-y-100 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,.15)_100%)]"
          />
          <Image
            src={page.project_image.url}
            alt={page.project_image.alt || ""}
            width={600}
            height={600}
            priority
            className="relative"
          />
        </div>
        {/* Project info section */}

        <div className="text-white">
          <h1 className="font-display mb-4 border-b border-neutral-700 pb-2 text-4xl md:text-5xl">
            {page.title}
          </h1>

          <div className="space-y-6">
            <p className="text-md font-semibold text-gray-300">
              {page.category || "Web Application"}
            </p>

            <RichText field={page.description} />

            <ProjectMeta
              category={page.category}
              technologies={page.technologies}
            />

            <div className="flex gap-4">
              {page.live_link && (
                <ButtonLink 
                  link={page.live_link} 
                  variant="Secondary"
                  className="w-full"
                >
                  View Live Project
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </div>

      <RelatedProjects currentProjectUid={uid} />
    </Bounded>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const page = await getProjectBySlug(uid);
  const settings = await getSettings();

  if (!page) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: page.title + " | " + settings.site_title,
    description: `Discover ${page.title}, a project by TechXS KE.`,
    openGraph: {
      images: [{ url: asImageSrc(page.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map((project) => ({ uid: project.uid }));
}
