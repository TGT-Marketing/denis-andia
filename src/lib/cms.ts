import { supabase } from "@/integrations/supabase/client";

export type NewsRow = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  excerpt: string | null;
  content: string;
  category: string | null;
  image_url: string | null;
  status: string;
  featured: boolean;
  published_at: string;
  sort_order: number;
};

export type BannerRow = {
  id: string;
  title: string | null;
  text: string | null;
  image_url: string | null;
  link_url: string | null;
  active: boolean;
  sort_order: number;
};

export type GalleryRow = {
  id: string;
  album: string;
  image_url: string;
  caption: string | null;
  sort_order: number;
};

export type SettingRow = {
  key: string;
  value: string | null;
  label: string | null;
};

const TEN_YEARS = 60 * 60 * 24 * 365 * 10;

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

export async function uploadMedia(file: File, folder = "uploads") {
  const ext = file.name.split(".").pop() ?? "bin";
  const path = `${folder}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from("media").upload(path, file, {
    cacheControl: "31536000",
    upsert: false,
  });
  if (error) throw error;

  const { data, error: signError } = await supabase.storage
    .from("media")
    .createSignedUrl(path, TEN_YEARS);
  if (signError) throw signError;
  return data.signedUrl;
}

export function paragraphsOf(content: string) {
  return content
    .split(/\n{2,}|\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export async function fetchPublishedNews() {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("status", "published")
    .order("featured", { ascending: false })
    .order("sort_order", { ascending: true })
    .order("published_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as NewsRow[];
}
