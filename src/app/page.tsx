import { PhotoGrid } from "@/components/photo-grid";
import { getHomePagePhotos } from "@/lib/photos";

export default function Home() {
  const photos = getHomePagePhotos();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide uppercase text-gray-900 mb-4">
            Iris Ruderman
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-600 max-w-3xl mx-auto">
            A photographic exploration of memory, place, and identity through
            intimate portraits and documentary storytelling.
          </p>
        </div>

        {/* Photo grid */}
        <PhotoGrid photos={photos} className="max-w-7xl mx-auto" />
      </div>
    </div>
  );
}
