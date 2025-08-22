"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PhotoViewer } from "./photo-viewer";
import type { Photo } from "@/lib/photos";

interface PhotoGridProps {
  photos: Photo[];
  className?: string;
}

export function PhotoGrid({ photos, className }: PhotoGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
    setSelectedPhoto(null);
  };

  const handleNavigate = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <>
      <div
        className={cn(
          "grid gap-4 auto-rows-[300px]",
          // Responsive grid columns
          "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
          className
        )}
      >
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={cn(
              "relative group cursor-pointer overflow-hidden bg-gray-100 rounded-sm",
              // Varied heights for masonry-like effect (similar to Levon Biss)
              index % 7 === 0 && "row-span-2",
              index % 11 === 0 && "col-span-1 sm:col-span-2",
              index % 13 === 0 && "row-span-1"
            )}
            onClick={() => handlePhotoClick(photo)}
          >
            <Image
              src={photo.path}
              alt={photo.filename}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Hover overlay with photo info */}
            <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm font-light truncate">
                  {photo.filename.replace(/\.jpg$/i, "")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PhotoViewer
        photos={photos}
        currentPhoto={selectedPhoto}
        isOpen={isViewerOpen}
        onClose={handleCloseViewer}
        onNavigate={handleNavigate}
      />
    </>
  );
}
