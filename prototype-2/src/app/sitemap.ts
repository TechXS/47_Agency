import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://techxs.dpdns.org';
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    // i'll Add other pages later, e.g. { url: `${baseUrl}/projects`, ... }
  ];
}
