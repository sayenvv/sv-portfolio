export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-2 border-cyan-400/30 border-t-cyan-300" />
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-cyan-300">Loading Portfolio</p>
      </div>
    </main>
  );
}
