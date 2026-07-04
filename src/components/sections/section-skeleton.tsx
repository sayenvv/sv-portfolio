export function SectionSkeleton() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8" aria-hidden="true">
      <div className="h-5 w-36 animate-pulse rounded-full bg-white/[0.06]" />
      <div className="mt-6 h-9 w-full max-w-2xl animate-pulse rounded-lg bg-white/[0.06]" />
      <div className="mt-3 h-4 w-4/5 max-w-xl animate-pulse rounded bg-white/[0.06]" />
    </div>
  );
}
