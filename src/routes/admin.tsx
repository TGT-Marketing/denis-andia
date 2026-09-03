import { createFileRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminSession } from "@/hooks/useAdminSession";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { LayoutDashboard, Newspaper, Image, Images, Settings, LogOut } from "lucide-react";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Painel administrativo — Denis Andia" },
      { name: "description", content: "Área restrita de gerenciamento de conteúdo do site." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminLayout,
});

const NAV = [
  { to: "/admin", label: "Visão geral", icon: LayoutDashboard, exact: true },
  { to: "/admin/noticias", label: "Notícias", icon: Newspaper, exact: false },
  { to: "/admin/banners", label: "Banners", icon: Image, exact: false },
  { to: "/admin/galeria", label: "Galeria", icon: Images, exact: false },
  { to: "/admin/configuracoes", label: "Configurações", icon: Settings, exact: false },
] as const;

function AdminLayout() {
  const { session, isAdmin, loading } = useAdminSession();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30 text-muted-foreground">
        Carregando…
      </div>
    );
  }

  if (!session) return <LoginCard />;

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Acesso restrito</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Sua conta não tem permissão de administrador. Peça a um administrador para liberar o acesso.
            </p>
            <Button variant="outline" onClick={() => supabase.auth.signOut()}>
              Sair
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/admin", replace: true });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Painel</p>
            <h1 className="text-lg font-bold">Denis Andia — CMS</h1>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="hidden text-sm text-muted-foreground hover:underline sm:inline">
              Ver site
            </a>
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="mr-2 h-4 w-4" /> Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row">
        <nav className="flex gap-2 overflow-x-auto lg:w-56 lg:flex-col lg:overflow-visible">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact ?? false }}
              activeProps={{ className: "bg-primary text-primary-foreground" }}
              className="flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Bem-vindo de volta!");
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        toast.success("Conta criada com sucesso.");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Não foi possível entrar.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{mode === "login" ? "Entrar no painel" : "Criar conta de acesso"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={busy}>
              {busy ? "Aguarde…" : mode === "login" ? "Entrar" : "Criar conta"}
            </Button>
            <button
              type="button"
              className="w-full text-sm text-muted-foreground hover:underline"
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
            >
              {mode === "login" ? "Primeiro acesso? Criar conta" : "Já tenho conta. Entrar"}
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
