export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0a0c]">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-white/10 border-t-[#e2b96f]" />
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.35em] text-[#9a9aa3]">Loading</p>
      </div>
    </main>
  );
}
