export function SectionSkeleton() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-8 md:px-8" aria-hidden="true">
      <div className="h-6 w-40 animate-pulse rounded bg-white/10" />
      <div className="mt-4 h-4 w-full max-w-3xl animate-pulse rounded bg-white/10" />
      <div className="mt-2 h-4 w-4/5 animate-pulse rounded bg-white/10" />
    </div>
  );
}
