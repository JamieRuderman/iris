"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { Photo } from "@/lib/photos";

interface PhotoViewerProps {
  photos: Photo[];
  currentPhoto: Photo | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (photo: Photo) => void;
}

export function PhotoViewer({
  photos,
  currentPhoto,
  isOpen,
  onClose,
  onNavigate,
}: PhotoViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (currentPhoto && photos.length > 0) {
      const index = photos.findIndex((photo) => photo.id === currentPhoto.id);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [currentPhoto, photos]);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  const handlePrevious = useCallback(() => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    setCurrentIndex(newIndex);
    onNavigate?.(photos[newIndex]);
  }, [currentIndex, photos, onNavigate]);

  const handleNext = useCallback(() => {
    const newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    onNavigate?.(photos[newIndex]);
  }, [currentIndex, photos, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          handlePrevious();
          break;
        case "ArrowRight":
          handleNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    isOpen,
    currentIndex,
    photos.length,
    handleNext,
    handlePrevious,
    onClose,
  ]);

  if (!currentPhoto) return null;

  const photo = photos[currentIndex] || currentPhoto;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-white" />
      <DialogContent
        className="max-w-[100vw] max-h-[100vh] w-full h-full p-0 border-0 bg-white"
        style={{ maxWidth: "100vw", maxHeight: "100vh" }}
      >
        <DialogTitle className="sr-only">Photo Viewer</DialogTitle>
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
          >
            <X size={24} />
          </button>

          {/* Navigation buttons */}
          {photos.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Photo counter */}
          {photos.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
              {currentIndex + 1} / {photos.length}
            </div>
          )}

          {/* Main image - Full screen centered */}
          <div className="absolute inset-0">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <Image
              src={photo.path}
              alt={photo.filename}
              fill
              className={cn(
                "object-contain transition-opacity duration-300",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
