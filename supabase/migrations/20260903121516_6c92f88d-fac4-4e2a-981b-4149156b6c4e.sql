GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;

DROP POLICY "public reads published news" ON public.news;
CREATE POLICY "anon reads published news" ON public.news FOR SELECT TO anon USING (status = 'published');
CREATE POLICY "auth reads news" ON public.news FOR SELECT TO authenticated USING (status = 'published' OR public.has_role(auth.uid(), 'admin'));

DROP POLICY "public reads active banners" ON public.banners;
CREATE POLICY "anon reads active banners" ON public.banners FOR SELECT TO anon USING (active = true);
CREATE POLICY "auth reads banners" ON public.banners FOR SELECT TO authenticated USING (active = true OR public.has_role(auth.uid(), 'admin'));

DROP POLICY "public reads gallery" ON public.gallery_images;
CREATE POLICY "anyone reads gallery" ON public.gallery_images FOR SELECT TO anon, authenticated USING (true);

DROP POLICY "public reads settings" ON public.site_settings;
CREATE POLICY "anyone reads settings" ON public.site_settings FOR SELECT TO anon, authenticated USING (true);