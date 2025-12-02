export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6 max-w-screen-2xl mx-auto w-full">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        </div>
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
          <h2 className="text-xl font-semibold text-slate-700 mb-2">Coming Soon</h2>
          <p className="text-slate-500 max-w-md">
            We're working on a new way to explore topics that matter to you. Check back later for updates!
          </p>
        </div>
      </main>
    </div>
  )
}
