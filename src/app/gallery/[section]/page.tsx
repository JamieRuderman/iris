import { notFound } from "next/navigation";
import { PhotoGrid } from "@/components/photo-grid";
import {
  getPhotosBySection,
  getSectionTitle,
  photoSections,
} from "@/lib/photos";

interface GallerySectionPageProps {
  params: {
    section: string;
  };
}

export async function generateStaticParams() {
  return photoSections.map((section) => ({
    section: section.id,
  }));
}

export async function generateMetadata({ params }: GallerySectionPageProps) {
  const { section } = await params;
  const sectionTitle = getSectionTitle(section);

  if (!sectionTitle) {
    return {
      title: "Gallery Section Not Found",
    };
  }

  return {
    title: `${sectionTitle} - Iris Ruderman Photography`,
    description: `Photography collection: ${sectionTitle} by Iris Ruderman`,
  };
}

export default async function GallerySectionPage({
  params,
}: GallerySectionPageProps) {
  const { section } = await params;
  const photos = getPhotosBySection(section);
  const sectionTitle = getSectionTitle(section);

  if (!photos.length || !sectionTitle) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-light tracking-wide uppercase text-gray-900 mb-4">
            {sectionTitle}
          </h1>
          <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {photos.length} {photos.length === 1 ? "Image" : "Images"}
          </p>
        </div>

        {/* Photo grid */}
        <PhotoGrid photos={photos} className="max-w-7xl mx-auto" />
      </div>
    </div>
  );
}