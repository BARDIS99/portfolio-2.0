import { useState } from 'react'
import { TrendingUp, ShieldAlert, BarChart3, ArrowUpRight, Zap, Target, Lock } from 'lucide-react'
import { TRADING_METHODOLOGY } from '../data/projectsData'

export default function TradingDeskSection() {
  const [activeMarket, setActiveMarket] = useState('Crypto')

  const marketWatches = [
    { pair: 'BTC / USD', type: 'Crypto', status: 'Liquidity Expansion', bias: 'Bullish Continuation', range: '$64,200 - $68,500' },
    { pair: 'XAU / USD', type: 'Commodity', status: 'Order Block Retest', bias: 'Institutional Accumulation', range: '$2,640 - $2,680' },
    { pair: 'EUR / USD', type: 'FX Major', status: 'Discount FVG Fill', bias: 'Mean Reversion', range: '1.0820 - 1.0910' }
  ]

  return (
    <section id="trading" className="py-24 relative z-10 border-t border-stone-200/80 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-stone-600 font-semibold">
              <TrendingUp className="w-4 h-4 text-stone-900" />
              <span>Dual Discipline · Code & Capital</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl tracking-tight text-stone-900 leading-[1.05]">
              Developer Logic. <br />
              <span className="italic font-normal text-stone-600">Trader's Risk Discipline.</span>
            </h2>
            <p className="text-base text-stone-600 leading-relaxed font-normal">
              Software engineering demands clear structure and clean abstractions. Financial trading demands psychological mastery and asymmetric risk control. I combine both.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm text-xs font-mono-tech text-stone-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Desk · Systematic Execution</span>
          </div>
        </div>

        {/* 3-Column Luxury Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Market Structure & Framework */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-900 border border-stone-200">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono-tech text-stone-400 uppercase">METHODOLOGY</div>
                <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                  Institutional Order Flow
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Trading based on liquidity sweeps, market structure shifts, and fair value gaps rather than lagging retail indicators.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 space-y-2 text-xs font-mono-tech text-stone-700">
              <div className="flex items-center justify-between">
                <span className="text-stone-400">Timeframe:</span>
                <span className="font-medium text-stone-900">4H High-Timeframe / 15m Entry</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-400">Execution:</span>
                <span className="font-medium text-stone-900">Limit Orders at Key POIs</span>
              </div>
            </div>
          </div>

          {/* Card 2: Risk Architecture (Strict Capital Preservation) */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-900 border border-stone-200">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono-tech text-stone-400 uppercase">RISK PROTOCOL</div>
                <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                  Asymmetric Capital Control
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Survival and longevity come first. Every single trade adheres to fixed mathematical risk with non-negotiable stop losses.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 space-y-2 text-xs font-mono-tech text-stone-700">
              <div className="flex items-center justify-between">
                <span className="text-stone-400">Max Risk / Trade:</span>
                <span className="font-bold text-emerald-700">1.0% Capital Max</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-400">Target Asymmetry:</span>
                <span className="font-bold text-stone-900">1:3.0+ Minimum RR</span>
              </div>
            </div>
          </div>

          {/* Card 3: The Developer Advantage in Trading */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-900 border border-stone-200">
                <Zap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono-tech text-stone-400 uppercase">THE ADVANTAGE</div>
                <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                  Algorithmic Tooling
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                As a developer, I build custom scrapers, position calculators, and statistical journals to validate market edge with data.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 space-y-2 text-xs font-mono-tech text-stone-700">
              <div className="flex items-center justify-between">
                <span className="text-stone-400">Tooling Stack:</span>
                <span className="font-medium text-stone-900">TypeScript · Python · APIs</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-400">Focus:</span>
                <span className="font-medium text-stone-900">Custom Market Intelligence</span>
              </div>
            </div>
          </div>

        </div>

        {/* Live Market Watch Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono-tech text-stone-400 font-semibold uppercase">
              CURRENT WATCHLIST & KEY LEVELS
            </div>
            <div className="text-xs font-mono-tech text-stone-500">
              Markets: Crypto · FX · Gold
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {marketWatches.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2 hover:border-stone-400 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech font-bold text-stone-900 text-sm">
                    {item.pair}
                  </span>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded-full bg-stone-200 text-stone-700 font-medium">
                    {item.type}
                  </span>
                </div>
                <div className="text-xs text-stone-600">
                  {item.status}
                </div>
                <div className="text-[11px] font-mono-tech text-emerald-700 font-medium pt-1 border-t border-stone-200/60">
                  Structure: {item.bias}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
