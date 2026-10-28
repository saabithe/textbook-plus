import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans, Source_Serif_4, Noto_Naskh_Arabic, IBM_Plex_Sans_Arabic, Scheherazade_New } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
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

/* DM Sans — the reading face for .prose-custom (chapter content). The app
   shell keeps Plus Jakarta Sans above. */
const dmSans = DM_Sans({
  variable: "--font-content",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* Arabic typefaces — Noto Naskh Arabic is the primary naskh (tashkeel),
   Scheherazade New is the backup/rollback face, and IBM Plex Sans Arabic is
   the UI/label sans rendered on Arabic pages. */
const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});
const scheherazadeNew = Scheherazade_New({
  variable: "--font-arabic-backup",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic-ui",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
    <html lang="en" className={`${jakarta.variable} ${dmSans.variable} ${serif.variable} ${notoNaskhArabic.variable} ${scheherazadeNew.variable} ${plexArabic.variable} h-full antialiased`} suppressHydrationWarning>
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
                  meta.content = document.documentElement.classList.contains('dark') ? '#1B1E27' : '#FAFAFA';
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
          <ServiceWorkerRegistration />
          <UpdateBanner />
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
          <Toaster position="bottom-center" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
