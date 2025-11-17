import Spline from '@splinetool/react-spline'
import { ArrowRight, Bot, Sparkles } from 'lucide-react'

export default function Hero({ onStart }) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-purple-300" />
          <span className="text-sm text-purple-100">AI voice agent aura • realtime insights</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
          AI‑Powered CRM Suite
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto">
          Centralize contacts, deals, and activities with built‑in AI that summarizes calls, suggests next steps, and keeps your pipeline moving.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onStart} className="group inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition">
            Start free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </button>
          <a href="#demo" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white/90 hover:bg-white/10 transition">
            <Bot className="w-4 h-4" /> Live demo
          </a>
        </div>
      </div>
    </section>
  )
}
