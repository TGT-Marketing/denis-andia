import { useQuery } from "@tanstack/react-query";
import { fetchGalleryByAlbum } from "@/lib/cms";

export type GalleryItem = { image: string; caption?: string };

/** Merges images published in the admin panel (by album) with the built-in ones. */
export function useCmsGallery(album: string, base: GalleryItem[]): GalleryItem[] {
  const { data } = useQuery({
    queryKey: ["gallery", album],
    queryFn: () => fetchGalleryByAlbum(album),
    staleTime: 60_000,
  });

  if (!data || data.length === 0) return base;
  return [
    ...data.map((row) => ({ image: row.image_url, caption: row.caption ?? undefined })),
    ...base,
  ];
}
