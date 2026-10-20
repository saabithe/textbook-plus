import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx"],
  async redirects() {
    // Retired discourse slugs (Oct 2026 consolidation): 18 topics → 9 pages,
    // each old page now lives in a tab of its merged page.
    return [
      { source: "/discourses/job-application-resume", destination: "/discourses/letter-writing#job-application", permanent: true },
      { source: "/discourses/news-report", destination: "/discourses/reports#news-report", permanent: true },
      { source: "/discourses/event-seminar-report", destination: "/discourses/reports#event-seminar-report", permanent: true },
      { source: "/discourses/live-tv-reporting", destination: "/discourses/reports#live-tv-reporting", permanent: true },
      { source: "/discourses/precis-writing", destination: "/discourses/precis-review-blurb#precis-writing", permanent: true },
      { source: "/discourses/review", destination: "/discourses/precis-review-blurb#review", permanent: true },
      { source: "/discourses/book-play-blurb", destination: "/discourses/precis-review-blurb#book-play-blurb", permanent: true },
      { source: "/discourses/speech", destination: "/discourses/spoken-english#speech", permanent: true },
      { source: "/discourses/interview", destination: "/discourses/spoken-english#interview", permanent: true },
      { source: "/discourses/debate", destination: "/discourses/spoken-english#debate", permanent: true },
      { source: "/discourses/conversation", destination: "/discourses/spoken-english#conversation", permanent: true },
      { source: "/discourses/poster-notice-email", destination: "/discourses/announcement-notice#poster", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/sw.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
      {
        source: "/:all*(svg|png|jpg|jpeg|gif|ico|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
