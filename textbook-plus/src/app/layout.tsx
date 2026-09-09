import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { SyncProvider } from "@/components/auth/SyncProvider";
import { MigrateBanner } from "@/components/auth/MigrateBanner";
import { ErrorBoundary } from "@/components/auth/ErrorBoundary";
import { ServiceWorkerRegistration } from "@/components/layout/ServiceWorkerRegistration";
import { UpdateBanner } from "@/components/layout/UpdateBanner";
import { getBuildCommit } from "@/lib/build-info";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const buildCommit = getBuildCommit();

export const metadata: Metadata = {
  title: "Textbook++",
  description: "Your interactive NCERT Class 12 companion",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Textbook++",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <meta name="build-commit" content={buildCommit} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var meta = document.createElement('meta');
                meta.name = 'theme-color';
                document.head.appendChild(meta);
                function sync() {
                  meta.content = document.documentElement.classList.contains('dark') ? '#20242F' : '#FAFAFA';
                }
                sync();
                new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <TooltipProvider>
            <AuthProvider>
              <SyncProvider>
                <MigrateBanner />
                <ServiceWorkerRegistration />
                <UpdateBanner />
                <ErrorBoundary>
                  {children}
                </ErrorBoundary>
                <Toaster position="bottom-center" />
              </SyncProvider>
            </AuthProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
