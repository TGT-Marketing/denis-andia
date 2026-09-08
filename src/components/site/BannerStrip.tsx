import { useQuery } from "@tanstack/react-query";
import { fetchActiveBanners } from "@/lib/cms";

/** Renders banners published in the admin panel. Nothing is shown when there are none. */
export function BannerStrip() {
  const { data: banners = [] } = useQuery({
    queryKey: ["banners", "active"],
    queryFn: fetchActiveBanners,
    staleTime: 60_000,
  });

  if (banners.length === 0) return null;

  return (
    <section className="bg-background pt-10 md:pt-16">
      <div className="mx-auto grid max-w-[1400px] gap-6 px-6 md:px-10 lg:grid-cols-2">
        {banners.map((banner) => {
          const inner = (
            <figure className="group overflow-hidden rounded-2xl bg-card shadow-card">
              {banner.image_url && (
                <img
                  src={banner.image_url}
                  alt={banner.title ?? "Banner"}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-72"
                />
              )}
              {(banner.title || banner.text) && (
                <figcaption className="p-5">
                  {banner.title && (
                    <p className="text-lg font-black uppercase tracking-tight text-foreground">{banner.title}</p>
                  )}
                  {banner.text && <p className="mt-1 text-sm text-muted-foreground">{banner.text}</p>}
                </figcaption>
              )}
            </figure>
          );

          return banner.link_url ? (
            <a key={banner.id} href={banner.link_url} target="_blank" rel="noopener noreferrer">
              {inner}
            </a>
          ) : (
            <div key={banner.id}>{inner}</div>
          );
        })}
      </div>
    </section>
  );
}
