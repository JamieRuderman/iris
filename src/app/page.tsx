import { PhotoGrid } from "@/components/photo-grid";
import { getHomePagePhotos } from "@/lib/photos";

export default function Home() {
  const photos = getHomePagePhotos();

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Photo grid */}
        <PhotoGrid photos={photos} className="max-w-7xl mx-auto" />
      </div>
    </div>
  );
}