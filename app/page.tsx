import { createClient } from '@supabase/supabase-js'

// 1. Fungsi Utama Dashboard
export default async function RosterPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  
  // Ambil data dari table staffing_roster
  const { data: roster } = await supabase.from('staffing_roster').select('*')

  return (
    <main className="p-2 bg-[#0f172a] min-h-screen text-slate-200 font-sans">
      <div className="flex justify-between items-center mb-3 border-b border-slate-700 pb-2">
        <h1 className="text-sm font-bold text-white uppercase tracking-tighter italic text-emerald-400">CMS Medical BOSH</h1>
        <span className="text-[9px] bg-emerald-600 px-2 py-0.5 rounded-full font-bold animate-pulse text-white text-xs">LIVE</span>
      </div>
      
      <div className="border border-slate-700 rounded-sm overflow-hidden bg-slate-900 shadow-2xl">
        <table className="w-full text-left border-collapse table-fixed text-[11px]">
          <thead>
            <tr className="bg-slate-800 text-white border-b border-slate-700">
              <th className="p-2 border-r border-slate-700 w-1/2">CREW / TRADE</th>
              <th className="p-1 border-r border-slate-700 text-center">FEB 01</th>
              <th className="p-1 border-r border-slate-700 text-center">FEB 02</th>
              <th className="p-1 text-center">FEB 03</th>
            </tr>
          </thead>
          <tbody>
            {roster?.map((crew) => (
              <tr key={crew.id} className="border-b border-slate-800 h-12 hover:bg-slate-800/50">
                <td className="p-2 border-r border-slate-700 bg-slate-900/80">
                  <div className="font-bold text-white uppercase truncate">{crew.full_name}</div>
                  <div className="text-[10px] text-blue-400 font-bold uppercase tracking-tight">{crew.trade}</div>
                </td>
                {/* Bar Visual - Tanpa Gap */}
                <td className="p-0 border-r border-slate-700 bg-emerald-600/20 relative">
                   <div className="absolute inset-0 border-y-4 border-emerald-500"></div>
                   <div className="relative z-10 text-center text-[9px] font-black text-emerald-400">ON</div>
                </td>
                <td className="p-0 border-r border-slate-700 bg-slate-950"></td>
                <td className="p-0 bg-slate-950 text-center text-slate-700">.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[10px] mt-4 text-slate-500 italic text-center">Auto-sync with Supabase active.</p>
    </main>
  )
}
