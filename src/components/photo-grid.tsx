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
      {/* Proper Masonry Layout - 3 columns */}
      <div
        className={cn(className)}
        style={{
          columnCount: 3,
          columnGap: "1rem",
          columnFill: "balance",
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="cursor-pointer bg-gray-100 rounded-sm mb-4 break-inside-avoid"
            onClick={() => handlePhotoClick(photo)}
          >
            <Image
              src={photo.path}
              alt={photo.filename}
              width={400}
              height={300}
              className="w-full h-auto block"
              sizes="33vw"
            />
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