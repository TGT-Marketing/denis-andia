import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children, transparentHeader = false }: { children: ReactNode; transparentHeader?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className={transparentHeader ? "relative" : "relative bg-ink"} style={!transparentHeader ? { backgroundColor: "var(--ink)" } : undefined}>
        <Header />
        {!transparentHeader && <div className="h-24" />}
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
