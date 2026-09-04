import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { SettingRow } from "@/lib/cms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/configuracoes")({
  component: AdminSettings,
});

function AdminSettings() {
  const qc = useQueryClient();
  const [values, setValues] = useState<Record<string, string>>({});

  const { data: settings = [] } = useQuery({
    queryKey: ["admin", "settings"],
    queryFn: async () => {
      const { data, error } = await supabase.from("site_settings").select("*").order("key");
      if (error) throw error;
      return (data ?? []) as SettingRow[];
    },
  });

  useEffect(() => {
    if (settings.length) {
      setValues(Object.fromEntries(settings.map((s) => [s.key, s.value ?? ""])));
    }
  }, [settings]);

  const save = useMutation({
    mutationFn: async () => {
      for (const s of settings) {
        const { error } = await supabase
          .from("site_settings")
          .update({ value: values[s.key] ?? "", updated_at: new Date().toISOString() })
          .eq("key", s.key);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast.success("Configurações salvas.");
      void qc.invalidateQueries({ queryKey: ["admin", "settings"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Erro ao salvar."),
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Configurações</h2>
        <p className="text-sm text-muted-foreground">Informações gerais e contatos do site.</p>
      </div>

      <Card>
        <CardContent className="space-y-4 p-4">
          {settings.map((s) => (
            <div key={s.key} className="space-y-2">
              <Label htmlFor={s.key}>{s.label ?? s.key}</Label>
              <Input
                id={s.key}
                maxLength={300}
                value={values[s.key] ?? ""}
                onChange={(e) => setValues({ ...values, [s.key]: e.target.value })}
              />
            </div>
          ))}
          <Button disabled={save.isPending} onClick={() => save.mutate()}>
            {save.isPending ? "Salvando…" : "Salvar alterações"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
