export interface PhotoSection {
  id: string;
  title: string;
  photos: Photo[];
}

export interface Photo {
  id: string;
  filename: string;
  path: string;
  section: string;
}

export const photoSections: PhotoSection[] = [
  {
    id: "1-memorial-tattoos",
    title: "Memorial Tattoos",
    photos: [
      {
        id: "memorial-1",
        filename: "Ruderman_Final Portfolio_Spring 2024_06.jpg",
        path: "/photos/1-memorial-tattoos/Ruderman_Final Portfolio_Spring 2024_06.jpg",
        section: "1-memorial-tattoos",
      },
      {
        id: "memorial-2",
        filename: "Ruderman_Final Portfolio_Spring 2024_16.jpg",
        path: "/photos/1-memorial-tattoos/Ruderman_Final Portfolio_Spring 2024_16.jpg",
        section: "1-memorial-tattoos",
      },
      {
        id: "memorial-3",
        filename: "Ruderman_Final Portfolio_Spring 2024_23.jpg",
        path: "/photos/1-memorial-tattoos/Ruderman_Final Portfolio_Spring 2024_23.jpg",
        section: "1-memorial-tattoos",
      },
    ],
  },
  {
    id: "2-female-artists",
    title: "Female Artists",
    photos: [
      {
        id: "female-1",
        filename: "Ruderman_junkyard.jpg",
        path: "/photos/2-female-artists/Ruderman_junkyard.jpg",
        section: "2-female-artists",
      },
      {
        id: "female-2",
        filename: "Ruderman_library.jpg",
        path: "/photos/2-female-artists/Ruderman_library.jpg",
        section: "2-female-artists",
      },
      {
        id: "female-3",
        filename: "Ruderman_photo.jpg",
        path: "/photos/2-female-artists/Ruderman_photo.jpg",
        section: "2-female-artists",
      },
      {
        id: "female-4",
        filename: "Ruderman_room.jpg",
        path: "/photos/2-female-artists/Ruderman_room.jpg",
        section: "2-female-artists",
      },
    ],
  },
  {
    id: "3-woven",
    title: "Woven",
    photos: [
      {
        id: "woven-1",
        filename: "Ruderman_Seyes.jpg",
        path: "/photos/3-woven/Ruderman_Seyes.jpg",
        section: "3-woven",
      },
      {
        id: "woven-2",
        filename: "Ruderman_Sfence.jpg",
        path: "/photos/3-woven/Ruderman_Sfence.jpg",
        section: "3-woven",
      },
      {
        id: "woven-3",
        filename: "Ruderman_Sgreenhouse.jpg",
        path: "/photos/3-woven/Ruderman_Sgreenhouse.jpg",
        section: "3-woven",
      },
      {
        id: "woven-4",
        filename: "Ruderman_Shands.jpg",
        path: "/photos/3-woven/Ruderman_Shands.jpg",
        section: "3-woven",
      },
      {
        id: "woven-5",
        filename: "Ruderman_Swonky.jpg",
        path: "/photos/3-woven/Ruderman_Swonky.jpg",
        section: "3-woven",
      },
    ],
  },
  {
    id: "4-summerfield",
    title: "Summerfield",
    photos: [
      {
        id: "summer-1",
        filename: "Ruderman 1.jpg",
        path: "/photos/4-summerfield/Ruderman 1.jpg",
        section: "4-summerfield",
      },
      {
        id: "summer-2",
        filename: "Ruderman 2.jpg",
        path: "/photos/4-summerfield/Ruderman 2.jpg",
        section: "4-summerfield",
      },
      {
        id: "summer-3",
        filename: "Ruderman 3.jpg",
        path: "/photos/4-summerfield/Ruderman 3.jpg",
        section: "4-summerfield",
      },
      {
        id: "summer-4",
        filename: "Ruderman 4.jpg",
        path: "/photos/4-summerfield/Ruderman 4.jpg",
        section: "4-summerfield",
      },
      {
        id: "summer-5",
        filename: "scan20250421_09160926.jpg",
        path: "/photos/4-summerfield/scan20250421_09160926.jpg",
        section: "4-summerfield",
      },
    ],
  },
  {
    id: "5-collections",
    title: "Collections",
    photos: [
      {
        id: "collection-1",
        filename: "Ruderman 13.jpg",
        path: "/photos/5-collections/Ruderman 13.jpg",
        section: "5-collections",
      },
      {
        id: "collection-2",
        filename: "Ruderman 15.jpg",
        path: "/photos/5-collections/Ruderman 15.jpg",
        section: "5-collections",
      },
      {
        id: "collection-3",
        filename: "Ruderman 6.jpg",
        path: "/photos/5-collections/Ruderman 6.jpg",
        section: "5-collections",
      },
      {
        id: "collection-4",
        filename: "Ruderman 8.jpg",
        path: "/photos/5-collections/Ruderman 8.jpg",
        section: "5-collections",
      },
      {
        id: "collection-5",
        filename: "Ruderman 9.jpg",
        path: "/photos/5-collections/Ruderman 9.jpg",
        section: "5-collections",
      },
    ],
  },
  {
    id: "6-special-places",
    title: "Special Places",
    photos: [
      {
        id: "special-1",
        filename: "Ruderman_Final Portfolio_Spring 2024_02.jpg",
        path: "/photos/6-special-places/Ruderman_Final Portfolio_Spring 2024_02.jpg",
        section: "6-special-places",
      },
      {
        id: "special-2",
        filename: "Ruderman_Final Portfolio_Spring 2024_05.jpg",
        path: "/photos/6-special-places/Ruderman_Final Portfolio_Spring 2024_05.jpg",
        section: "6-special-places",
      },
      {
        id: "special-3",
        filename: "Ruderman_Final Portfolio_Spring 2024_08.jpg",
        path: "/photos/6-special-places/Ruderman_Final Portfolio_Spring 2024_08.jpg",
        section: "6-special-places",
      },
      {
        id: "special-4",
        filename: "Ruderman_Final Portfolio_Spring 2024_10.jpg",
        path: "/photos/6-special-places/Ruderman_Final Portfolio_Spring 2024_10.jpg",
        section: "6-special-places",
      },
      {
        id: "special-5",
        filename: "Ruderman_Final Portfolio_Spring 2024_12.jpg",
        path: "/photos/6-special-places/Ruderman_Final Portfolio_Spring 2024_12.jpg",
        section: "6-special-places",
      },
    ],
  },
  {
    id: "7-ode-to-ishiuchi-miyako",
    title: "Ode to Ishiuchi Miyako",
    photos: [
      {
        id: "ode-1",
        filename: "scan20250421_09092069.jpg",
        path: "/photos/7-ode-to-ishiuchi-miyako/scan20250421_09092069.jpg",
        section: "7-ode-to-ishiuchi-miyako",
      },
      {
        id: "ode-2",
        filename: "scan20250421_09095334.jpg",
        path: "/photos/7-ode-to-ishiuchi-miyako/scan20250421_09095334.jpg",
        section: "7-ode-to-ishiuchi-miyako",
      },
      {
        id: "ode-3",
        filename: "scan20250421_09111420.jpg",
        path: "/photos/7-ode-to-ishiuchi-miyako/scan20250421_09111420.jpg",
        section: "7-ode-to-ishiuchi-miyako",
      },
      {
        id: "ode-4",
        filename: "scan20250421_09112011.jpg",
        path: "/photos/7-ode-to-ishiuchi-miyako/scan20250421_09112011.jpg",
        section: "7-ode-to-ishiuchi-miyako",
      },
    ],
  },
  {
    id: "8-misc",
    title: "Miscellaneous",
    photos: [
      {
        id: "misc-1",
        filename: "Ruderman 16.jpg",
        path: "/photos/8-misc/Ruderman 16.jpg",
        section: "8-misc",
      },
      {
        id: "misc-2",
        filename: "Ruderman_Final Portfolio_Spring 2024_15.jpg",
        path: "/photos/8-misc/Ruderman_Final Portfolio_Spring 2024_15.jpg",
        section: "8-misc",
      },
      {
        id: "misc-3",
        filename: "Ruderman_Final Portfolio_Spring 2024_20.jpg",
        path: "/photos/8-misc/Ruderman_Final Portfolio_Spring 2024_20.jpg",
        section: "8-misc",
      },
      {
        id: "misc-4",
        filename: "Ruderman_Final Portfolio_Spring 2024_24.jpg",
        path: "/photos/8-misc/Ruderman_Final Portfolio_Spring 2024_24.jpg",
        section: "8-misc",
      },
      {
        id: "misc-5",
        filename: "Ruderman_scans01.jpg",
        path: "/photos/8-misc/Ruderman_scans01.jpg",
        section: "8-misc",
      },
      {
        id: "misc-6",
        filename: "Ruderman_scans02.jpg",
        path: "/photos/8-misc/Ruderman_scans02.jpg",
        section: "8-misc",
      },
      {
        id: "misc-7",
        filename: "Ruderman_scans04.jpg",
        path: "/photos/8-misc/Ruderman_scans04.jpg",
        section: "8-misc",
      },
      {
        id: "misc-8",
        filename: "Ruderman_scans17.jpg",
        path: "/photos/8-misc/Ruderman_scans17.jpg",
        section: "8-misc",
      },
      {
        id: "misc-9",
        filename: "Ruderman_scans19.jpg",
        path: "/photos/8-misc/Ruderman_scans19.jpg",
        section: "8-misc",
      },
      {
        id: "misc-10",
        filename: "Ruderman_weaving2.jpg",
        path: "/photos/8-misc/Ruderman_weaving2.jpg",
        section: "8-misc",
      },
    ],
  },
];

// Get all photos for the home page gallery (using a mix from different sections)
export const getAllPhotos = (): Photo[] => {
  return photoSections.flatMap((section) => section.photos);
};

// Get a curated selection of photos for the home page (from various sections)
export const getHomePagePhotos = (): Photo[] => {
  // Return a mix of photos from different sections for the home page
  const allPhotos = getAllPhotos();

  // Select representative photos from different sections
  return [
    // From memorial tattoos
    allPhotos.find((p) => p.id === "memorial-1"),
    allPhotos.find((p) => p.id === "memorial-2"),
    // From female artists
    allPhotos.find((p) => p.id === "female-1"),
    allPhotos.find((p) => p.id === "female-3"),
    // From woven
    allPhotos.find((p) => p.id === "woven-2"),
    allPhotos.find((p) => p.id === "woven-4"),
    // From summerfield
    allPhotos.find((p) => p.id === "summer-1"),
    allPhotos.find((p) => p.id === "summer-3"),
    // From collections
    allPhotos.find((p) => p.id === "collection-2"),
    allPhotos.find((p) => p.id === "collection-4"),
    // From special places
    allPhotos.find((p) => p.id === "special-1"),
    allPhotos.find((p) => p.id === "special-3"),
    // From ode to ishiuchi miyako
    allPhotos.find((p) => p.id === "ode-1"),
    allPhotos.find((p) => p.id === "ode-3"),
    // From miscellaneous
    allPhotos.find((p) => p.id === "misc-1"),
    allPhotos.find((p) => p.id === "misc-5"),
  ].filter(Boolean) as Photo[]; // Remove any undefined entries
};

export const getPhotosBySection = (sectionId: string): Photo[] => {
  const section = photoSections.find((s) => s.id === sectionId);
  return section ? section.photos : [];
};

export const getSectionTitle = (sectionId: string): string => {
  const section = photoSections.find((s) => s.id === sectionId);
  return section ? section.title : "";
};
