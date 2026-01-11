import { ReactNode, forwardRef } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </div>
    );
  }
);

Layout.displayName = "Layout";
