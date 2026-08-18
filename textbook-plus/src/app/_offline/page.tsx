import Image from "next/image";

export default function OfflinePage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
      <Image
        src="/icon.svg"
        alt="Textbook++"
        width={80}
        height={80}
        className="dark:invert"
        priority
      />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">
          You&apos;re offline
        </h1>
        <p className="text-muted-foreground">
          Check your internet connection and try again.
        </p>
      </div>
    </div>
  );
}
